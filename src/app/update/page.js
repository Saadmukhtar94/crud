"use client"; 

import React, { useState, useEffect } from "react";
import ItemList from "../itemlist";

export default function Edit() {
  const [items, setItems] = useState([]); // Initialize state properly

  // Load items from localStorage when component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  const updateItem = (id, newName) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, name: newName } : item
    );
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems)); // Save updated data
  };

  const deleteItem = (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems)); // Save updated list
  };

  return (
    <div>
      <h1 className="text-center">UPDATE</h1>
      <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
}
