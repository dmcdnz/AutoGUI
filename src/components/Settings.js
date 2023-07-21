import React, { useState, useEffect } from 'react';

function Settings() {
    const [settings, setSettings] = useState({});

    // Fetch the current settings when the component mounts
    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        // TODO: Replace this with the actual API call to fetch the settings
        const response = await fetch('/api/settings');
        const data = await response.json();
        setSettings(data);
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setSettings({
            ...settings,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // TODO: Replace this with the actual API call to update the settings
        await fetch('/api/settings', {
            method: 'POST',
            body: JSON.stringify(settings),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(settings).map(key => (
                <div key={key}>
                    <label>
                        {key}
                        <input
                            name={key}
                            type="text"
                            value={settings[key]}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            ))}
            <button type="submit">Save</button>
        </form>
    );
}

export default Settings;
