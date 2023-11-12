"use client";
import next from "next";
import sendBlackImg from "../../../public/send_black.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChatDataInterface } from "@/utils/interfaces";
import OrderForm from "../forms/orderForm/OrderForm";
import ChatContainer from "../chatContainer/ChatContainer";
import styles from "./Chat.module.css";
import "./chat.css";
import { createContext } from "react";
import { queryIndex } from "@/utils/requests";

export const SessionContext = createContext<any>(null);

export default function Chat() {
  const [chatData, setChatData] = useState<ChatDataInterface[]>([
    // {
    //   sender: "human",
    //   type: "text",
    //   show: true,
    //   data: "Hi",
    // },
    // {
    //   sender: "system",
    //   type: "text",
    //   data: "Hello how can i help you?",
    //   show: true,
    // },
    // {
    //   sender: "human",
    //   type: "text",
    //   data: "What is on the menu?",
    //   show: true,
    // },
    // {
    //   sender: "system",
    //   type: "text",
    //   data: "We have Cheeze Pizza, Veggie Pizza and Pepperoni Pizza",
    //   show: true,
    // },
    // {
    //   sender: "human",
    //   type: "text",
    //   data: "I want to place an order",
    //   show: true,
    // },
    // {
    //   sender: "system",
    //   type: "order-form",
    //   // data: <OrderForm updateChatData={updateChatData} />,
    //   data: <OrderForm />,
    //   show: true,
    // },
  ]);

  const chatRef = useRef<any>(null);
  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);

  const updateChatData = (data: ChatDataInterface) => {
    setChatData((prevArray) => [...prevArray, data]);
  };

  const [text, setText] = useState("");

  function sendHandler(e: any) {
    e.preventDefault();
    console.log("button pressed");
    if (text) {
      addChat({
        sender: "human",
        type: "text",
        show: true,
        data: text,
      });
      processHumanText();
    }
  }

  const handleKeyDown = (e: any) => {
    // Check if the Enter key is pressed
    if (e.key === "Enter") {
      e.preventDefault();
      if (text) {
        addChat({
          sender: "human",
          type: "text",
          show: true,
          data: text,
        });
        processHumanText();
      }
    }
  };

  const addChat = (data: ChatDataInterface) => {
    setChatData((prevArray) => [...prevArray, data]);
    setText("");
    return;
  };

  async function processHumanText() {
    try {
      const chatHistory = chatData.filter((data) => {
        if (data.type == "text") {
          return data;
        }
      });
      console.log("processed chatHistory", chatHistory);

      const res = await queryIndex(text, chatHistory)
        .then((res) => {
          console.log(res);
          if (res == "order") {
            addChat({
              sender: "system",
              type: "order-form",
              show: true,
              data: <OrderForm />,
            });
          } else {
            addChat({
              sender: "system",
              type: "text",
              show: true,
              data: res,
            });
          }
          return;
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    } catch (err) {
      console.log(err);
      return;
    }
    return;
  }

  return (
    <SessionContext.Provider value={{ setChatData }}>
      <div className="min-h-screen flex flex-col w-1/2 border border-zinc-400 rounded-lg">
        <div className="rounded-lg h-screen p-4 flex flex-col w-full justify-end">
          <div className="overflow-auto space-y-4">
            {chatData.map((item, idx) => (
              <div key={idx} className=" w-full flex" ref={chatRef}>
                {item.sender == "system" && item.show && item.type == "text" ? (
                  <div className="pr-40">
                    <ChatContainer data={item} />
                  </div>
                ) : item.sender == "human" &&
                  item.show &&
                  item.type == "text" ? (
                  <div className="pl-40 pr-4 ml-auto">
                    <ChatContainer data={item} />
                  </div>
                ) : item.sender == "system" &&
                  item.show &&
                  item.type == "order-form" ? (
                  <div className="min-w-3/5">
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
    </SessionContext.Provider>
  );
}
