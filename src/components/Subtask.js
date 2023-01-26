

export const Subtask = ({ subtask, toggleSubtask, createNewSubtask }) => {

    return (
        <td>
            {subtask.name}
            <input type="checkbox"
                checked={subtask.done}
                onChange={() => toggleSubtask(subtask)}
            />
        </td>
    )
}
