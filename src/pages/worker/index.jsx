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
          {categories?.map((e,i) => {
            return <CategoryCard key={i} data={e}/>
          })}
        </div>
        </div>
        <div className='flex mt-[150px] gap-[55px]'>
          {products?.map((e,i) => {
               return <ProductCard key={i} data={e}/>
          })}
        </div>
     </div>
  )
}

export default index
