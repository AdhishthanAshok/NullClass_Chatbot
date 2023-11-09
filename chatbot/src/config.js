import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar";

const botName = "Helping-Bot";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello! I'm ${botName}.How can i Help you!`),
  ],
  botName: "Programming-Bot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
};

export default config;
