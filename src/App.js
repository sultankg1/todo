import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';
import Input from './Components/Input';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/user' element={<User/>}/>
        <Route exact path='/input' element={<Input/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
