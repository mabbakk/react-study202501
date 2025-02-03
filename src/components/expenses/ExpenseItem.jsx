import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = ({ title, price, date }) => {
    // console.log('props: ', props);

    // 렌더링에 필요한 변수  -> 생성된 변수들은 한 번씩밖에 안 쓰이기 때문에 아래 return 의 변수였던 것들을 그냥 props.~ 로 변경한다.
    // const expenseDate = props.date;
    // const expenseTitle = props.title;
    // const expensePrice = props.price;
        
    return (
        <div className='expense-item'>
            <div>{ date.toLocaleString() }</div>
            <div className='expense-item__description'>
                <h2>{ title }</h2>
                <div className='expense-item__price'>{ price }</div>
            </div>
        </div>
    );
}

export default ExpenseItem