import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) =>{
	const [filteredYear,setFilteredYear] = useState('2020');
	const expenseFilterHandler = year =>{
		setFilteredYear(year);
	}
	const filteredExpenses = props.item.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	})
	return(
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear}
				 expenseFilter={expenseFilterHandler} />
				 <ExpensesChart expenses={filteredExpenses} />
				 <ExpenseList items={filteredExpenses} />
				{/* <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}/>
				<ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}/>
				<ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}/>
				<ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}/> */}
			</Card>
		</div>
	)
}

export default Expenses;