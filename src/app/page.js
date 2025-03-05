"use client";
import { useState, useEffect } from "react";
import AddItem from "./additem";
// import ItemList from "./itemlist";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  const addItem = (name) => {
    const newItem = { id: Date.now(), name }; // Create new item with unique ID
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems)); // Save to local storage
  };

  

  return (
    <div className="d-flex flex-column justify-center align-items-center ">
      
      <h1 className="text-center mt-5">CRUD APP</h1>
      <h3 className="text-primary text-center fs-4">
        (Create-Read-Update-Delete)
      </h3>
      
      <AddItem addItem={addItem} />
      
    
    </div>
  );
}
