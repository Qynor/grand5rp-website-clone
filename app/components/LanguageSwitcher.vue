<template>
  <div class="dropdown-container lang-select" ref="dropdownRef">
    <button type="button" class="dropdown-trigger" @click="active = !active">
      <Icon name="arrow" />
      <img :src="getImageUrl(activeLang.flag)" alt="" class="flag-active" />
    </button>
    <div :class="['dropdown-content', { 'dropdown-content-open': active }]">
      <div v-for="language in inactiveLang" :key="language.code" class="lang-item">
        <img :src="getImageUrl(language.flag)" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue';
import { onClickOutside } from '@vueuse/core';

const active = ref(false);
const dropdownRef = ref(null);

const { locale } = useI18n();

const lang = [
  { code: 'en', name: 'English', flag: 'flag-usa' },
  { code: 'uk', name: 'Ukrainia', flag: 'flag-uk' },
];

const activeLang = computed(() => {
  return lang.find(language => language.code === locale.value) ?? lang[0]!
});

const inactiveLang = computed(() => {
  return lang.filter(language => language.code !== locale.value)
});

const getImageUrl = (name: string) => {
  return new URL(`/assets/image/flags/${name}.svg`, import.meta.url).href;
}

onClickOutside(dropdownRef, () => {
  active.value = false;
});
</script>

<style scoped>
.dropdown-container {
  position: relative;
}
.dropdown-trigger {
  border: none;
  background: transparent;
  align-items: center;
  display: inline-flex;
  gap: 8px;
  cursor: pointer;
  line-height: 100%;
  position: relative;
  z-index: 1;
}
.flag-active {
  position: relative;
  z-index: 1;
}
.dropdown-content {
  position: absolute;
  right: -8px;
  background: #151617;
  padding: 34px 8px 4px;
  top: -4px;
  border-radius: 12px;
  transition: .2s;
  opacity: 0;
  visibility: hidden;
}
.dropdown-content.dropdown-content-open {
  visibility: visible;
  opacity: 1;
}
.lang-item {
  cursor: pointer;
  transition: opacity .15s ease;
  opacity: .6;
}
.lang-item:hover {
  opacity: 1;
}
.lang-item img {
  width: 32px;
  height: 32px;
}
</style>