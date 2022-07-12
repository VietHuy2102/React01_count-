import React from "react";
import Hello from "../component/Hello";

const A2_MEMBERS = ['Phuong', 'Huy', 'Dong', 'Ngo'];

function getName() {
    return A2_MEMBERS[Math.round(Math.random()*3)];
}

function PropSample() {
    const [to, setTo] = React.useState(getName());
    const [from, setFrom] = React.useState(getName());

    const randomize = () => {
        setTo(getName());
        setFrom(getName());
    }

    // React.useEffect(() => {
    //     console.log('mount page')
    // }, [])
    return (
        <>
        <button onClick={randomize}>Click me!</button>
        <Hello name={to} from={from} />
        </>
    )
}

export default PropSample;
