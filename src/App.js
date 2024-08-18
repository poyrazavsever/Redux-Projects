
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom"

// Components
import AddTodoForm from "./features/todos/AddTodoForm";
import TodoList from "./features/todos/TodoList";

function App() {
  return (
    <Routes className="relative">

      <Route element={<Layout />}>

        <Route path="/" element={<TodoList />}></Route>

        <Route path="todo" element={<AddTodoForm />}></Route>


      </Route>

      
    </Routes>
  );
}

export default App;
