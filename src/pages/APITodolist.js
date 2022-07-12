import React from "react";

function APITodolist() {
    const [todos, setTodos] = React.useState([]);
    const [selectTodoId, setSelectedTodoId] = React.useState();
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setTodos(json));
    }, []); //  component lifecycles

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${selectTodoId}`)
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, [selectTodoId]);

    console.log(todos)
    if (todos.length === 0) {
        console.log('empty')
        return <p>Empty list</p>
    }


    console.log(selectTodoId);

    return(
        <ul>
            {
                todos.map((todo) => <li key={todo.id} onClick={() => setSelectedTodoId(todo.id)}>{todo.title}</li>)
            }
        </ul>
    )
}
export default APITodolist
