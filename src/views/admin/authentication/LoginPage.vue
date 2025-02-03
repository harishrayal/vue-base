<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-6 sm:px-10 shadow-md rounded-lg">
                <h2 class="text-center text-3xl font-extrabold text-gray-900 mb-6">Sign in to your account</h2>
                <form class="space-y-6" @submit.prevent="login">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                        <div class="mt-1">
                            <input type="email" id="email" name="email" v-model="email" required 
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <div class="mt-1">
                            <input type="password" id="password" name="password" v-model="password" required 
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" 
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label for="remember_me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
                        <div class="text-sm">
                            <a href="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '../../../interface/userDetails'

const email = ref('')
const password = ref('')
const router = useRouter()

async function login() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if (!response.ok) {
            throw new Error('Unable to fetch user data')
        }
        const user: User = await response.json()
        user.role = user.id % 2 === 0 ? 'admin' : 'user'
        localStorage.setItem('role', user.role)
        localStorage.setItem('access_token', 'test_token_12333333333')
        if (user.role === 'admin') {
            await router.push({ name: 'adminHome' })
        } else {
            await router.push({ name: 'userHome' })
        }
    } catch (error: any) {
        throw new Error(error)
    }
}
</script>