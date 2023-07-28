import React from 'react';
import { useState } from 'react';
import './Expenseform.css';

const Expenseform = (props) => {

    const [newTitle,SetTitle] = useState();
    const [newPrice,SetPrice] = useState();
    const [newDate,SetDate] = useState();

    const TitleHandler = (event) => {
        SetTitle(event.target.value);
    }
    const PriceHandler = (event) => {
        SetPrice(event.target.value);
    }
    const DateHandler = (event) => {
        SetDate(event.target.value);
    }
    //here we will create a object of these three values and through submit handler we will send this object to parent using concept of child to parent
    //here also a concept that how to send prop through child to child , answer to this question is child to parent ultimate parent then parent to child.

    const SubmitHandler = (event) =>{
        event.preventDefault();
        const newexpense = {
            title: newTitle,
            price: newPrice,
            date: new Date(newDate)
        };
        props.newItem(newexpense);
        SetTitle('');
        SetPrice(' ');
        SetDate(' ');
    }
  return (
    <form onSubmit={SubmitHandler}>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" value={newTitle} onChange={TitleHandler} />
            </div>
            <div className="new-expense_control">
                <label>Price</label>
                <input type="number" min="0.01" step = "0.01" value={newPrice} onChange={PriceHandler}/>
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" value={newDate} onChange={DateHandler} />
            </div>
        </div>
        <div className="new-expense_actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default Expenseform