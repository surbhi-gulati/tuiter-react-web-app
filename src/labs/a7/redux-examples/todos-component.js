import React, {useState} from "react";
import {useSelector} from "react-redux";
const Todos = () => {
const todos = useSelector(state => state.todos);
import {useDispatch, useSelector}
  from "react-redux";
import {addTodo}
  from "./reducers/todos-reducer";
const [todo, setTodo] = useState({do: ''});
const dispatch = useDispatch();
const createTodoClickHandler = () => {
  dispatch(addTodo(todo))
};
const todoChangeHandler = (event) => {
  const doValue = event.target.value;
  const newTodo = {
    do: doValue
  };
  setTodo(newTodo);
}
return (
    <ul className="list-group">
        <li className="list-group-item">
          <button onClick={createTodoClickHandler}
                className="btn btn-primary w-25 
                            float-end">
          Create</button>
        <input onChange={todoChangeHandler}
                value={todo.do}
                className="form-control w-75"/>
        </li>
    </ul>
  );
};

export default Todos;
