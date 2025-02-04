import ExpenseList from "./components/expenses/ExpenseList";
import Counter from "./components/Counter";
import NewExpense from "./components/new-expense/NewExpense";
import CheckBoxStyle from "./components/practice/CheckBoxStyle";

// 컴포넌트
const App = () => {

    // 서버에서 지출항목 JSON이 응답됨
    const expenses = [
        {
            title: '치킨',
            price: 30000,
            date: new Date(2025, 2 - 1, 3),
        },
        {
            title: '족발',
            price: 50000,
            date: new Date(2024, 9 - 1, 30),
        },
        {
            title: '헬스장등록',
            price: 300000,
            date: new Date(2025, 1 - 1, 15),
        },
    ];

    return (
        <>
            <CheckBoxStyle />
            <NewExpense />
            <ExpenseList expenses={expenses} />
        </>
    );
}


export default App;