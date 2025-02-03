
import React from 'react';
import ExpenseItem from "./components/expenses/ExpenseItem";


// 컴포넌트
function App() {

  /*
    jsx : 리액트에서 사용하는 특수한 js문법, 태그를 그대로 쓰면 알아서 변환

    - 규칙 :
    1. return안에있는 태그는 반드시 하나의 태그로 묶여야 함.
    2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
    5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
  */

  // const $h1 = React.createElement('h1', null, '안녕 리액트!!');
  // const $h1 = <h1>안녕 리액트</h1>;
  // const subject = 'Vanilla Javascript!!';

  // 렌더링 수행
  return (
      <>
          <ExpenseItem
              title={'닭강정'}
              price={8000}
              date={ new Date(2025, 1, 3)}
          />
          <ExpenseItem
              title={'아이스크림'}
              price={5000}
              date={ new Date(2025, 2, 1)}
          />
          <ExpenseItem
              title={'자격증 책 구매'}
              price={23000}
              date={ new Date(2025, 1, 26)}
          />
      </>
  );
}


export default App;