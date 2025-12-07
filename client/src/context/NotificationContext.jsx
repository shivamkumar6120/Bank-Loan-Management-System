import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Add a new notification
  const addNotification = (message, type, referenceId) => {
    setNotifications((prev) => [
      {
        id: Date.now(),
        message,
        type, // "loan" | "emi" | "reminder"
        referenceId,
        read: false,
        time: new Date().toLocaleString(),
      },
      ...prev
    ]);
  };

  // mark as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, markAsRead }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
