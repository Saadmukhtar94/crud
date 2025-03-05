
import { useState } from "react";

export default function ItemList({ items, updateItem, deleteItem }) {
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");

  const handleUpdate = (id) => {
    updateItem(id, newName); // Call update function from parent (App.js)
    setEditingId(null); // Exit edit mode
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="list-unstyled">
          {editingId === item.id ? (
            <>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={() => handleUpdate(item.id)} className="btn btn-warning mx-3 px-3">Save</button>
              <button onClick={() => setEditingId(null)} className="btn btn-danger mx-3">Cancel</button>
            </>
          ) : (
            <>
            <div className=" w-auto my-3 d-flex justify-content-center" >
              <div className="border border-secondary px-3 py-1  w-50 overflow-x-auto">
              {item.name}
              </div>
              <button onClick={() => setEditingId(item.id)} className="btn btn-warning mx-3 px-3">Edit</button>
              <button onClick={() => deleteItem(item.id)} className="btn btn-danger mx-3">Delete</button>
              </div>

             
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
