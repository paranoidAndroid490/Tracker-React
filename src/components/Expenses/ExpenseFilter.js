import "./ExpenseFilter.css";
import react,{useState} from 'react';

const ExpenseFilter = (props) => {


    const changeHandler = (event) => {
        props.onSaveYear(event.target.value)
    }

  return (
    <div className="expense-filter">
        <div className="expense-filter__control">
    <label >Filtra per anno</label>
      <select value={props.selected} onChange={changeHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
