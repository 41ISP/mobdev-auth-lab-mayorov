import { create } from 'zustand'
import { api } from '../api/api'

const useItemStore = create((set) => ({
    items: [],

    getItems: async () => {
        try {
            const items = await AudioParam.getItems()
            set({ items })
        } catch (error) {
            console.error(error)
        }
    },
}))

export default useItemStore