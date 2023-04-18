/**

@desc This component renders a card displaying information about a user and allows following/unfollowing that user.
@param {Object} user - The user object containing information about the user to be displayed on the card.
@param {function} onClick - A function to be called when the follow button on the card is clicked.
@returns {JSX.Element} - A JSX element representing the card.
*/
import { Box, Typography, ListItem, Button } from "@mui/material";
import { buttonHover, content, centredItems } from "../../utils/mainStyles";
import {
  tweetCard,
  relativePosition,
  absolutePosition,
  dividerBar,
  avatarCircle,
  avatarContainer,
  tweetContent,
  buttonActive,
} from "./CardStyles";
import ImageBg from "../../assets/img.webp";
import Logo from "../../assets/logo.svg";

export const Card = ({ user, onClick }) => {
  const { id, user: name, followers, avatar, tweets, isFollow = false } = user;

  return (
    <ListItem component="li" sx={{ ...centredItems, ...tweetCard }}>
      <Box sx={relativePosition}>
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          width="76px"
          height="22px"
          loading="lazy"
          sx={absolutePosition}
        />
        <img
          src={ImageBg}
          alt="Frame"
          width="308"
          height="168"
          loading="lazy"
        />
      </Box>

      <Box sx={dividerBar}>
        <Box sx={{ ...centredItems, ...avatarCircle }}>
          <Box sx={avatarContainer}>
            {typeof avatar === "string" && (
              <img
                src={avatar}
                alt={name}
                width="62"
                height="62"
                loading="lazy"
              />
            )}
          </Box>
        </Box>
      </Box>

      <Box sx={{ ...centredItems, ...tweetContent }}>
        <Typography sx={{ ...content, color: "primary.darker" }}>
          {name.toString()}
        </Typography>
        <Typography sx={content}>{tweets.toLocaleString()} tweets</Typography>
        <Typography sx={content}>
          {followers.toLocaleString()} followers
        </Typography>
      </Box>

      <Button
        onClick={() => onClick(id)}
        data-follow={isFollow}
        variant="contained"
        sx={{ ...buttonHover, ...(isFollow && { ...buttonActive }) }}
      >
        {isFollow ? "Following" : "Follow"}
      </Button>
    </ListItem>
  );
};
