import './App.css';
import Nav from './Components/Nav';
import { Outlet } from 'react-router';

function App() { 
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
