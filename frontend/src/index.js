import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import ProjectPage from './ProfilePage';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginPage />
    // <ProjectPage />
    // <Dashboard />
);
