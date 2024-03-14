import { useState } from "react"


export const TodoForm = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task !== "") {
            addTask(task);
            setTask("")
        }
        else {
            alert("Please add the task")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add task</button>
        </form>
    )
}

