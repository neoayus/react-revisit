import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./ToDo.css";

var todoList = [
  {
    index: uuid(),
    task: "don't please ppl",
    isDone: false,
  },
  {
    index: uuid(),
    task: "SAY 'NO' STRAIGHT UP ",
    isDone: false,
  },
];

export default function ToDo() {
  const [todos, setTodos] = useState(todoList);
  return (
    <>
      <h1>ToDo ('nt procastinate)</h1>
      <div className="container">
        <List list={todos} setTodos={setTodos} />
        <Form setTodos={setTodos} />
      </div>
    </>
  );
}

function List({ list, setTodos }) {
  return (
    <ul className="list">
      {list.map((li) => (
        <li key={li.index}>
          <p style={{ textDecoration: li.isDone ? "line-through" : "none" }}>
            {li.task}
          </p>
          <div className="todo-state">
            <input
              type="checkbox"
              value={li.isDone}
              onChange={() =>
                setTodos((prev) =>
                  prev.map((todo) =>
                    todo.index == li.index
                      ? { ...todo, isDone: !todo.isDone }
                      : todo,
                  ),
                )
              }
            />
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() =>
                setTodos((list) =>
                  list.filter((todo) => todo.index != li.index),
                )
              }
            ></i>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Form({ setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prev) => [...prev, { index: uuid(), task: newTodo }]);
    setNewTodo("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(() => e.target.value);
        }}
        placeholder="what up on your mind?"
      />
      <button>Add</button>
    </form>
  );
}
