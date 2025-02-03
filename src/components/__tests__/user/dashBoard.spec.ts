import { describe, it, expect } from 'vitest'
import About from '@/views/user/DashBoard.vue'

describe('dashboard user', () => {
    // Inspect the raw component options
    it('has data', () => {
        expect(typeof About.data).toBe('function')
    })
})
