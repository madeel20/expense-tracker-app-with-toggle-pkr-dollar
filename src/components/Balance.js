import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions, sign } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h4>
        {sign} {total.toFixed(2)}
      </h4>
    </div>
  );
};
