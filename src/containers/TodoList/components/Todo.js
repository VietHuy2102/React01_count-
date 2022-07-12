import React from "react";
function Todo(){
    const [text,currentText] = React.useState("")
    const [todo, setTodo] = React.useState([])

    const onComment = (e) => {
         currentText(e.target.value)
    }
    const onClickbtn = () => {
        setTodo(todo.concat(text));
        currentText("")
    }
    console.log(todo)

    return(
        <>
            <h3>Todo List</h3>
            <input type="text" onChange={onComment} value={text}/>
            <button onClick={onClickbtn}>ADD</button>
            <ul>
                {
                    todo.map((todoItem) => <li>{todoItem}</li>)
                }
            </ul>
        </>
    )
}
export default Todo;