import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navigationbar = () => {
  const location =  useLocation();
  // console.log(location.pathname);
  const {user, logOut} = useContext(AuthContext);
    return (
        <div className='font-tenor text-white'>
            <Navbar className={location.pathname==='/' ? 'navTrans' : 'solidNav'}>
          <Navbar.Brand href="/">
            <img src="https://i.ibb.co/myDGtH9/vecteezy-cute-little-cat-mascot-with-book-logo-design-ai-generative-23286094-157.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white uppercase">boi de boi ne</span>
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
            <Navbar.Link className='text-white' href="#">Services</Navbar.Link>
            {user ? <Navbar.Link className='text-white' onClick={logOut} href='#'>Logout</Navbar.Link>:
            <Navbar.Link className='text-white'href="/login">Login</Navbar.Link>}
            <Navbar.Link className='text-white' href="#">
              <Dropdown
              arrowIcon={true}
              inline
              label={
                <Navbar.Link className='text-white' href="#">Dashboard</Navbar.Link>
              }>
              <Dropdown.Item>My Services</Dropdown.Item>
              <Link to='/addproducts'><Dropdown.Item>Add Services</Dropdown.Item></Link> 
              <Dropdown.Item>My Scedules</Dropdown.Item>
              </Dropdown>
              </Navbar.Link>
              
          </Navbar.Collapse>
    </Navbar>
    
        </div>
    );
};

export default Navigationbar;

