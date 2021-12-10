import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
  let [title, setTitle] = useState(props.title)
  let clickHandler = () => {
    setTitle("clicked!!!");
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>click to change title</button> */}
    </Card>
  );
}

export default ExpenseItem;