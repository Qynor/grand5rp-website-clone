<template>
  <section class="about">
    <Container>
      <a class="about__wrapper" :href="link" target="_blank">
        <img src="../assets/image/ui/art.png" alt="" />
        <div class="about__inner">
          <div class="about__content">
            <div class="about__play">
              <Icon name="play" />
            </div>
            <p>
              About us
              <span>in 2 minutes</span>
            </p>
          </div>
        </div>
      </a>
    </Container>
  </section>
</template>

<script setup lang="ts">
const link = "";
import Container from '~/components/Container.vue';

</script>

<style scoped lang="css">
.about {
  margin-top: 40px;
}
.about__wrapper {
  position: relative;
  display: flex;
  height: 234px;
  align-items: center;
  gap: 26px;
  border-radius: 44px;
  background: url('../assets/image/ui/default.jpg') no-repeat center / cover;
  cursor: pointer;
}
.about__inner {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0 64px;
  border-radius: 44px;
}
.about__inner::after {
  background: linear-gradient(0deg,
  rgba(238, 11, 75, .6) 0, rgba(238, 11, 75, .6) 100%);
  z-index: 0;
}
.about__inner::after {
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .2s;
  visibility: hidden;
  opacity: 0;
  position: absolute;
}
.about__inner:hover::after {
  opacity: 1;
  visibility: visible;
}
.about__content, .about__inner, .about__play {
  align-items: center;
  display: flex;
}
.about__content {
  gap: 26px;
}
.about__content p {
  color: #fff;
  font-size: 40px;
  font-weight: 800;
  position: relative;
  z-index: 1;
}
.about__content p span {
  display: block;
  margin-top: 4px;
  font-size: 20px;
  font-weight: 700;
}
.about__content p, .about__content span {
  text-transform: uppercase;
  line-height: 100%;
  letter-spacing: .8px;
}
.about img {
  position: absolute;
  max-width: 495px;
  bottom: 0;
  right: 28px;
  z-index: 1;
}
.about__play {
  width: 90px;
  height: 90px;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 10px;
  background-color: #ee0b4b;
  border-radius: 64px;
  flex-shrink: 0;
  cursor: pointer;
  z-index: 1;
}
@media (max-width: 1040px) {
  .about__wrapper {
    height: 136px;
  }
  .about__play {
    width: 60px;
    height: 60px;
  }
  .about__inner {
    padding: 0 26px;
  }
  .about__wrapper img {
    display: none;
  }
}
</style>