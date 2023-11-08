import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: "Programming-Bot",
  customStyles: {
    botMessageBox: { backgroundColor: "blue" },
    chatButton: { backgroundColor: "blue" },
  },
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
};

export default config;
