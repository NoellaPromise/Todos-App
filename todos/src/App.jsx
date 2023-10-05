import Todo from "./components/Todo";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = () => {
    if (newTodo.trim() != "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, todo: newTodo, hasEnded: false },
      ]);
      setNewTodo("");
    }
  };

  const endTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].hasEnded = !updatedTodos[index].hasEnded;
    setTodos(updatedTodos);
  };

  const deleteTask = (id) => {
    let updatedTodos = [...todos];
    updatedTodos = updatedTodos.filter((todo) => todo.id != id);
    setTodos(updatedTodos);
  };

  return (
    <div className="text-center">
      <h1 className="py-10 text-5xl font-bold text-gray-200">Todos</h1>
      <div className="flex items-center relative w-1/2 m-auto">
        <input
          className="border w-full rounded-full p-2 focus:border-none"
          type="text"
          placeholder="Add todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <FontAwesomeIcon
          className="absolute right-2 cursor-pointer"
          icon={faCirclePlus}
          color="green"
          onClick={addNewTodo}
        />
      </div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          id={todo.id}
          index={index}
          todo={todo.todo}
          hasEnded={todo.hasEnded}
          endTask={endTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
