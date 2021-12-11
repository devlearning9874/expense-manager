import "./App.css";
import "./component/ExpenseItem";
import ExpenseItem from "./component/ExpenseItem";

function App() {
  
  const expenses = [
    {id:1, title:"Trouser Pants", amount:860.23, date:new Date(2021, 10, 19)},
    {id:2, title:"Blue T-shirt", amount:900, date:new Date(2021, 9, 8)},
    {id:3, title:"Black Shoes", amount:1500, date:new Date(2021, 8, 15)},
    {id:4, title:"Trolly Bags", amount:6000, date:new Date(2021, 11, 1)},
    {id:5, title:"Yellow Hoodies", amount:2500, date:new Date(2021, 11, 11)},

  ]


  return (
    <div>
      <h1>Expense Report</h1>
       <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
       />
       <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
       />
       <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
       />
       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
       />
       <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
       />
    </div>
  );
}

export default App;
