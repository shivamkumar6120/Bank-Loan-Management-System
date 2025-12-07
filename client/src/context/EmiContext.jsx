// NEW: Global EMI context to manage all EMIs
import { createContext, useContext, useState } from "react";

const EmiContext = createContext();

export const EmiProvider = ({ children }) => {
  // NEW: Mock EMI data (later we will fetch from backend)
  const [emiData, setEmiData] = useState([
    {
      id: "EMI-1024",
      loanId: "HL-4821",
      loanType: "Home Loan",
      amount: 12500,
      dueDate: "2025-03-15",
      status: "Pending", // Pending | Paid | Overdue
      lateFee: 0,
    },
    {
      id: "EMI-1023",
      loanId: "HL-4821",
      loanType: "Home Loan",
      amount: 12500,
      dueDate: "2025-02-15",
      status: "Overdue",
      lateFee: 250,
    },
    {
      id: "EMI-1022",
      loanId: "PL-2198",
      loanType: "Personal Loan",
      amount: 4800,
      dueDate: "2025-02-05",
      status: "Paid",
      lateFee: 0,
    },
    {
      id: "EMI-1021",
      loanId: "PL-2198",
      loanType: "Personal Loan",
      amount: 4800,
      dueDate: "2025-01-05",
      status: "Paid",
      lateFee: 0,
    },
  ]);

  // NEW: mark an EMI as paid
  const markEmiAsPaid = (emiId) => {
    setEmiData((prev) =>
      prev.map((emi) =>
        emi.id === emiId ? { ...emi, status: "Paid", lateFee: 0 } : emi
      )
    );
  };

  return (
    <EmiContext.Provider value={{ emiData, markEmiAsPaid }}>
      {children}
    </EmiContext.Provider>
  );
};

export const useEmi = () => useContext(EmiContext);
