import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) =>{	
	return(
		<li>
			<Card className="expense-item">
				<ExpenseDate title={props.title} date={props.date} amount={props.amount} />		
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">{props.amount}</div>
				</div>
			</Card>
		</li>
	)
}

export default ExpenseItem;