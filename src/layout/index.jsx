import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import {Sidebar, Rightbar} from '../components'
import { useOrderStore } from '../store/orders'


function index() {
  const {pathname} = useLocation()
  const {orders} = useOrderStore()
  return (
    <>
        <div className='flex bg-[#E6E3E3] w-full h-[100%] gap-[70px]'>
            <Sidebar/>
            <Outlet/>
            {pathname == '/layout' ? <Rightbar orders={orders}/> : ''}
        </div>
    </>
  )
}

export default index