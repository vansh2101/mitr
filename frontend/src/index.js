import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';

//? Pages
import ProjectPage from './ProfilePage';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
  
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/project' element={<ProjectPage />}/>
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>,
);
