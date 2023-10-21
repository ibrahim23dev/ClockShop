import React, { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import logo from '../assets/images/logo1.png'
import { getNavs} from '../Navigation/index';
import { BiLogInCircle } from 'react-icons/bi';
function SideBar({showSidebar,setShowsidebar}) {
  const [allNav, setAllNav] = useState([])
  const {pathname} = useLocation();
  useEffect(() => {
    const navs = getNavs('admin');
    setAllNav(navs);
  }, [])

  
  console.log(pathname);
  return (
    <div>
      <div onClick={() => setShowsidebar(false)} className={`fixed duration-200  
        
      ${showSidebar ? 'invisible' : 'visible'} w-screen bg-[#22292f80] top-0 left-0 z-10`}></div>
      <div className={`w-[260px] fixed bg-[#283046] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>
        <div className='h-[70px] flex justify-center items-center'>
          <Link to='/' className='w-[180px] h-[50px]'>
            <img src={logo} alt='logo'/>
            </Link>
        </div>
        <div className='px-[16px]'>
          
          <ul>{
            allNav.map((n, i) => <li key={i}>
              <Link to={n.path} className={`${pathname === n.path ? ' shadow-indigo-500/30  text-white duration-500 bg-slate-600' :'text-[#d0d2d6] font-normal duration-200'} px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}>
                <span>{n.icon}</span>
                <span>{n.title}</span>
              </Link>
              </li>
            ) 
          }
            <li>
              <button className='text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1'>
                <span><BiLogInCircle /></span>
                <span>Logout</span>
              </button>
            </li>
          
          </ul>
        </div>
      </div>
     
    </div>
  )
}

export default SideBar