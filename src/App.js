
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import PropSample from "./pages/PropSample";
import StateSample from "./pages/StateSample";
import Todo from "./pages/Todo";
import Condisitional from "./pages/Condisitional";
import APITodolist from "./pages/APITodolist";
import Test from "./pages/Test";
import ValidationForm from "./pages/ValidationForm";
import ChangeMoney from "./pages/ChangeMoney";
import ChatBox from "./pages/ChatBox";


function App() {
    return (
        <BrowserRouter>
            <>
                <ul>
                    <li>
                        <Link to={'props-sample'}>Props</Link>
                    </li>
                    <li>
                        <Link to={'state-sample'}>State</Link>
                    </li>
                    <li>
                        <Link to={'multil-sample'}>Todo List</Link>
                    </li>
                    <li>
                        <Link to={'conditional-sample'}>Conditional</Link>
                    </li>
                    <li>
                        <Link to={'apitodolist-sample'}>APITodolist</Link>
                    </li>
                    <li>
                        <Link to={'test-sample'}>Test</Link>
                    </li>
                    <li>
                        <Link to={'validationForm-sample'}>Validation Form</Link>
                    </li>
                    <li>
                        <Link to={'changeMoney-sample'}>ChangeMoney</Link>
                    </li>
                    <li>
                        <Link to={'chat-sample'}>ChatBox</Link>
                    </li>

                </ul>`
                <Routes>
                    <Route exact path='props-sample' element={<PropSample />} />
                    <Route exact path='state-sample' element={<StateSample />} />
                    <Route exact path='multil-sample' element={<Todo />} />
                    <Route exact path='conditional-sample' element={<Condisitional />} />
                    <Route exact path='apitodolist-sample' element={<APITodolist />} />
                    <Route exact path='test-sample' element={<Test />} />
                    <Route exact path='validationForm-sample' element={<ValidationForm />} />
                    <Route exact path='changeMoney-sample' element={<ChangeMoney />} />
                    <Route exact path='chat-sample' element={<ChatBox />} />
                </Routes>
            </>
        </BrowserRouter>
    )

}
export default App;
