import React, { useState } from "react";
import Tasks from "./Tasks";
import "./style.scss";
import Navigation from "../navigation";

const Form = ({ title }) => {
    const [NewTasks, setNewTasks] = useState(Tasks);

    const removeTask = (x) => {
        // setIdes(x);
        const itemIndex = NewTasks.findIndex((item) => item.id === x);
        const modernTasks = [...NewTasks.slice(0, itemIndex), ...NewTasks.slice(itemIndex + 1)];
        setNewTasks(modernTasks);
    };

    const formSubmit = (form) => {
        form.preventDefault();
        if (form.target[0].value && form.target[1].value) {
            const newTask = {
                title: form.target[0].value,
                description: form.target[1].value,
                id: Math.random(),
            };
            setNewTasks((prev) => [...prev, newTask]);
            form.target[0].value = "";
            form.target[1].value = "";
        }
    };
    return (
        <div id="body">
            <header>
                <h1>{title}</h1>
                <Navigation />
            </header>
            <div className="wrapper">
                <form id="form" onSubmit={formSubmit}>
                    <div className="title-wrapper">
                        <label htmlFor="title">Add Title</label>
                        <input type="text" id="title" />
                    </div>
                    <div className="description-wrapper">
                        <label htmlFor="description">Add description</label>
                        <textarea rows="5" id="description"></textarea>
                    </div>
                    <div className="button-wrapper">
                        <button>Cklick To Add</button>
                    </div>
                </form>
                <div className="tasks-wrapper">
                    {NewTasks &&
                        NewTasks.map((task) => (
                            <div className="tasks-container" key={task.id}>
                                <h1>{task.title}</h1>
                                <h3>{task.description}</h3>

                                <div>
                                    <button className="button" onClick={() => removeTask(task.id)}>
                                        Click
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Form;
