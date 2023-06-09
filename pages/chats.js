import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);
export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });
  useEffect(() => {
    if (username.length === 0 || secret.length === 0) return router.push("/");
  });

  if (!showChat) return <div></div>;
  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="d1983724-52ee-4a82-9429-f3d056db46c9"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
