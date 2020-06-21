import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  difference: 167.0,
  currentCurrency: "dollar",
  sign: "$",
  transactions: [],
};
// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  function changeCurrency(currency) {
    dispatch({
      type: "CHANGE_CURRENCY",
      payload: currency,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        currentCurrency: state.currentCurrency,
        sign: state.sign,
        deleteTransaction,
        addTransaction,
        changeCurrency,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
