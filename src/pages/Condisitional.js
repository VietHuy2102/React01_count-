import React from "react";
function Condisitional(){
    const [number,currentNumber] = React.useState(0)
    const onclick = () => {
        currentNumber(Math.round(Math.random()*10))
    }
    const text = number <= 5 ? 'Failed' : 'Passed'
    return(
        <>
           <button onClick={onclick}> Get Point</button>
            <h3> {number} : {text} </h3>
        </>

    )
}
export default Condisitional