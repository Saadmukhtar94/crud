import { useState } from "react";

export default function AddItem({ addItem }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!name) return; // Don't allow empty inputs
    addItem(name); // Call the function from parent (App.js)
    setName(""); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
      <h3 className="mt-3">Add Item</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update input state
        placeholder="Enter item name"
        className="border border-secondary mt-3 overflow-x-auto"
      />
      <button type="submit" className="my-3 btn btn-primary opacity-75 px-5">Add</button>
    </form>
  );
}
