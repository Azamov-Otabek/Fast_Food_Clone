import React, { useEffect } from 'react'
import { Header } from '../../components'
import {useCategoryStore} from '../../store/category'
import {CategoryCard, ProductCard} from '../../components/ui'
import {useProductStore} from '../../store/products'

function index() {
   const {getCategory, categories} = useCategoryStore()
   const {getProducts, products} = useProductStore()
   async function GetDatas(){
      const payload = {
         limit: 50,
         page:1,
         owner_id: JSON.parse(localStorage.getItem('owner_id')),
      }
      await getCategory(payload)

      const payload2 = {
         limit: 50,
         page:1,
         owner_id: JSON.parse(localStorage.getItem('owner_id')),
         category_id: '',
      }

      await getProducts(payload2)
   }

   useEffect(() =>{
      GetDatas()
   }, [])
  return (
     <div className='w-[1300px] h-[100%]'>
        <Header/>
        <div>
        <div className='flex gap-x-[50px] gap-y-[10px] flex-wrap mt-[35px]'>
        <div onClick={() => GetDatas()} className='w-[220px] h-[90px] bg-[#ffffff26] py-[14px] px-[20px] flex items-center gap-[12px] cursor-pointer rounded-xl'>
            <img src={'https://restaurant-crm-pvt3.vercel.app/assets/noimage-IR2Iw3UG.png'} alt="IMG" className='w-[62px] h-[62px] object-cover'/>
            <h2 className='font-bold text-[20px] capitalize'>Get All</h2>
         </div>
          {categories?.map((e,i) => {
            return <CategoryCard key={i} data={e}/>
          })}
        </div>
        </div>
        <div className='flex flex-wrap mt-[150px] gap-y-[150px] gap-x-[40px]'>
          {products?.map((e,i) => {
               return <ProductCard key={i} data={e}/>
          })}
        </div>
     </div>
  )
}

export default index
