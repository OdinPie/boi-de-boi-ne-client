import { Outlet } from 'react-router-dom';
import Navigationbar from '../Navigation/Navigationbar';
import './App.css'
import Services from '../Pages/Services/Services';
import FooterSection from '../Footer/FooterSection';

function App() {
  return (
    <>
    <Navigationbar></Navigationbar>
    <Outlet></Outlet>
    <FooterSection></FooterSection>
    </>
  )
}

export default App
