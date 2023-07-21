import React, { useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState(['Project 1', 'Project 2']);
    const [newProject, setNewProject] = useState('');

    const addProject = () => {
        if (newProject) {
            setProjects([...projects, newProject]);
            setNewProject('');
        }
    };

    return (
        <div>
            <h1>Projects</h1>
            <p>Manage your projects here.</p>
            <input
                type="text"
                value={newProject}
                onChange={(e) => setNewProject(e.target.value)}
                placeholder="New project"
            />
            <button onClick={addProject}>Add Project</button>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>{project}</li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;
