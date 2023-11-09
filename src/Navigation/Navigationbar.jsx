import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { WebsiteNameContext } from '../WebsiteNameProvider/WebsiteNameProvider';

const Navigationbar = () => {
  const location =  useLocation();
  // console.log(location.pathname);
  const {user, logOut} = useContext(AuthContext);
  const {websiteName} = useContext(WebsiteNameContext);
    return (
        <div className='font-tenor text-white'>
            {/* <Navbar className={location.pathname==='/' || location.pathname===`/services/` ? 'navTrans' : 'solidNav'}> */}
            <Navbar className={location.pathname==='/login' || location.pathname===`/register` ||
             location.pathname===`/services` || location.pathname===`/myservices`
             || location.pathname===`/updateservices`
             || location.pathname===`/myscedule`
             || location.pathname===`/addproducts`?
              'solidNav' : 'navTrans' }>
            {/* <Navbar className='navTrans'> */}
          <Navbar.Brand href="/">
            <img src="https://i.ibb.co/myDGtH9/vecteezy-cute-little-cat-mascot-with-book-logo-design-ai-generative-23286094-157.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white uppercase">boi de boi ne {websiteName}</span>
          </Navbar.Brand>
          { user &&  <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm uppercase">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user.email}</span>
                </Dropdown.Header>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                {/* <Dropdown.Divider /> */}
                {/* <Dropdown.Item>Sign out</Dropdown.Item> */}
              </Dropdown>
              <Navbar.Toggle />
            </div>}
          <Navbar.Collapse>
            <Navbar.Link className='text-white' href="/" active>
              Home
            </Navbar.Link>
            <Navbar.Link className='text-white' href="/services">Services</Navbar.Link>
            {user ? <Navbar.Link className='text-white' onClick={logOut} href='#'>Logout</Navbar.Link>:
            <Navbar.Link className='text-white'href="/login">Login</Navbar.Link>}
            {user && <Navbar.Link className='text-white' href="#">
              <Dropdown
              arrowIcon={true}
              inline
              label={
                <Navbar.Link className='text-white' href="#">Dashboard</Navbar.Link>
              }>
              <Link to='/myservices'><Dropdown.Item>My Services</Dropdown.Item></Link> 
              <Link to='/addproducts'><Dropdown.Item>Add Services</Dropdown.Item></Link> 
              <Link to='/myscedule'><Dropdown.Item>My Scedules</Dropdown.Item></Link>
              </Dropdown>
              </Navbar.Link>}
              
          </Navbar.Collapse>
    </Navbar>
    
        </div>
    );
};

export default Navigationbar;

