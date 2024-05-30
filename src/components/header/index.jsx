import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { useProductStore } from '../../store/products';
import { useLocation } from 'react-router-dom';

function index() {
  const {getProductSearch} = useProductStore()
  const [search, setSearch] = useState('')
  async function getData(){
    const payload = {
      limit: 999,
      page:1,
      title: search,
      owner_id: JSON.parse(localStorage.getItem('owner_id'))
    }
    await getProductSearch(payload)
  }

  useEffect(() => {
    getData()
  }, [search])
  const { Search } = Input;
  const {pathname} = useLocation()
  return (
    <div className='max-w-full mt-[24px] flex justify-between items-center'>
      <div>
        <h1 className='text-[30px] font-bold'>Welcome, {JSON.parse(localStorage.getItem('username'))} 👋</h1>
        <p className='font-medium text-[#0000006a]'>Discover whatever you need</p>
      </div>
      <div>
      {pathname == '/layout' &&  <Search onChange={e => setSearch(e.target.value)} className='font-medium' placeholder="Search " size="large" />}
      </div>
    </div>
  )
}

export default index