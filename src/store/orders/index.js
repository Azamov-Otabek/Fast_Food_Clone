import { create } from "zustand";
import http from '../../plugins'

// Utility function to find an order by ID
const findOrderIndexById = (orders, id) => orders.findIndex(order => order.id === id);

export const useOrderStore = create((set) => ({
  orders: [],
  addOrders: (data) => {
    set((state) => {
      const orderIndex = findOrderIndexById(state.orders, data.id);
      if (orderIndex !== -1) {
        const updatedOrders = [...state.orders];
        updatedOrders[orderIndex].count += 1;
        return { orders: updatedOrders };
      } else {
        return { orders: [...state.orders, data] };
      }
    });
  },
  createOrders: async(data) =>{
    try{
      const response = await http.post('/order/create', data)
      return response
    }catch(err){
      return err
    }
  },
  resetOrders: () => {
    set((state) => ({ orders: [] }));
  },
  getOrders: async(payload) =>{
      try{
        const response = await http.get(`/orders/get/${payload.page}/${payload.limit}/${payload.worker_id}`)
        if(response.status === 200){
          return response
        }
      }catch(err){
        return err
      }
  }
}));
