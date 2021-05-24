import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) =>{
	const [title,setTitle] = useState('');
	const [amount,setAmount] = useState('');
	const [date,setDate] = useState('');

	// const [userInput,setUserInput] = useState(		{
	// 	title:'',
	// 	amount:'',
	// 	date:''
	// })
	const titleChangeHandler = (e) =>{
		setTitle(e.target.value);
		// setUserInput((prevState)=>{
		// 	console.log(prevState)
		// 	return {
		// 		...prevState,
		// 		title:e.target.value
		// 	};
		// })
	}
	const amoutChangeHandler = (e) =>{
		setAmount(e.target.value);
		// setUserInput((prevState)=>{
		// 	return {
		// 		...prevState,
		// 		title:e.target.value
		// 	};
		// })
	}
	const dateChangeHandler = (e) =>{
		setDate(e.target.value);
		// setUserInput((prevState)=>{
		// 	return {
		// 		...prevState,
		// 		title:e.target.value
		// 	};
		// })
	}
	const handleSubmit = (e) =>{
		e.preventDefault();
		const expenseData = {
			title,
			amount:+amount,
			date:new Date(date)
		};
		props.onSubmitData(expenseData);
		setTitle('');
		setAmount('');
		setDate('');
	}
	return(
		<form onSubmit={handleSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={title} onChange={titleChangeHandler} placeholder="Enter expense title" />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" value={amount} min="0.01" step="0.01" onChange={amoutChangeHandler} placeholder="Enter Amout"/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)
}
export default ExpenseForm;