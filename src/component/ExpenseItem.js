import './ExpenseItem.css'
function ExpenseItem() {
  
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Trouser Pants";
  const expenseAmount = 300.00;

  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
