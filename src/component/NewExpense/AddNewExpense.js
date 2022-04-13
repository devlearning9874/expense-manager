import React, { useState } from "react";
import "./NewExpense.css";
import NewExpense from "./NewExpense";

const AddNewExpense = (props) => {
  // let state = props.state;
  // console.log(state);

  const [newState, setNewState] = useState(false);

  const changeStateHandler = ()=>{
      if(!newState){
        setNewState(true);
      }else{
        setNewState(false);
      }
        
        console.log("state changed");
  }
  let state = newState;

  

  return (
    <div>
      {state ? (
        <NewExpense expstate={changeStateHandler} onAddExpense={props.onAddExpense} />
      ) : (
        <div className="new-expense">
          <button onClick={changeStateHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};

export default AddNewExpense;
