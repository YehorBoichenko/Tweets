import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { fetchUsers, updateUsers } from "../../services/api";
import { areUsersEqual, filterUniqueValues } from "../../utils/compareArray";
import { useLocalState } from "../../utils/hooks/useLocalStorage";
import {
  ITEM_LIMIT_PER_PAGE,
  localStorageKeys,
  TOTAL_ITEMS_COUNT,
} from "../../utils/constants/constants";
import { CardList } from "../../components/CardList/CardList";
import { TweetsBar } from "../../components/TweetsBar/TweetsBar";
import { Filter } from "../../components/Filter/Filter";
import { GoBack } from "../../components/Goback/GoBack";
import { LoadMore } from "../../components/LoadMore/LoadMore";
import { GoUp } from "../../components/GoUp/GoUp";
import { centredItems } from "../../utils/mainStyles";

export const Tweetspage = () => {
  const [users, setUsers] = useLocalState(localStorageKeys.users, []);
  const [filter, setFilter] = useLocalState(localStorageKeys.filter, [
    "Show all",
  ]);
  const [followings, setFollowings] = useLocalState(
    localStorageKeys.followings,
    []
  );
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(TOTAL_ITEMS_COUNT);
  const [indexLimit, setIndexLimit] = useState(ITEM_LIMIT_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [isOffsetPage, setIsOffsetPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchUsers(page);

      setUsers((prevUsers) => {
        const newUser = data.map((user) => {
          if (followings.includes(user.id)) {
            return { ...user, isFollow: true };
          }
          return { ...user, isFollow: false };
        });

        const compareUsers = filterUniqueValues(prevUsers, data, areUsersEqual);

        return [...compareUsers, ...newUser];
      });

      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const offsetTrigger = 350;

    window.addEventListener("scroll", () => {
      window.scrollY > offsetTrigger
        ? setIsOffsetPage(true)
        : setIsOffsetPage(false);
    });
  }, []);

  const handleFollowers = async (userId) => {
    setFollowings((prevFollowings) => {
      const index = prevFollowings.indexOf(userId);

      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user.id === userId) {
            user.isFollow = !user.isFollow;
            user.followers = user.isFollow
              ? user.followers + 1
              : user.followers - 1;
          }
          return user;
        })
      );

      if (index === -1) {
        return [...prevFollowings, userId];
      } else {
        prevFollowings.splice(index, 1);
        return [...prevFollowings];
      }
    });

    const [user] = users.filter((user) => user.id === userId);
    updateUsers(userId, user.followers);
  };

  const handleFilter = (value, closeMenufn, setSelectedItem) => {
    setFilter(value);
    setSelectedItem(value);
    setPage(1);
    setIndexLimit(ITEM_LIMIT_PER_PAGE);
    closeMenufn(null);

    if (value === "Follow") setTotalHits(TOTAL_ITEMS_COUNT - followings.length);

    if (value === "Followings") setTotalHits(followings.length);

    if (value === "Show all") setTotalHits(TOTAL_ITEMS_COUNT);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setIndexLimit((prevIndexLimit) => prevIndexLimit + ITEM_LIMIT_PER_PAGE);
    setTotalHits((prevTotalHits) => prevTotalHits - TOTAL_ITEMS_COUNT);
  };

  const filtredUsers = users
    .filter((user) => {
      if (filter === "Follow") return !user.isFollow;
      if (filter === "Followings") return user.isFollow;

      return user;
    })
    .sort((a, b) => a.id - b.id)
    .splice(0, indexLimit);

  return (
    <Box sx={{ ...centredItems, flexDirection: "column", gap: "46px" }}>
      <TweetsBar>
        <GoBack />
        <Filter value={filter} onChange={handleFilter} resetPage={setPage} />
      </TweetsBar>

      {users && <CardList users={filtredUsers} onClick={handleFollowers} />}

      {totalHits > ITEM_LIMIT_PER_PAGE && (
        <LoadMore loading={isLoading} onClick={handleLoadMore} />
      )}
      {isOffsetPage && <GoUp />}
    </Box>
  );
};
