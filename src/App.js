import "./App.css";
import Expense from "./component/Expenses/Expense";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Trouser Pants",
      amount: 860.23,
      date: new Date(2021, 10, 19),
    },
    { id: 2, title: "Blue T-shirt", amount: 900, date: new Date(2021, 9, 8) },
    { id: 3, title: "Black Shoes", amount: 1500, date: new Date(2021, 8, 15) },
    { id: 4, title: "Trolly Bags", amount: 6000, date: new Date(2021, 11, 1) },
    {
      id: 5,
      title: "Yellow Hoodies",
      amount: 2500,
      date: new Date(2021, 11, 11),
    },
  ];

  return (
    <div>
      <h1>Expense Report</h1>
      <Expense expense={expenses} />
    </div>
  );
};

export default App;
