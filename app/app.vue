<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { nav__items } from './config/navigation.ts';

const navopen = ref(false);
const { t } = useI18n();

watch(navopen, (open) => {
  document.body.classList.toggle('overflow', open);
})

</script>

<template>
  <AppHeader :open="navopen" @toggle="navopen = !navopen"/>
  <div :class="['header__mobile', { 'header__mobile--open': navopen}]">
    <div v-if="navopen" class="header__mobile-menu">
      <RouterLink v-for="item in nav__items" :to="item.value" class="nav__item">
        {{ t(item.label) }}
      </RouterLink>
    </div>
  </div>
  <AppMain />
  <AppFooter />
</template>

<style scoped>
.header__mobile {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .9);
  transform: translateY(100%);
  transition: .2s ease;
  opacity: 0;
  display: flex;
  flex-direction: column;
  padding: 24px;
  z-index: 100;
  align-items: center;
  justify-content: flex-end;
}
.header__mobile--open {
  transform: translateY(0%);
  opacity: 1;
}
.header__mobile-menu {
  padding-bottom: 80px;
  flex-direction: column;
  display: flex;
}
.header__mobile .nav__item {
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, .4);
  text-align: center;
  text-transform: uppercase;
  line-height: 100%;
  font-weight: 700;
  font-size: 24px;
  font-size: 18px 20px;
  letter-spacing: .96px;
  padding: 24px;
  flex-direction: column;
  color: #F1F1F1;
  text-decoration: none;
}
</style>