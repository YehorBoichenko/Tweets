/**

Renders a list of cards, each card displaying information about a user.
@param {Array} users - An array of user objects.
@param {Function} onClick - A function to handle click events on a card.
@returns {JSX.Element} - A list of cards.
*/
import { List } from "@mui/material";
import { Card } from "../Card/Card";
import { listContainer } from "./CardListStyles";
import { nanoid } from "nanoid";

export const CardList = ({ users, onClick }) => {
  return (
    <List component="ul" sx={listContainer}>
      {users.map((user) => {
        return <Card key={nanoid()} user={user} onClick={onClick} />;
      })}
    </List>
  );
};
