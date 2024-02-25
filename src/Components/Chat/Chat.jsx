import React, { useContext } from "react";
import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const selectedUser = data.user;

  return (
    <div className="chat">
      <div className="chatInfo">
        {selectedUser && (
          <>
            <span>{selectedUser.displayName}</span>
            <img src={selectedUser.photoURL} alt="" />
          </>
        )}
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;