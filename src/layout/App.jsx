import { Outlet } from 'react-router-dom';
import Navigationbar from '../Navigation/Navigationbar';
import './App.css'
function App() {
  return (
    <>
    <Navigationbar></Navigationbar>
    <Outlet></Outlet>
    </>
  )
}

export default App
