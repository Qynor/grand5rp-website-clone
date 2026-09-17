<template>
  <section class="intro">
    <Container class="container--big">
      <div class="intro__wrapper">
        <h1>GTA 5 International role play servers</h1>
        <p class="intro__desc">We have been making regular updates for you for more than ten years</p>
        <button type="button" class="btn">
          <Icon name="walk-black" />
          START PLAYING
        </button>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue';
import Icon from '~/components/Icon.vue';

</script>

<style scoped lang="css">
.intro {
  background: url('../assets/image/intro/intro.jpg') no-repeat center / cover;
  margin-top: 71px;
  position: relative;
  min-height: 900px;
}
.container--big {
  max-width: 1440px;
}
.intro {
  align-items: center;
  display: flex;
}
.intro__wrapper {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.intro__wrapper h1, .intro__desc {
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  color: #fff;
}
.intro__wrapper h1 {
  text-shadow: 0 0 44px rgba(0, 0, 0, .8);
  font-size: 72px;
  line-height: 80%;
  max-width: 694px;
  margin: 0 auto 12px;
}
.intro__wrapper .intro__desc {
  text-shadow: 0 0 24px rgba(0, 0, 0, .8);
  font-size: 20px;
  line-height: 100%;
  letter-spacing: .8px;
}
.btn {
  align-items: center;
  display: flex;
  padding: 24px 44px;
  gap: 10px;
  cursor: pointer;
  color: #151617;
  text-align: center;
  font-weight: 800;
  line-height: 100%;
  letter-spacing: .72px;
  text-transform: uppercase;
  border-radius: 16px;
  background: #FFDE2A;
  font-size: 18px;
  transition: .2s;
  border: none;
}
.intro .btn:hover {
  opacity: .9;
}
.intro .btn {
  margin: 20px auto 36px;
}
@media (min-width: 1040px) {
  .intro {
    min-height: 1000px;
  }
}
@media (max-width: 1040px) {
  .intro__wrapper h1 {
    font-size: 40px;
  }
  .intro__wrapper .intro__desc {
    font-size: 14px;
  }
  .intro::after {
    background: rgba(21, 22, 23, .6);
    top: 0;
    left: 0;
    height: 100%;
    display: block;
    content: '';
    position: absolute;
    right: 0;
  }
  .intro {
    min-height: 624px;
  }
  .intro * {
    position: relative;
    z-index: 1;
  }
}
</style>