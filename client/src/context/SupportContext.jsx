import { createContext, useContext, useState } from "react";

const SupportContext = createContext();

export const SupportProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticket) => {
    setTickets((prev) => [...prev, ticket]);
  };

  return (
    <SupportContext.Provider value={{ tickets, addTicket }}>
      {children}
    </SupportContext.Provider>
  );
};

export const useSupport = () => useContext(SupportContext);
