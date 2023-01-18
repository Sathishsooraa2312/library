import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home} from "./components/Home.js"
import {Signup} from "./components/Signup.js"
import {Login} from "./components/Login.js"
function App() {
  return (
    <div className="App">
      <div className='routes-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/Signup' element={<Signup />} />
          <Route path='/users/Login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
