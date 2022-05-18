import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='todo-app'>
      <NavBar> </NavBar>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
