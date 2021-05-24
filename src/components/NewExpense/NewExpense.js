import React, {useState} from 'react';
import ExpenseForm from './ExpensesForm';
import './NewExpense.css';
const NewExpenses = (props) =>{
	const [isEditing, setIsEditing] = useState(false);
	const onSubmitData = (submittedExpenseData) =>{
		const expenseData = {
			...submittedExpenseData,
			id:Math.random().toString()
		};
		props.onSubmitData(expenseData);
	}
	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};
	return (
		<div className="new-expense">
		 {!isEditing && (
			<button onClick={startEditingHandler}>Add New Expense</button>
		)}
		{isEditing && (
			<ExpenseForm
			onSubmitData={onSubmitData}
			onCancel={stopEditingHandler}
			/>
		)}
		</div>
	)
}

export default NewExpenses;