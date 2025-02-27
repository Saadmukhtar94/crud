"use client";
import { useState } from "react";

export default function AddItem({ refresh }) {
  const [name, setName] = useState("");

  const addItem = async () => {
    if (!name.trim()) return; // Prevent empty input

    // Fetch existing users from LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user
    const newUser = { id: Date.now(), name };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); // Store updated list

    // Mock API Call
    await fetch("https://my-app.free.beeceptor.com/api/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    setName("");
    refresh();
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter user name" />
      <button onClick={addItem}>Add User</button>
    </div>
  );
}
