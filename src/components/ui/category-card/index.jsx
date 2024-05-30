import React from 'react'
import { useProductStore } from '../../../store/products'

function index({data}) {
  const {getProductbyCategory} = useProductStore()
  async function getData(id){
     const payload = {
       limit: 999,
       page:1,
       category_id: id,
     }
     await getProductbyCategory(payload)
  }


  return (
    <div onClick={() => getData(data.id)} className='w-[220px] h-[90px] bg-[#ffffff26] py-[14px] px-[20px] flex items-center gap-[12px] cursor-pointer rounded-xl'>
       <img src={data?.image || 'https://restaurant-crm-pvt3.vercel.app/assets/noimage-IR2Iw3UG.png'} alt="IMG" className='w-[62px] h-[62px] object-cover rounded-[50%] '/>
        <h2 className='font-bold text-[20px] capitalize'>{data?.name}</h2>
    </div>
  )
}

export default index