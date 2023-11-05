import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const Navigationbar = () => {
    return (
        <div>
            <Navbar className='bg-transparent hover:bg-dustyRose text-white absolute z-50 p-10 w-full font-tenor border border-gray-50 border-opacity-30'>
          <Navbar.Brand href="/">
            <img src="https://i.ibb.co/myDGtH9/vecteezy-cute-little-cat-mascot-with-book-logo-design-ai-generative-23286094-157.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white uppercase">boi de boi ne</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link className='text-white' href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link className='text-white' href="#">Services</Navbar.Link>
            <Navbar.Link className='text-white'href="#">Login</Navbar.Link>
            <Navbar.Link className='text-white' href="#">
              <Dropdown
              arrowIcon={true}
              inline
              label={
                <Navbar.Link className='text-white' href="#">Dashboard</Navbar.Link>
              }>
              <Dropdown.Item>My Services</Dropdown.Item>
              <Dropdown.Item>Add Services</Dropdown.Item>
              <Dropdown.Item>My Scedules</Dropdown.Item>
              </Dropdown>
              </Navbar.Link>
              
          </Navbar.Collapse>
    </Navbar>
    
        </div>
    );
};

export default Navigationbar;

