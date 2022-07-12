import React from 'react';
// import ClickAugment from "./ClickAument";
// import ClickReduce from "./ClickReduce";

function Counter() {
    const [count, setCount] = React.useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecrease = () => {
        setCount(count - 1);
        // count = count + 1;
    }


    return (
        <>
            <h1 style={{textAlign: "center", fontSize:"100px"}}>{count}</h1>
            <button style={{backgroundColor: "yellow",padding:"20px",marginLeft:"710px"}} onClick={onIncrease}>+</button>
            <button style={{backgroundColor: "green",padding:"20px"}} onClick={onDecrease}>-</button>
        </>
    )

}

export default Counter;
