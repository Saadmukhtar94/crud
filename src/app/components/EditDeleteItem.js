"use client";
export default function EditDeleteItem({ id, name, refresh }) {
  const updateItem = async () => {
    await fetch("https://my-app.free.beeceptor.com/api/users/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name: "Updated Name" }),
    });
    refresh();
  };

  const deleteItem = async () => {
    await fetch("https://my-app.free.beeceptor.com/api/users/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    refresh();
  };

  return (
    <div>
      <button onClick={updateItem}>Update</button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}
