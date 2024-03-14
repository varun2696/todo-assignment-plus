import { useState } from "react"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";


const initialState = [
    {
        title: "Learn Javascript",
        status: true,
        id: 2
    },
    {
        title: "Learn React",
        status: true,
        id: 1
    },
    {
        title: "Learn Angular",
        status: false,
        id: 3
    },
    {
        title: "Learn Python",
        status: false,
        id: 2
    },
]

export const TodoApp = () => {

    const [todos, setTodos] = useState(initialState);

    const addTask = (title) => {
        const addTodo = [...todos, {
            title: title,
            status: false,
            id: Math.random() * 10
        }]
        setTodos(addTodo)
    }

    const handleToggle = (id) => {
        const newTodos = todos.map((task) => (
            task.id === id ? { ...task, status: !task.status } : task
        ))
        setTodos(newTodos)
    }

    const handleDelete = (id) => {
        const newTodos = todos.filter((task) => task.id !== id);
        setTodos(newTodos);
    }
    return (
        <>
            <div className="todo-app">
                <h1>Todo Application</h1>
                <TodoForm addTask={addTask} />
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Toggle</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((item) => (
                            <TodoList
                                key={item.id}
                                title={item.title}
                                status={item.status ? "Completed" : "Pending"}
                                handleDelete={() => handleDelete(item.id)}
                                handleToggle={() => handleToggle(item.id)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}