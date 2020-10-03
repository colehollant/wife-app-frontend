<template>
  <div class="min-h-screen flex items-center transform -translate-y-16">
    <Container class="space-y-6 sm:space-y-8">
      <h1 class="flex flex-col items-center">
        <a href="https://twitter.com/gaybugfeet" target="_blank" rel="noopener noreferrer" class="focus:outline-none focus:underline hover:underline">
          <span class="text-secondary-20 text-3xl font-medium">nicole's</span>
        </a>
        <span class="text-secondary-20 text-2xl font-medium">wife application</span>
      </h1>
      <p class="text-lg font-medium">hiiiii 🥰 im sure u have a crush on me,, so its time 2 fill out the wife application :&#41;</p>
      <router-link 
        to="/application"
        class="block text-2xl font-semibold text-neutral-90 bg-primary-20 w-max px-8 py-3 rounded-lg mx-auto 
          hover:bg-primary-10 hover:shadow-md
          focus:outline-none focus:shadow-outline focus:bg-primary-10
          transition duration-300" 
      >
        apply
      </router-link>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    document.title = 'home 🏡'
  }
}
</script>
