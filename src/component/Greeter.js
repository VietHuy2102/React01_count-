import React from "react";
function Greeter() {
    const [text,currentText] = React.useState("")
    const onComment = (e) => {
      currentText(e.target.value)

    }
    return (
        <>
            <input type="text" onChange={onComment}/>
            <h1> {text} </h1>
        </>
    )
}

export default Greeter;