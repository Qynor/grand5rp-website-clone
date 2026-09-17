<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const icons = import.meta.glob(
  '~/assets/icons/*.svg',
  {
    eager: true,
    query: '?component',
    import: 'default',
  }
)

const icon = computed(() => {
  return icons[`/assets/icons/${props.name}.svg`]
})
</script>

<template>
  <component :is="icon" v-if="icon" :class="[props.name]" />
</template>
