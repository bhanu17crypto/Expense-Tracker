import React from 'react';
import './Expenses.css';
import Expenseitem from './Expenseitem';
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
        {
          props.item.map(
            expense => (
              <Expenseitem
              date={expense.date}
              title={expense.title}
              price={expense.price}/>
            )
          )
        }
    </Card>
    
  )
}

export default Expenses