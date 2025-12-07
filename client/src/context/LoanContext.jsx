import { createContext, useContext, useState } from "react";

const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [loanData, setLoanData] = useState([
    { id: 101, type: "Home Loan", amount: "₹10,00,000", status: "Approved" },
    { id: 102, type: "Education Loan", amount: "₹4,00,000", status: "Pending" },
    { id: 103, type: "Personal Loan", amount: "₹1,50,000", status: "Rejected" }
  ]);

  const addLoan = (loan) => {
    setLoanData((prev) => [...prev, loan]);
  };

  return (
    <LoanContext.Provider value={{ loanData, addLoan }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = () => useContext(LoanContext);
