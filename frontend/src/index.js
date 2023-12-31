import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';

//firebase
import firebase from 'firebase/compat/app'
import {firebaseConfig} from './scripts/firebaseConfig'

// Pages
import Workspace from './Workspace';
import Landing from './Landing';
import Projects from './Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));

firebase.initializeApp(firebaseConfig)

root.render(
    <React.StrictMode>
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/workspace/:user/:workspace' element={<Workspace />}/>
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>,
);
