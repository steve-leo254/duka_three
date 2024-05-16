import { useState } from 'react'

import Header from './Header'
import sidebar from './sidebar'
import dashboard from './dashboard'

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <dashboard />
    </div>
  )
}

export default Home