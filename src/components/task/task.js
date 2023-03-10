import React, { useState } from "react";
import "../show_task/showTask.css";

const Task = ({ task, index, handleEdit, handleDelete }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prev => !prev) ;
  }

  return (
    <div className="task m-3" onClick={handleClick}>
      <div className="d-flex " style={{ alignItems: "center" }} key={index}>
        <span style={{ alignItems: "center" }}>{task.title}</span>
        <div className="buttondiv">
          <button
            type="button"
            className="btn btn-success btn-sm m-2 px-3"
            id={index}
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm m-2"
            id={index}
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      </div>
      {clicked && <div style={{margineLeft:"5%"}}>{task.description}</div>}
    </div>
  );
};

export default Task;
