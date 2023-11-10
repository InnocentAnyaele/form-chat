import { useState } from "react";

export default function OrderForm() {
  // Form state
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pizza1, setPizza1] = useState<number>(0);
  const [pizza2, setPizza2] = useState<number>(0);
  const [pizza3, setPizza3] = useState<number>(0);
  const [pizza4, setPizza4] = useState<number>(0);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Process the form data here
    console.log({
      name,
      phone,
      email,
      pizza1,
      pizza2,
      pizza3,
      pizza4,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white p-6 text-black space-y-3 rounded-lg"
    >
      <div className="flex justify-center">
        <span>Order Form</span>
      </div>

      <div className="flex flex-row space-x-3 justify-evenly items-center">
        {/* <label htmlFor="name">Name</label> */}
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 w-full rounded-md p-2 outline-none"
        />
      </div>

      <div className="flex flex-row space-x-3 justify-evenly items-center">
        {/* <label htmlFor="name">Name</label> */}
        <input
          type="text"
          id="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-300 w-full rounded-md p-2 outline-none"
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
          className="border border-gray-300 w-full rounded-md p-2 outline-none"
        />
      </div>

      {/* Submit button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-400 text-white w-full p-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
