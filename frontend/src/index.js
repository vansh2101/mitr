import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';

//firebase
import firebase from 'firebase/compat/app'
import {firebaseConfig} from './scripts/firebaseConfig'

// Pages
import ProjectPage from './ProjectPage';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Workspace from './Workspace';
import Landing from './Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));

firebase.initializeApp(firebaseConfig)

root.render(
    <React.StrictMode>
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='/project' element={<ProjectPage />}/> */}
          <Route path='/workspace' element={<Workspace />}/>
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>,
);
