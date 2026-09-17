<script setup lang="ts">
import About from '~/pages/about.vue';
import Gallerry from '~/pages/Gallerry.vue';
import Howtoplay from '~/pages/howtoplay.vue';
import Intro from '~/pages/Intro.vue';
import Servers from '~/pages/Servers.vue';
</script>

<template>
  <main>
    <Intro />
    <Servers />
    <About />
    <Gallerry />
    <Howtoplay />
  </main>
</template>

<style lang="css">
main {
  overflow: hidden;
}
</style>