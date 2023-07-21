import React, { useState } from 'react';

function Plugins() {
    const [plugins, setPlugins] = useState(['Plugin 1', 'Plugin 2']);
    const [newPlugin, setNewPlugin] = useState('');

    const addPlugin = () => {
        if (newPlugin) {
            setPlugins([...plugins, newPlugin]);
            setNewPlugin('');
        }
    };

    return (
        <div>
            <h1>Plugins</h1>
            <p>Manage your plugins here.</p>
            <input
                type="text"
                value={newPlugin}
                onChange={(e) => setNewPlugin(e.target.value)}
                placeholder="New plugin"
            />
            <button onClick={addPlugin}>Add Plugin</button>
            <ul>
                {plugins.map((plugin, index) => (
                    <li key={index}>{plugin}</li>
                ))}
            </ul>
        </div>
    );
}

export default Plugins;
