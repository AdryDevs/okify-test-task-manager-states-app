
import { useState } from 'react';

export const SubtaskCreator = ({ createNewSubtask }) => {
    const [newSubtaskName, setNewSubtaskName] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createNewSubtask(newSubtaskName);
        setNewSubtaskName("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter new subtask"
            value={newSubtaskName}
            onChange={(e) => setNewSubtaskName(e.target.value)}
        />
    
        <button>Add subtask</button>
        </form>
    );
    };