<template>
<div class="container mx-auto px-4 sm:px-6" v-bind="$attrs">
  <slot />
</div>
</template>

<script>
export default {
  name: 'Container',
}
</script>