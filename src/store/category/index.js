import { create } from "zustand";
import http from '../../plugins'

export const useCategoryStore = create((set) => ({
  categories: [],
  getCategory: async (payload) => {
    try {
      const response = await http.post(`/category/getall`, payload);
      if(response.status == 200){
        set({ categories: response.data.Categories});
      }
    } catch (error) {
      return error;
    }
  },
}));

