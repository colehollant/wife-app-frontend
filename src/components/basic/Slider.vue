<template>
<label class="block" :for="$attrs.id || $attrs.name">
  <slot name="label" />
  <input 
    type="range" 
    class="slider block my-2 h-2 w-full appearance-none border border-neutral-90 bg-neutral-80 rounded outline-none hover:bg-neutral-70 hover:border-neutral-70 transition ease-in duration-100"
    :name="$attrs.name || $attrs.id" 
    :id="$attrs.id || $attrs.name" 
    :min="$attrs.min" 
    :max="$attrs.max" 
    :step="$attrs.step" 
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</label>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    value: {
      type: null,
      required: true
    },
  },
}
</script>

<style lang="postcss" scoped>
.thumb {
  @apply block w-3 h-3 bg-secondary-40 rounded-full cursor-pointer appearance-none;
}
.slider::-webkit-slider-thumb {
  @apply thumb;
}
.slider::-moz-range-thumb {
  @apply thumb;
}
.slider::-webkit-slider-thumb:hover {
  @apply bg-secondary-30;
}
.slider::-moz-range-thumb:hover {
  @apply bg-secondary-30;
}
.slider:focus::-webkit-slider-thumb {
  @apply shadow-outline;
}
.slider:focus::-moz-range-thumb {
  @apply shadow-outline;
}
</style>