import React from 'react'
import logo from '../../assets/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import Root from '../../router/root'


const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <>
      <div className='w-[100px] bg-[#ffffff26] shadow-lg  rounded-r-[50px] py-[50px] px-[27px]'>
          <NavLink to={'/layout'}>
            <img src={logo} alt="LOGO" />
          </NavLink>
          <div className='flex flex-col justify-center h-screen w-full gap-[30px]'>
            {Root?.map((e, i)=> {
              return (
                <NavLink key={i} to={e.path} className={pathname == e.path ? 'text-[35px] bg-black rounded-[50%] text-white text-center duration-200' : "text-[35px] text-center"}>
                   {e.icon}
                </NavLink>
              )
            })}
          </div>
      </div>
    </>
  )
}

export default Sidebar