import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import {
  buttonHover,
  typography,
  wrapper,
  description,
  centredItems,
  title,
  subtitle,
} from "../../utils/mainStyles";

import Home from "../../assets/home.svg";

const quotes = [
  "Debugging is like being the detective in a crime movie where you are also the murderer.",
  "There are 10 types of people in the world: those who understand binary, and those who don't.",
  "Programming is like sex: one mistake and you have to support it for the rest of your life.",
  "If at first you don't succeed; call it version 1.0",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Walking on water and developing software from a specification are easy if both are frozen.",
];

export const Homepage = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 60000); // 1 minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box>
      <Box
        sx={{
          ...centredItems,
          gap: "30px",
          justifyContent: "flex-start",
          marginBottom: "40px",
        }}
      >
        <img
          src={Home}
          width={90}
          height={90}
          alt="My App"
          style={{ animation: "zoom-in 1s" }}
        />
        <Typography
          variant="h1"
          component="h1"
          sx={{ ...title, marginLeft: "10px" }}
        >
          Tweets social-app
        </Typography>
      </Box>
      <Box sx={{ marginTop: "120px", textAlign: "center" }}>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ ...subtitle, marginBottom: "16px" }}
        >
          Click the button below to view tweets
        </Typography>
        <Link to="/tweets">
          <Button sx={{ ...buttonHover, marginTop: "16px" }}>
            View Tweets
          </Button>
        </Link>
      </Box>
      <Box sx={{ ...wrapper, paddingTop: "140px" }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ ...typography, marginBottom: "34px" }}
        >
          Funny IT quotes
        </Typography>
        <Typography
          sx={{ ...typography, marginBottom: "16px", fontSize: "26px" }}
        >
          <i>"{quote}"</i>
        </Typography>
        <Typography fontSize={26}>
          Created by:
          <Typography
            component="a"
            href="https://github.com/YehorBoichenko"
            target="_blank"
            sx={{ ...description, marginLeft: "5px", fontSize: "24px" }}
          >
            Yehor Boichenko
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
