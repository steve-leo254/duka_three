import { useState } from 'react';
import Header from './header'; 
import Sidebar from './navbar'; 
import Dashboard from './dashboard';

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={openSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={openSidebar} />
      <Dashboard />
    </div>
  );
}

export default Home;