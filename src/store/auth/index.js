import { create } from "zustand";
import http from '../../plugins'

export const useLoginStore = create(() => ({
    WorkerLogin: async (payload) => {
        try{
            const res = await http.post('/worker/login', payload)
            if(res.status == 200){
                return res
            }
        }catch(err){
            return err
        }
    }
}))