<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
        <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h1 class="text-2xl font-bold text-center mb-4 text-gray-800">
                Forgot Password
            </h1>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label
                        class="block text-gray-700 font-medium mb-2"
                        for="email"
                    >
                        Email Address
                    </label>
                    <input
                        v-model="email"
                        class="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button
                    class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="submit"
                >
                    Send Reset Link
                </button>
            </form>
            <p class="text-gray-600 text-center mt-4">
                Remember your password?
                <router-link class="text-blue-500 hover:underline" to="/"
                    >Login</router-link
                >
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            email: '',
        }
    },
    methods: {
        submitForm() {
            // Send reset link to email address
        },
    },
})
</script>
