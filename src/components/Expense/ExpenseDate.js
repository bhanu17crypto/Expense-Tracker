import React from 'react';
import './ExpenseDate.css';
 
const ExpenseDate = (props)=>{
    let year=props.date.getFullYear();
    let month=props.date.toLocaleString('en-US',{month:'long'});
    let day=props.date.toLocaleString('en-US',{day:'2-digit'});
  return (
    <div className='expense-date'>
        <div className='expense-date_year'>{year}</div>
        <div className='expense-date_month'>{month}</div>
        <div className='expense-date_day'>{day}</div>
    </div>
  )
}

export default ExpenseDate