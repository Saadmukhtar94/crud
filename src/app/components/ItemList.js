"use client";
import { useState, useEffect } from "react";

export default function ItemList({ refresh }) {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setItems(storedUsers);
  }, [refresh]);

  // DELETE Function
  const deleteItem = async (id) => {
    const updatedUsers = items.filter((item) => item.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setItems(updatedUsers);

    await fetch("https://my-app.free.beeceptor.com/api/users/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    refresh();
  };

  return (
    <div className="mx-auto">
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editing === item.id ? (
              <>
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button onClick={() => setEditing(null)}>❌ Cancel</button>
              </>
            ) : (
              <>
                {item.name}
                <button onClick={() => setEditing(item.id)}>✏️ Edit</button>
                <button onClick={() => deleteItem(item.id)}>❌ Delete</button> {/* ✅ Added Delete Button */}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
