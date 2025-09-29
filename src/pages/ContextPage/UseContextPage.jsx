import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import ChangeUser from "./ChangeUser";

export default function UseContextPage() {
  const { userName } = useContext(AppContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Context API Example</h2>
      <p>
        Current User: <strong>{userName}</strong>
      </p>
      <ChangeUser />
    </div>
  );
}
