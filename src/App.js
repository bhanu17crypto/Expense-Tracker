import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
const App = () => {

  let expenses = [
    {
      id: '1',
      title: 'School Fee',
      price: 250,
      date: new Date(2023,6,23)
    },
    {
      id: '2',
      title: 'Books',
      price: 240,
      date: new Date(2023,4,17)
    },
    {   
      id: '3',
      title: 'House Rent',
      price: 1500,
      date: new Date(2023,4,1)
    },
    {
      id: '1',
      title: 'Food',
      price: 1000,
      date: new Date(2023,6,10)
    }
  ];
  const [expense,setExpense] = useState(expenses);

  //when we fetch apis and change the state of any variable then our site gets rerender again and caught in an infinite loop to prevent this we use useffect hook
  //context api, fragments, redux 

    // useEffect(()=>{
    //   fetch('http://localhost/sample-api/api')
    //   .then(
    //     response => {
    //       return response.json();
    //     }
    //   ).then(
    //     data => {
    //       console.log(data);
    //       setExpense(data);//here we are changing the state 
    //     }
    //   );
    // },[]);

  const setExpensetoList = (ExpensecomingfromNewExpense) =>{
        const datas=[ExpensecomingfromNewExpense,...expenses];
        setExpense(datas);
  }

 
  return (
    <div>
        <NewExpense addItem={setExpensetoList}/>

        <Expenses item={expense}/>
    </div>
    
  );
}

export default App;
