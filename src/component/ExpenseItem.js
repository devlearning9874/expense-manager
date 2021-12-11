import './ExpenseItem.css'
function ExpenseItem(props) {

    console.log(props);
  
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Trouser Pants";
  const expenseAmount = 300.00;

  return (
    <div className="expense-item">
      <div>{props.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
