<template>
  <div :class="['container', props.class]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type ClassValue = string | string[] | Record<string, boolean>;

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<style scoped lang="css">
.container {
  max-width: 1060px;
  padding: 0 12px;
  margin: 0 auto;
  position: relative;
  width: 100%;
}
</style>