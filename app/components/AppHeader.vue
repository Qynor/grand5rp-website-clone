<template>
  <header :class="[{'header-mobile-open': props.open}]">
    <div class="header__left">
      <a href="/">
        <Icon :name="!props.open ? 'grand-logo' : 'grand-logo-white'"/>
      </a>
      <LanguageSwitcher />
    </div>
    <div class="header__menu">
      <RouterLink v-for="item in items" :to="item.value" class="nav__item">
        {{ item.label }}
      </RouterLink>
    </div>
    <div class="header__total">
      <span>4185</span>
      <Icon name="profile" />
      <p>{{ t("header.default.total_online") }}</p>
    </div>
    <button type="button" class="btn">
      <Icon name="walk" />
      START PLAYING
    </button>
    <div class="header__burger" @click="emit('toggle')">
      <Icon v-if="!props.open" name="burger-open" />
      <Icon v-else="props.open" name="burger-close" />
    </div>
  </header>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue';
import Icon from './Icon.vue';

const { t } = useI18n();

const items = [
  { label: t("header.navigation.how_to_start_playing"), value: "#howtostart" },
  { label: t("header.navigation.forum"), value: "" },
  { label: t("header.navigation.technical_support"), value: "" },
];
const props = defineProps({
  open: Boolean
});
const emit = defineEmits(['toggle']);
</script>

<style scoped lang="css">
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #F1F1F1;
  box-shadow: 0px 8px 24px rgba(149, 149, 149, 0.2);
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 12px 12px 12px 22px;
}
.header__menu .nav__item {
  color: #151617;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: .64px;
  padding: 12px 20px;
  gap: 4px;
  border-radius: 8px;
  transition: .2s;
  text-transform: uppercase;
}
.header__menu .nav__item:hover {
  background-color: #FFDE2A;
}
.header__left {
  display: flex;
  align-items: center;
  gap: 32px;
}
.header__total {
  align-items: center;
  display: flex;
  gap: 8px;
  line-height: 100%;
  text-transform: uppercase;
}
.header__total p {
  font-size: 18px;
  font-weight: 700;
  color: #7c5bf1;
  letter-spacing: .64px;
}
.header__total span {
  color: #151617;
  font-weight: 800;
  font-size: 32px;
}
.btn {
  align-items: center;
  display: flex;
  padding: 18px 24px;
  gap: 10px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  text-align: center;
  font-weight: 800;
  line-height: 100%;
  letter-spacing: .72px;
  text-transform: uppercase;
  border-radius: 16px;
  background: #7c5bf1;
  font-size: 18px;
  transition: .2s;
  border: none;
}
header p,
span {
  margin: 0;
}
header.header-mobile-open {
  background: #151617;
}
@media (max-width: 1040px) {
  .header__menu, .nav__item, .header__total, header .btn {
    display: none;
  }
  header {
    padding: 12px 16px;
  }
}
@media (min-width: 1040px) {
  .header__burger {
    display: none;
  }
}
</style>