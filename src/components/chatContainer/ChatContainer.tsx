import { ChatContainerPropsInterface } from "@/utils/interfaces";

export default function ChatContainer({ data }: ChatContainerPropsInterface) {
  return (
    <div
      className={`${data.sender === "system" ? "bg-gray-700" : null} ${
        data.sender === "human" ? "bg-blue-500" : null
      }  p-3 break-words w-fit rounded-2xl text-white`}
    >
      <span>{data.data}</span>
    </div>
  );
}
