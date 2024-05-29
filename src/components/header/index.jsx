import React, { useEffect, useState } from 'react'
import { Input } from 'antd';

function index() {
  const [search, setSearch] = useState('')
  async function getData(){
    console.log(1);
  }

  useEffect(() => {
    getData()
  }, [search])
  const { Search } = Input;
  return (
    <div className='max-w-full mt-[24px] flex justify-between items-center'>
      <div>
        <h1 className='text-[30px] font-bold'>Welcome, {JSON.parse(localStorage.getItem('username'))} 👋</h1>
        <p className='font-medium text-[#0000006a]'>Discover whatever you need</p>
      </div>
      <div>
      <Search onChange={e => setSearch(e.target.value)} className='font-medium' placeholder="Search " size="large" />
      </div>
    </div>
  )
}

export default index