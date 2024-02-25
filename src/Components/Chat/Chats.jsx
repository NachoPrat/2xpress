import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";
import { ChatContext } from "../../ChatContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "userChats", currentUser?.uid);
        const unsub = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            setChats(doc.data());
          } else {
            setChats([]);
          }
          setLoading(false);
        });
        return () => unsub();
      } catch (error) {
        setLoading(false);
        console.error("Error fetching chats:", error);
      }
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {loading && <p>Loading...</p>}
      {!loading &&
        Array.isArray(chats) &&
        chats
          .sort((a, b) => b[1]?.date - a[1]?.date)
          .map((chat) => (
            <div
              className="userChat"
              key={chat[0]}
              onClick={() => handleSelect(chat[1]?.userInfo)}
            >
              <img src={chat[1]?.userInfo?.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{chat[1]?.userInfo?.displayName}</span>
                <p>{chat[1]?.lastMessage?.text}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Chats;