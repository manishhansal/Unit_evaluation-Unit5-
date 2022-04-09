import './App.css';
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Register } from './Components/Register';
// import { Products } from './Components/Products';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { Employees } from './Components/Employees';
import {EmployeesCreate} from './Components/EmployeesCreate'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/employees-create' element={<EmployeesCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;
