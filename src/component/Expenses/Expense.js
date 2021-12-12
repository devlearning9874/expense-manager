import React from 'react';

import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";

const Expense = (props) => {
  console.log(props);

  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      />
      <ExpenseItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      />
      <ExpenseItem
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      />
      <ExpenseItem
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      />
      <ExpenseItem
        title={props.expense[4].title}
        amount={props.expense[4].amount}
        date={props.expense[4].date}
      />
    </Card>
  );
};

export default Expense;
