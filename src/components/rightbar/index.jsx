import React, { useState } from 'react';
import { Drawer } from 'antd';
import { useOrderStore } from '../../store/orders';
import { ToastContainer, toast } from 'react-toastify';
import { QRCODE } from '../ui';
const App = ({orders}) => {
  const [tablenum, settablenum] = useState(0)
  const {createOrders, resetOrders} = useOrderStore();
  const [open, setOpen] = useState(false)
  let pricec = 0
  orders.forEach(e => {
    pricec += (e?.price - (e?.price / 100 * (e?.discount || 0) ) ) * e?.count
  });

  async function createOrder(){
    setOpen(true)
    const products = orders.map(e => {
      let payload = {
        id: e.id,
        title: e.title,
        price: e.price,
        count: e.count,
      }
      return payload
    })
    if(tablenum > 0){
       const payload = {
        products: products,
        table_number: +tablenum,
        tax: 10,
        total_price: Math.ceil(pricec + ((pricec / 100) * 10)),
        worker_id: JSON.parse(localStorage.getItem('worker_id'))
       }
       const response = await createOrders(payload)
       if(response.status == 201){
         toast.success('Order Created', {autoClose: 1100})
        setTimeout(() => {
          resetOrders()
          settablenum(0)
        }, 1400);
       }
    }
  }
  return (
    <>
      <ToastContainer/>
      <Drawer style={{background: '#e5e5e5'}} closeIcon={false} mask={false} open={orders.length && true}>
          {open && <QRCODE/>}
          <div className='flex flex-col gap-[20px] mt-[100px]'>
              {orders.map((item, index) => {
                  return (
                  <div key={index} className='flex w-[300px] h-[120px] bg-[white] rounded-xl px-[23px] py-[20px] gap-[20px] items-center'>
                    <img className='w-[90px] h-[90px] object-cover rounded-[50%]' src={item?.picture || 'https://restaurant-crm-pvt3.vercel.app/assets/noimage-IR2Iw3UG.png'} alt="Image" />
                    <div>
                      <h2 className='font-bold text-[22px] capitalize mb-[5px]'>{item?.title}</h2>
                      <div className='flex gap-[20px]'>
                      <p className='font-medium text-[18px]'>{item?.count}x</p>
                      <p className='font-medium text-[18px]'>{(item?.price - (item?.price / 100 * (item?.discount || 0)) )   * item?.count} so'm</p>
                      </div>

                    </div>
                  </div>
                  )
              })}
          </div>
          
          {orders.length > 0 && <div className='p-[28px] w-[286px] bg-[white] mt-[217px] rounded-xl'>
              <input onChange={(e) => settablenum(e.target.value)} type="number" className='w-full h-[40px] text-[18px] outline-none mb-[20px] border p-[5px]' placeholder='Enter your table number' />
              <div className='flex justify-between'>
                <h2 className='font-semibold text-[18px] capitalize text-[#00000058]'>Subtotal:</h2>
                <p className='font-medium text-[16px]'>{pricec} so'm</p>
              </div>
              <div className='flex justify-between mt-[20px]'>
                <h2 className='font-semibold text-[18px] capitalize text-[#00000058]'>Total Sales Tax:</h2>
                <p className='font-medium text-[16px]'>10%</p>
              </div>

              <div className='flex justify-between mt-[20px] border-t-[4px] border-dashed pt-[20px] '>
                <h2 className='font-semibold text-[18px] capitalize text-[#00000058]'>Total:</h2>
                <p className='font-medium text-[16px]'>{Math.ceil(pricec + ((pricec / 100) * 10))} so'm</p>
              </div>
              
              <button onClick={() => createOrder()} className='w-full h-[50px] bg-[#FEA827] text-center mt-[20px] rounded-xl cursor-pointer text-white font-bold text-[25px]'>Check out</button>
          </div>}
      </Drawer>
    </>
  );
};
export default App;