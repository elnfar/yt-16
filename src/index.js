import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import Woman from './components/Woman'
import Men from './components/Men';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

ReactDOM.render(

    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/women' element={<Woman/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
      </Routes>
    </Router>,

  document.getElementById('root')
);
