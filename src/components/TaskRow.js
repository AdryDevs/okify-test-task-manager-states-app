import { Subtask } from "./Subtask";

export const TaskRow = ({ task,toggleTask, toggleSubtask }) => {

    const subtasks = task.subtasks;


    return (
        <tr>
            <td>
                {task.name}
                <input type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task)}
                />
            </td>
            <Subtask subtasks={subtasks} key={subtasks.name} toggleSubtask={toggleSubtask} />
        </tr>
    )
}