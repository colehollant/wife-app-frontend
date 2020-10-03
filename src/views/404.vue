<template>
  <div class="min-h-screen pt-8 pb-16 sm:pt-12 sm:pb-20 space-y-12">
    <h1 class="text-2xl">404 hmmmm</h1>
    <router-link 
        to="/"
        class="block text-xl font-semibold text-neutral-90 bg-primary-20 w-max px-8 py-3 rounded-lg mx-auto 
          hover:bg-primary-10 hover:shadow-md
          focus:outline-none focus:shadow-outline focus:bg-primary-10
          transition duration-300" 
      >
        home
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Error',
  mounted() {
    document.title = '404 🏡'
  }
}
</script>