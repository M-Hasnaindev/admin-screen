import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Input from './pages/Input.jsx';
import Select from './pages/Select.jsx';
import Button from './pages/Button.jsx';
import Iconbutton from './pages/Iconbutton';
import Table from './pages/Table.jsx';
import Switch from './pages/Switch.jsx';
import Datepicker from './pages/Datepicker.jsx';
import Registernow from './pages/registration/registernow';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/input" element={<Input />} />
          <Route path="/select" element={<Select />} />
          <Route path="/buttons" element={<Button />} />
          <Route path="/iconbutton" element={<Iconbutton />} />
          <Route path="/table" element={<Table />} />
          <Route path="/switch" element={<Switch />} />
          <Route path="/datepicker" element={<Datepicker />} />
          <Route path="/register/auth" element={<Registernow />}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;