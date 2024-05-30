import { create } from "zustand";
import http from '../../plugins'

export const useProductStore = create((set) => ({
  products: [],
  getProducts: async (payload) => {
    try {
      const response = await http.post(`/product/search`, payload);
      if(response.status == 200){
        set({ products: response.data.products});
      }
    } catch (error) {
      return error;
    }
  },
  getProductbyCategory: async (payload) =>{
    try {
      const response = await http.post(`/products/get_category_id`, payload);
      if(response.status == 200){
        set({ products: response.data.products});
      }
    } catch (error) {
      return error;
    }
  },
  getProductSearch: async (payload) =>{
    try {
      const response = await http.post(`/product/search`, payload);
      if(response.status == 200){
        set({ products: response.data.products});
      }
    } catch (error) {
      console.log(error)
    }
  },
}));

