import { Outlet } from 'react-router-dom';
import Navigationbar from '../Navigation/Navigationbar';
import './App.css'
import Services from '../Pages/Services/Services';
import FooterSection from '../Footer/FooterSection';

function App() {
  return (
    <div>
    <Navigationbar></Navigationbar>
    <Outlet></Outlet>
    
    </div>
  )
}

export default App
