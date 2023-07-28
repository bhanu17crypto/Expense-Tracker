import React from 'react'
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
 
const Expenseitem = (props) => {

  // const [value,setValue] = useState();
  // const [title,setTitle] = useState(props.title);
  
  // const Changehandler=(event)=>{
  //   setValue(event.target.value);
  // }
  
  // const Changetitle=()=>{
  //   setTitle(value);
  //   setValue("");
  // }
  return (
    <Card className='expense-item'>
        <ExpenseDate date={new Date(props.date)}/>
        <div className='expense-item_descrip'>
            <h2>{props.title}</h2>
            <div className='expense-item_price'>
                {props.price}
            </div>
        </div>
    </Card>
  );
}

export default Expenseitem