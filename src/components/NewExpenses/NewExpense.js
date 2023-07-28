import React from 'react';
import './NewExpense.css';
import Expenseform from './Expenseform';
const NewExpense = (props) => {

  //props coming from child as we have to add the expense in list
    const setNewItem = (childsNewExpense) =>{
      
        const expenseData = {
          ...childsNewExpense,
          id:Math.random().toString()
        }

        props.addItem(expenseData);
        console.log(expenseData);
    }

  return (
    <div className='new-expense'>
        <Expenseform newItem={setNewItem}/>
    </div>
  )
}

export default NewExpense;