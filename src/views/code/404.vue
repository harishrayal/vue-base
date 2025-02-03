<template>
    <div class="flex height-class items-center justify-center">
        <div><p class="text-4xl text-blue-600 font-bold">404</p></div>
        <div class="ml-5">
            <div class="border-l-2 border-gray-300">
                <p class="text-4xl color-black ml-5">Page not found</p>
                <p class="text-1xl text-slate-500 ml-5">
                    Please check the URL in the address bar and try again
                </p>
            </div>
            <span>
                <button
                    class="px-3 py-2 bg-purple-500 text-white w-30 text-2xl mt-5 ml-5"
                >
                    Go back home
                </button>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'NotFound',
}
</script>
<style scoped>
.height-class {
    height: 100vh;
}
</style>
