import React, {useState} from 'react';

import "./Expense.css";
import Card from "./../UI/Card";
import ExpenseFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expense = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const changeSelectedYearHandler = selectedYear =>{
    // console.log("From Expense");
    // console.log("selected year- "+selectedYear);
    setFilteredYear(selectedYear);
    // console.log("Filtered Year "+ filteredYear);
  }
  //  console.log(filteredYear);
  const filteredExpenses = props.items.filter((expenses) =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <li>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeSelectedYearHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items = {filteredExpenses} />
    </Card>
    </li>
  );
};

export default Expense;
