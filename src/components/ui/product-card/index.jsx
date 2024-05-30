import React from 'react'
import { Rate } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {useOrderStore} from '../../../store/orders'

function index({data}) {
  const {addOrders} = useOrderStore()
  function setOrder(){
      addOrders({...data, count: 1})
  }

  return (
    <div className='w-[286px] h-[366px] bg-[#ffffff26] rounded-t-[40px] border-[2px] border-white relative px-[30px]'>
       <img src={data?.picture || 'https://restaurant-crm-pvt3.vercel.app/assets/noimage-IR2Iw3UG.png'} alt="IMG" className='rounded-[50%] absolute w-[203px] h-[210px] object-cover top-[-80px] left-[38px]' />
        <h3 className='mt-[143px] text-[22px] font-bold mb-[10px]'>{data?.title}</h3>
        <p className='text-[16px] font-medium mb-[20px]'>{data?.description}</p>
        <Rate />
        <p className='text-[28px] font-semibold'>{data?.price} so'm</p>
        <button onClick={() => setOrder()} className='w-[54px] h-[54px] absolute bottom-2 right-5 bg-black rounded-[50%]'><PlusOutlined className='text-[white] text-[20px]' /></button>
    </div>
  )
}

export default index