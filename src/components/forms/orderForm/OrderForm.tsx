"use client";
import { ChatDataInterface } from "@/utils/interfaces";
import { useContext, useState } from "react";
import { SessionContext } from "@/components/chat/Chat";

interface OrderFormProps {
  updateChatData: (data: ChatDataInterface) => void;
}

// export default function OrderForm({ updateChatData }: OrderFormProps) {
export default function OrderForm() {
  // Form state
  const { setChatData } = useContext(SessionContext);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cheesePizza, setCheesePizza] = useState<number>(0);
  const [cheesePizzaSausageTopping, setCheesePizzaSausageTopping] =
    useState<boolean>(false);
  const [cheesePizzaPorkTopping, setCheesePizzaPorkTopping] =
    useState<boolean>(false);
  const [cheesePizzaEggTopping, setCheesePizzaEggTopping] =
    useState<boolean>(false);
  const [cheesePizzaChickenTopping, setCheesePizzaChickenTopping] =
    useState<boolean>(false);
  const [pepperoniPizza, setPepperoniPizza] = useState<number>(0);
  const [pepperoniPizzaSausageTopping, setPepperoniPizzaSausageTopping] =
    useState<boolean>(false);
  const [pepperoniPizzaPorkTopping, setPepperoniPizzaPorkTopping] =
    useState<boolean>(false);
  const [pepperoniPizzaEggTopping, setPepperoniPizzaEggTopping] =
    useState<boolean>(false);
  const [pepperoniPizzaChickenTopping, setPepperoniPizzaChickenTopping] =
    useState<boolean>(false);
  const [veggiePizza, setVegiePizza] = useState<number>(0);
  const [veggiePizzaMushroomTopping, setVeggiePizzaMushroomTopping] =
    useState<boolean>(false);
  const [veggiePizzaGreenPepperTopping, setVeggiePizzaGreenPepperTopping] =
    useState<boolean>(false);
  const [veggiePizzaGarlicTopping, setVeggiePizzaGarlicTopping] =
    useState<boolean>(false);

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      (cheesePizza > 0 || pepperoniPizza > 0 || veggiePizza > 0) &&
      name &&
      phone &&
      email
    ) {
      setChatData((prevArray: any) => [
        ...prevArray,
        {
          sender: "system",
          type: "text",
          data: `I would like to place an order for ${
            cheesePizza > 0 ? `Cheeze Pizza ${cheesePizza} \n ` : ""
          } ${pepperoniPizza > 0 ? `Pepporoni Pizza ${pepperoniPizza} \n ` : ""}
        ${veggiePizza > 0 ? `Veggie Pizza ${veggiePizza} \n ` : ""}
        `,
          show: false,
        },
      ]);
      setChatData((prevArray: any) => [
        ...prevArray,
        {
          sender: "system",
          type: "text",
          data: `Great your order has been placed. Your order is ${
            cheesePizza > 0 ? `Cheeze Pizza ${cheesePizza} \n ` : ""
          } ${pepperoniPizza > 0 ? `Pepporoni Pizza ${pepperoniPizza} \n ` : ""}
          ${veggiePizza > 0 ? `Veggie Pizza ${veggiePizza} \n` : ""}
          `,
          show: true,
        },
      ]);
    } else {
      alert("Not complete");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gray-700 p-8 text-white rounded-lg text-sm space-y-4"
    >
      <div className="flex justify-center text-lg">
        <span>Order Form</span>
      </div>

      {/* Pizza Orders */}
      <div className="flex justify-center">
        <span>What would you like to order?</span>
      </div>
      <div className="flex flex-col space-y-1">
        {/* Cheese Pizza */}
        <div className="flex flex-row space-x-3 justify-between items-center">
          <label htmlFor="name">Cheese pizza</label>
          <input
            type="number"
            id="cheesePizzaQuantity"
            value={cheesePizza}
            onChange={(e) => setCheesePizza(e.target.valueAsNumber)}
            className="border border-gray-300 rounded-md p-2 outline-none text-black"
          />
        </div>

        {/* Cheese Pizza Toppings*/}
        <div className="flex flex-row justify-evenly text-gray-400">
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={cheesePizzaSausageTopping}
              onChange={() =>
                setCheesePizzaSausageTopping(!cheesePizzaSausageTopping)
              }
            />
            <span>Sausage</span>
          </div>
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={cheesePizzaPorkTopping}
              onChange={() =>
                setCheesePizzaPorkTopping(!cheesePizzaPorkTopping)
              }
            />
            <span>Pork</span>
          </div>
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={cheesePizzaEggTopping}
              onChange={() => setCheesePizzaEggTopping(!cheesePizzaEggTopping)}
            />
            <span>Egg</span>
          </div>

          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={cheesePizzaChickenTopping}
              onChange={() =>
                setCheesePizzaChickenTopping(!cheesePizzaChickenTopping)
              }
            />
            <span>Chicken</span>
          </div>
        </div>

        {/* Pepperoni Pizza */}
        <div className="flex flex-row space-x-3 justify-between items-center">
          <label htmlFor="name">Pepperoni pizza</label>
          <input
            type="number"
            id="pepperoniPizzaQuantity"
            value={pepperoniPizza}
            onChange={(e) => setPepperoniPizza(e.target.valueAsNumber)}
            className="border border-gray-300 rounded-md p-2 outline-none text-black"
          />
        </div>

        {/* Pepperoni Pizza Toppings*/}
        <div className="flex flex-row space-x-2 justify-evenly text-gray-400 ">
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={pepperoniPizzaSausageTopping}
              onChange={() =>
                setPepperoniPizzaSausageTopping(!pepperoniPizzaSausageTopping)
              }
            />
            <span>Sausage</span>
          </div>
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={pepperoniPizzaPorkTopping}
              onChange={() =>
                setPepperoniPizzaPorkTopping(!pepperoniPizzaPorkTopping)
              }
            />
            <span>Pork</span>
          </div>
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={pepperoniPizzaEggTopping}
              onChange={() =>
                setPepperoniPizzaEggTopping(!pepperoniPizzaEggTopping)
              }
            />
            <span>Egg</span>
          </div>
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={pepperoniPizzaChickenTopping}
              onChange={() =>
                setPepperoniPizzaChickenTopping(!pepperoniPizzaChickenTopping)
              }
            />
            <span>Chicken</span>
          </div>
        </div>

        {/* Veggie Pizza */}
        <div className="flex flex-row space-x-3 justify-between items-center">
          <label htmlFor="name">Veggie pizza</label>
          <input
            type="number"
            id="veggiePizzaQuantity"
            value={veggiePizza}
            onChange={(e) => setVegiePizza(e.target.valueAsNumber)}
            className="border border-gray-300  rounded-md p-2 outline-none text-black"
          />
        </div>

        {/* Veggie Pizza Toppings*/}
        <div className="flex flex-row space-x-2 justify-evenly text-gray-400">
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={veggiePizzaMushroomTopping}
              onChange={() =>
                setVeggiePizzaMushroomTopping(!veggiePizzaMushroomTopping)
              }
            />
            <span>Mushroom</span>
          </div>
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={veggiePizzaGreenPepperTopping}
              onChange={() =>
                setVeggiePizzaGreenPepperTopping(!veggiePizzaGreenPepperTopping)
              }
            />
            <span>Green Pepper</span>
          </div>
          <div className="flex flex-row space-x-1">
            <input
              type="checkbox"
              checked={veggiePizzaGarlicTopping}
              onChange={() =>
                setVeggiePizzaGarlicTopping(!veggiePizzaGarlicTopping)
              }
            />
            <span>Garlic</span>
          </div>
        </div>
      </div>

      {/* Enter your details */}
      <div className="flex justify-center">
        <span>Enter your details</span>
      </div>

      <div className="flex flex-col space-y-3 mt-5">
        <div className="flex flex-row space-x-3 justify-evenly items-center">
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 w-full rounded-md p-2 outline-none text-black"
            required
          />
        </div>

        <div className="flex flex-row space-x-3 justify-evenly items-center ">
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            id="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 w-full rounded-md p-2 outline-none text-black"
            required
          />
        </div>

        <div className="flex flex-row space-x-3 justify-evenly items-center">
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 w-full rounded-md p-2 outline-none text-black"
            required
          />
        </div>
      </div>

      {/* Submit button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
