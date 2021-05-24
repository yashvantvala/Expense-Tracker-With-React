import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense";
const data = [
	{id:"e1",title:'Car Insurance', amount:12000,date:new Date(2020, 7, 14)},
	{id:"e2",title:'New Bike', amount:70000,date:new Date(2020, 5, 14)},
	{id:"e3",title:'House Tax', amount:30000,date:new Date(2020, 3, 27)},
	{id:"e4",title:'New PC', amount:92000,date:new Date(2021, 5, 18)},
]
const App = () => {
	const [expenses,setExpense] = useState(data);

	const addNewExpenseData = (expenseData) =>{
		setExpense((prevExpenses)=>{
			return [...prevExpenses, expenseData];
		});
	}
	return (
	<div>
		<NewExpenses onSubmitData={addNewExpenseData}/>
		<Expenses item={expenses}/>
	</div>
	);
}

export default App;
