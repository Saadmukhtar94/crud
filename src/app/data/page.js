"use client";
import React, { useState, useEffect } from "react";

// import ItemList from "../itemlist";

export default function Page() {
  const [items, setItems] = useState([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);
 
  return (
    <div className="container mt-4">
      <h2 className="text-center">Stored Data</h2>
      {items.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}
