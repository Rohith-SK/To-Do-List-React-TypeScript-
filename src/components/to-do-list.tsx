import React, { ChangeEvent, useState } from "react";
import "./to-do-list.css";

export const ToDoList = () => {
  const [task, setTask] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [editStatus, setEditStatus] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setList((prevList) => [...prevList, task]);
  };

  const editHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setEditStatus(true)
  };

  const clearHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setTask("");
  };

  const deleteHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    
  };

  return (
    <div className="to-do-list">
      <h2 className="heading">To Do List</h2>
      <form>
        <input
          type="text"
          placeholder="Add a task"
          value={task || ""}
          name="task"
          onChange={handleChange}
        />
        {editStatus ? <button>Update</button> : <button type="submit" onClick={addHandler}>
          Add
        </button>}
        <button onClick={clearHandler}>Clear</button>
      </form>
      {list.length === 0 ? (
        <h1>No Data Found!</h1>
      ) : (
        list?.map((item) => {
          return (
            <>
              <li key={item}>{item} <button onClick={editHandler}>Edit</button><button onClick={deleteHandler}>Delete</button></li>
            </>
          );
        })
      )}
    </div>
  );
};
