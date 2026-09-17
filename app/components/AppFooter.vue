<script setup lang="ts">
import Container from './Container.vue';
import Icon from './Icon.vue';

</script>

<template>
  <footer>
    <Container>
      <div class="footer__content">
        <RouterLink to="/">
          <Icon name="grand-logo-footer" />
        </RouterLink>
      </div>
      <div class="footer__bottom"></div>
    </Container>
  </footer>
</template>

<style scoped lang="css">
footer {
  padding: 120px 0;
  background: #151617;
}
</style>