import { createContext, useState } from "react";

const userContext = createContext({});

export const Context = ({ children }) => {
  let [users, setUsers] = useState();
  return (
    <userContext.Provider value={{ users, setUsers }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
