
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom"

// Components
import AddTodoForm from "./features/todos/AddTodoForm";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path="todo" element={<AddTodoForm />}></Route>


      </Route>

      
    </Routes>
  );
}

export default App;
