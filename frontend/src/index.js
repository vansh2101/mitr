import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';

//? Pages
import ProjectPage from './ProfilePage';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
    <React.StrictMode>
  
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/project' element={<ProjectPage />}/>
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>,
=======
    // <LoginPage />
    // <ProjectPage />
    <Dashboard />
>>>>>>> 71abf0714df950bc816a5689bb5b8b6bf6e3a26d
);
