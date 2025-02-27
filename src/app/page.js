"use client";
import { useState } from "react";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>CRUD App with Beeceptor</h1>
      <AddItem refresh={() => setRefresh(!refresh)} />
      <ItemList refresh={refresh}/>
    </div>
  );
}
