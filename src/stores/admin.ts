import { defineStore } from 'pinia'

export const adminStore = defineStore('adminStore', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            isAdmin: false,
        }
    },
})
