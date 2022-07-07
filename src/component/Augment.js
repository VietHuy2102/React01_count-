import ClickAugment from "./ClickAugment";
import ClickReduce from "./ClickReduce";

function Augment() {
    return (
        <>
            <h1 style={{textAlign: "center", fontSize:"100px"}} id="increment">0</h1>
            <button style={{backgroundColor: "yellow",padding:"20px",marginLeft:"710px"}} onClick={ClickAugment}>+</button>
            <button style={{backgroundColor: "green",padding:"20px"}} onClick={ClickReduce}>-</button>
        </>
    )

}

export default Augment;
