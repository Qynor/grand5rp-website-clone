<template>
  <Container>
    <div class="intro__servers">
      <div v-for="item in items" :class="['intro__servers-item', item.code]">
        <h4>{{ item.country }} #{{ item.serverNumber }}</h4>
        <p>
          <img :src="getImageUrl(item.serverFlagCountry)" alt="" />
          <span class="server__online">
            {{ item.serverOnline }}
            <Icon name="profile-black" />
          </span>
        </p>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Icon from '~/components/Icon.vue';

export interface serverProps {
  id: number;
  country: string;
  code: string;
  serverNumber: number;
  serverOnline: number;
  serverFlagCountry: string;
}

const items: serverProps[] = [
  { id: 1, code: "us", country: "US", serverNumber: 1, serverOnline: 694, serverFlagCountry: "flag-usa" },
  { id: 2, code: "us", country: "US", serverNumber: 2, serverOnline: 694, serverFlagCountry: "flag-usa" },
  { id: 3, code: "us", country: "US", serverNumber: 3, serverOnline: 694, serverFlagCountry: "flag-usa" },
  { id: 4, code: "us", country: "US", serverNumber: 2, serverOnline: 694, serverFlagCountry: "flag-usa" },
  { id: 5, code: "us", country: "US", serverNumber: 3, serverOnline: 694, serverFlagCountry: "flag-usa" },
  { id: 6, code: "us", country: "US", serverNumber: 1, serverOnline: 694, serverFlagCountry: "flag-usa" },
  { id: 7, code: "us", country: "US", serverNumber: 2, serverOnline: 694, serverFlagCountry: "flag-usa" },
  { id: 8, code: "us", country: "US", serverNumber: 3, serverOnline: 694, serverFlagCountry: "flag-usa" },
];

const getImageUrl = (name: string) => {
  return new URL(`/assets/image/flags/${name}.svg`, import.meta.url).href;
}
</script>

<style scoped lang="css">
.intro__servers {
  display: flex;
  padding: 24px;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  max-width: 1024px;
  margin: -70px auto 0;
  align-items: center;
}
.intro__servers-item {
  cursor: pointer;
  width: 168px;
  padding: 16px;
  height: 78px;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 12px;
  background: #F1F1F1;
  position: relative;
  overflow: hidden;
  transition: .2s;
}
.intro__servers-item h4 {
  color: #151617;
  font-size: 16px;
  margin-bottom: 4px;
  position: relative;
  z-index: 1;
}
.intro__servers, .intro__servers-item {
  font-weight: 800;
  line-height: 100%;
}
.intro__servers-item {
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  position: relative;
  z-index: 1;
  margin-bottom: 4px;
}
.intro__servers-item p span {
  color: #151617;
  gap: 4px;
  align-items: flex-end;
  font-size: 20px;
  font-weight: 900;
  line-height: 100%;
  justify-content: flex-end;
}
.intro__servers-item p {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.intro__servers-item::after {
  content: '';
  width: 100%;
  height: 6px;
  bottom: 0;
  left: 0;
  display: block;
  position: absolute;
}
.intro__servers-item.us::after {
  background: linear-gradient(0deg,
  rgba(241, 241, 241, .4) 0,
  rgba(241, 241, 241, .4) 100%),
  linear-gradient(90deg,
  #ef0c6b 0,
  #5546ff 100%);
}
.intro__servers-item.lv::after {
  background: linear-gradient(0deg,
  rgba(241, 241, 241, .4) 0,
  rgba(241, 241, 241, .4) 100%),
  linear-gradient(90deg,
  #982133 0,
  #F7F7F7 100%);
}
@media (max-width: 1040px) {
  .intro__servers {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow: auto hidden;
    padding: 0 16px;
    scroll-padding: 16px;
    justify-content: flex-start;
    margin: -200px -16px 36px;
  }
}
</style>