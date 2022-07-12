import React from "react";

function Hello (props) {
    React.useEffect(() => {
        console.log('mount')
    }, []);

    React.useEffect(() => {
        console.log('update name');
    }, [props.name])

    React.useEffect(() => {
        console.log('update from');
    }, [props.from]);

    console.log(props);

    return (
        <>
        <p>Hello {props.name} from {props.from}</p>
    </>
            )
}

export default Hello;
