import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
import ExpenseFilter from "./ExpenseFilter.jsx";

const ExpenseList = ({ expenses }) => {
    return (
        <div className="expenses">
            <ExpenseFilter />
            <ExpenseItem expense={expenses[0]}/>
            <ExpenseItem expense={expenses[1]}/>
            <ExpenseItem expense={expenses[2]}/>
        </div>
    );
};

export default ExpenseList;