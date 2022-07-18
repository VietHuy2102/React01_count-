import React from "react";

function ValidationForm() {

    const CORRECT_NAME = "Việt Huy"
    const CORRECT_PASSWORD = "12345"
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState(false)
    const [form, setform] = React.useState([])

    const onCommentname = (e) => {
        setName(e.target.value)
    }
    const onCommentpass = (e) => {
        setPassword(e.target.value)
    }
    const submitbtn = () => {
        console.log(name, password)
        setName("")
        setPassword("")
        setform(form.concat(name, password))

        if (name === CORRECT_NAME && password === CORRECT_PASSWORD) {
            alert("Đăng nhập thành công")
        } else {
            alert("Đăng nhập thất bại")
        }

        if (name.length === 0 || password.length === 0) {
            setError(true)
        }

    }

    return (

        <>
            <div>
                <input type="text" onChange={onCommentname} value={name}/>
            </div>
            {error ? <label>Bạn chưa nhập dữ liệu Name</label> : ""}
            <div>

                <input type="password" onChange={onCommentpass} value={password}/>
            </div>
            {error ? <label>Bạn chưa nhập dữ liệu PassWord</label> : ""}
            <div>
                <button onClick={submitbtn}> Submit</button>
            </div>

            {
                form.map((e) => <h4>{e}</h4>
                )
            }
        </>
    )
}
export default ValidationForm