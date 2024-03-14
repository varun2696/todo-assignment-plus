
export const TodoList = ({ title, status, handleToggle, handleDelete }) => {

    return (
        <>
            <tr>
                <td>{title}</td>
                <td>{status}</td>
                <td><button className="toggle-btn" onClick={handleToggle}>Toggle</button></td>
                <td><button className="delete-btn" onClick={handleDelete}>Delete</button></td>
            </tr>
        </>
    )
}