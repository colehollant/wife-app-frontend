<template>
  <div id="app" :class="theme">
    <router-view/>
    <button aria-label="toggle dark mode" @click="toggleTheme" class="fixed bottom-0 right-0 m-4 p-2 rounded-full shadow-xl text-primary-10 bg-primary-90 focus:outline-none focus:shadow-outline">
      <svg v-if="theme === 'dark'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
    </button>
  </div>
</template>

<script>
import { inject, onMounted, watch } from '@vue/composition-api'
export default {
  setup() {
    const theme = inject('theme')
    const toggleTheme = inject('toggleTheme')
    const applyBodyColor = () => {
      document.body.style.backgroundColor = theme.value === 'light' ? '#fdcbe5' : '#362533'
    }
    watch(theme, applyBodyColor)
    
    onMounted(applyBodyColor)

    return { theme, toggleTheme }
  }
}
</script>

<style lang='postcss'>
.light {
  --text-color: #362533e0;
  --neutral-90: #fdcbe5;
  --neutral-80: #e4bbe7;
  --neutral-70: #c2a1ce;
  --neutral-60: #a17eaa;
  --neutral-50: #8d6a93;
  --neutral-40: #79577b;
  --neutral-30: #644664;
  --neutral-20: #4d354b;
  --neutral-10: #362533;

  --primary-90: #fff0f3;
  --primary-80: #fed1dd;
  --primary-70: #fcb2ca;
  --primary-60: #f691b8;
  --primary-50: #ed70a8;
  --primary-40: #de4e98;
  --primary-30: #c62f86;
  --primary-20: #a1136d;
  --primary-10: #70004f;

  --secondary-90: #e8e5ff;
  --secondary-80: #c8befc;
  --secondary-70: #a795f4;
  --secondary-60: #876ae3;
  --secondary-50: #6742ca;
  --secondary-40: #4a1faa;
  --secondary-30: #320584;
  --secondary-20: #25005e;
  --secondary-10: #180038;
}

.dark {
  --text-color: #fed1dde0;
  --neutral-10: #fdcbe5;
  --neutral-20: #c9abd8;
  --neutral-30: #b594c1;
  --neutral-40: #a17eaa;
  --neutral-50: #8d6a93;
  --neutral-60: #79577b;
  --neutral-70: #644664;
  --neutral-80: #4d354b;
  --neutral-90: #362533;

  --primary-10: #fff0f3;
  --primary-20: #fed1dd;
  --primary-30: #fcb2ca;
  --primary-40: #f691b8;
  --primary-50: #ed70a8;
  --primary-60: #de4e98;
  --primary-70: #c62f86;
  --primary-80: #a1136d;
  --primary-90: #70004f;

  --secondary-10: #e8e5ff;
  --secondary-20: #c8befc;
  --secondary-30: #a795f4;
  --secondary-40: #876ae3;
  --secondary-50: #6742ca;
  --secondary-60: #4a1faa;
  --secondary-70: #320584;
  --secondary-80: #25005e;
  --secondary-90: #180038;
}

.dark > *, .light > *, #app {
  transition: 1s ease;
  transition-property: background-color, border-color, fill, stroke, opacity, box-shadow, transform;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  @apply bg-neutral-90 text-text
}
</style>
