import React, {useState} from 'react'
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car Insurance",
    amount: 305.89,
    date: new Date(2021, 12, 10),
  },
  {
    id: "e2",
    title: "milk",
    amount: 1,
    date: new Date(2021, 1, 11),
  },
  {
    id: "e3",
    title: "eggs",
    amount: 2,
    date: new Date(2020, 4, 16),
  },
  {
    id: "e4",
    title: "bread",
    amount: 2.5,
    date: new Date(2019, 12, 25),
  },
];
const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses]})
  }
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses data= {expenses}/>
    </div>
  );
}

export default App;
