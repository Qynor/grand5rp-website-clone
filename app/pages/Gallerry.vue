<template>
  <section class="gallery">
    <Container>
      <div class="gallery__wrapper">
        <div class="gallery__item gallery__item-title">
          <h2>{{ t("pages.gallery.title") }}</h2>
        </div>
        <div v-for="item in items" class="gallery__item image">
          <img :src="item.image" :class="['Image', item.id]" alt="" />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue';

const { t } = useI18n();

interface galleryProps {
  id: number;
  image: string;
}

const items: galleryProps[] = [
  { id: 1, image: "https://gta5grand.com/assets/new/img/screens/1-min.jpg" },
  { id: 2, image: "" },
  { id: 3, image: "" },
  { id: 4, image: "" },
  { id: 5, image: "" },
]
</script>

<style scoped lang="css">
.gallery {
  margin-top: 40px;
}
.gallery__wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  overflow: hidden;
  border-radius: 24px;
}
.gallery__wrapper img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.gallery__item.image::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  visibility: hidden;
  transition: .2s;
  background: rgba(124, 91, 241, .6) url('../assets/image/ui/resize.svg') no-repeat center / cover;
  background-size: 60px 60px;
}
.gallery__item.image:hover::after {
  opacity: 1;
  visibility: visible;
}
.gallery__item-title::after, .gallery__item-title::before {
  position: absolute;
  content: '';
  background: #7c5bf1;
  height: 13px;
  left: 0;
  right: 0;
  width: 100%;
}
.gallery__item-title {
  padding: 0 26px;
  background: #ffff;
}
.gallery__item-title h2 {
  color: #151617;
  font-size: 24px;
  font-weight: 900;
  line-height: 90%;
  text-align: center;
  text-transform: uppercase;
}
.gallery__item {
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 140px;
  cursor: pointer;
}
.gallery__item-title::before {
  top: 0;
}
.gallery__item-title::after {
  bottom: 0;
}
@media (max-width: 1024px) {
  .gallery__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1088px) {
  .gallery_wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>