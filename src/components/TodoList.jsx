
export const TodoList = ({ title, status, handleToggle, handleDelete }) => {

    return (
        <>
            <tr>
                <td>{title}</td>
                <td>{status}</td>
                <td><button onClick={handleToggle}>Toggle</button></td>
                <td><button onClick={handleDelete}>Delete</button></td>
            </tr>
        </>
    )
}