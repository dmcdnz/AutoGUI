import React, { useState } from 'react';

function Updates() {
    const [updates, setUpdates] = useState(['Update 1', 'Update 2']);
    const [newUpdate, setNewUpdate] = useState('');

    const addUpdate = () => {
        if (newUpdate) {
            setUpdates([...updates, newUpdate]);
            setNewUpdate('');
        }
    };

    return (
        <div>
            <h1>Updates</h1>
            <p>Manage your updates here.</p>
            <input
                type="text"
                value={newUpdate}
                onChange={(e) => setNewUpdate(e.target.value)}
                placeholder="New update"
            />
            <button onClick={addUpdate}>Add Update</button>
            <ul>
                {updates.map((update, index) => (
                    <li key={index}>{update}</li>
                ))}
            </ul>
        </div>
    );
}

export default Updates;
