import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

export default function ChangeUser() {
  const { setUserName } = useContext(AppContext);
  const [newName, setNewName] = useState("");

  const handleChange = () => {
    if (newName.trim()) {
      setUserName(newName);
      setNewName("");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleChange} style={{ marginLeft: "10px" }}>
        Update User
      </button>
    </div>
  );
}
