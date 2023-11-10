"use client";
import next from "next";
import sendBlackImg from "../../../public/send_black.svg";
import Image from "next/image";
import { useState } from "react";
import { ChatDataInterface } from "@/utils/interfaces";
import OrderForm from "../forms/orderForm/OrderForm";
import ChatContainer from "../chatContainer/ChatContainer";
import styles from "./Chat.module.css";
import "./chat.css";

export default function Chat() {
  const [chatData, setChatData] = useState<ChatDataInterface[]>([
    {
      sender: "human",
      type: "text",
      show: true,
      data: "Hi",
    },
    {
      sender: "system",
      type: "text",
      data: "Hello how can i help you?",
      show: true,
    },
    {
      sender: "system",
      type: "order-form",
      data: <OrderForm />,
      show: true,
    },
  ]);
  const [text, setText] = useState("");

  function sendHandler() {
    if (text) {
      setChatData((prevArray) => [
        ...prevArray,
        {
          sender: "human",
          type: "text",
          show: true,
          data: text,
        },
      ]);
      setText("");
    }
  }

  const handleKeyDown = (e: any) => {
    // Check if the Enter key is pressed
    if (e.key === "Enter") {
      e.preventDefault();
      if (text) {
        setChatData((prevArray) => [
          ...prevArray,
          {
            sender: "human",
            type: "text",
            show: true,
            data: text,
          },
        ]);
        setText("");
      }
    }
  };

  return (
    <div className="h-screen flex flex-col w-1/2 border border-zinc-400 rounded-lg">
      {/* <h1 className="test">Hey</h1> */}
      <div className="rounded-lg h-[100vh] p-4 flex flex-col w-full justify-end ">
        <div className="overflow-auto space-y-4">
          {chatData.map((item, idx) => (
            <div key={idx} className=" w-full flex">
              {item.sender == "system" && item.show && item.type == "text" ? (
                <div className="pr-40">
                  <ChatContainer data={item} />
                </div>
              ) : item.sender == "human" && item.show && item.type == "text" ? (
                <div className="pl-40 pr-4 ml-auto">
                  <ChatContainer data={item} />
                </div>
              ) : item.sender == "system" &&
                item.show &&
                item.type == "order-form" ? (
                <div className="w-1/2">
                  <OrderForm />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className=" rounded-lg h-20 border border-zinc-400">
        <form className="h-full flex flex-row">
          <textarea
            className="w-11/12 p-2 text-white bg-black px-5 rounded-lg outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="flex items-center justify-center 1/12">
            <button onClick={sendHandler}>
              <Image
                src={sendBlackImg}
                height={30}
                width={30}
                alt="sendImg"
                className="cursor-pointer text-white transition ease-in-out delay-150 hover:scale-110 duration-300"
              />
            </button>
            {/* <button>Submit</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
