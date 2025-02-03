<template>
    <div class="text-3xl text-center text-blue-500">Welcome To User Page</div>
</template>
<script lang="ts">
import { getDetails } from '@/services/admin/dashboard_api'

export default {
    data() {
        return {
            name: '',
        }
    },
    async mounted() {
        this.getTestDetails()
    },
    methods: {
        async getTestDetails() {
            try {
                const { data } = await getDetails()
                if (import.meta.env.DEV) {
                    // eslint-disable-next-line
                    console.log(data)
                }
            } catch (error: any) {
                if (import.meta.env.DEV) {
                    throw new Error(error)
                }
            }
        },
    },
}
</script>
