import React, { useState } from "react";
import "./App.css";
import Expense from "./component/Expenses/Expense";
import AddNewExpense from "./component/NewExpense/AddNewExpense";



const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Trouser Pants",
      amount: 860.23,
      date: new Date(2021, 10, 19),
    },
    {
      id: "e2",
      title: "Blue T-shirt",
      amount: 900,
      date: new Date(2021, 9, 8),
    },
    {
      id: "e3",
      title: "Black Shoes",
      amount: 1500,
      date: new Date(2021, 8, 15),
    },
    {
      id: "e4",
      title: "Trolly Bags",
      amount: 6000,
      date: new Date(2021, 11, 1),
    },
    {
      id: 5,
      title: "Yellow Hoodies",
      amount: 2500,
      date: new Date(2021, 11, 11),
    },
  ];

  const [updatedExpense, setNewExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
    setNewExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };


  return (
    <div>
      <AddNewExpense onAddExpense={addExpenseHandler} />
      <Expense items={updatedExpense} />
    </div>
  );
};

export default App;
