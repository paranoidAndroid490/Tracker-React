import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //const [userInput, setUserInput] = useState({
  //enteredTitle: "",
  //enteredAmount: "",
  //enteredDate: "",
  //});
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({...userInput,enteredTitle: event.target.value,})
    //setUserInput((prevState) => {
    //return {
    //...prevState,
    //enteredTitle: event.target.value,
    //};
    //});
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const [enteredDate, setEnteredDate] = useState("");
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    //setUserInput({ ...userInput, enteredDate: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')

  }
  const resetHandler = () => {
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={AmountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={DateChangeHandler}
            type="date"
            min="2019-01-01"
            max="31/12/2022"
          />
        </div>
      </div>
      <div className="buttons">
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="reset">cancel</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
