import React, { createContext, useState } from "react";

// ✅ Create context
export const AppContext = createContext();

// ✅ Create provider
export const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState("Guest");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      {children}
    </AppContext.Provider>
  );
};
