import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

    if(props.items.length === 0){
        return <h2 className="expense-list__fallback">Nessuna spesa trovata per l'anno selezionato</h2>
  }
    return (
        <ul className="expense-list">
            {props.items.map((expense) => (
        <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
      />
  ))}
        </ul>
    )
}


export default ExpenseList