<template>
  <section class="how-play">
    <Container>
      <h3>
        HOW TO START PLAYING
        <a class="btn" href="#" target="_blank">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 16.2V1.80005L16.2 9.20576L4.5 16.2Z" fill="#F1F1F1"></path>
        </svg>
          HOW TO START FOR 1 MINUTE
        </a>
      </h3>
      <div class="how-play__steps">
        <div class="how-play__item">
          <div class="how-play__badge how-play__badge-white">First step</div>
          <div class="how-play__row">
            <h4>
              YOU'LL NEED A LICENSED
              <br/>
              COPY OF GRAND THEFT AUTO V
            </h4>
            <div class="how-play__actions">
              <img src="../assets/image/ui/gta.svg" alt="" />
              <a href="#" class="btn btn-white white">
                <img src="../assets/image/ui/steam.svg" />
                BUY
              </a>
            </div>
          </div>
        </div>
        <div class="how-play__divider"></div>
        <div class="how-play__item">
          <div class="how-play__badge">Second Step</div>
            <h4>Go to the FIVEM website and download the launcher</h4>
            <div class="how-play__actions">
              <a href="#" class="btn btn-white white">
                Download FiveM
                <img src="../assets/image/ui/download.svg" alt="" />
              </a>
              <a href="#" target="_blank" class="btn btn-outline">
                fivem website
                <img src="../assets/image/ui/link.svg" alt=""/>
              </a>
              <img src="../assets/image/ui/fivem.svg" alt="" />
            </div>
          </div>
          <div class="how-play__divider"></div>
        </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue';

</script>

<style scoped lang="css">
.how-play, .how-play h3 {
  margin-bottom: 32px;
}
.how-play h4 {
  color: #F1F1F1;
  line-height: 100%;
  letter-spacing: .8px;
  font-weight: 800;
  font-size: 40px;
}
.how-play h3 {
  color: #151617;
  font-size: 80px;
  font-weight: 900;
  line-height: 80%;
  max-width: 546px;
  position: relative;
}
.how-play h3 .btn {
  position: absolute;
  right: -10px;
  bottom: 0;
}
.btn {
  text-decoration: none;
  border-radius: 16px;
  gap: 10px;
  padding: 18px 24px;
  display: flex;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  line-height: 100%;
  letter-spacing: .72px;
  text-transform: uppercase;
  background: #7c5bf1;
  align-items: center;
  justify-content: center;
  transition: .2s;
}
.btn-white {
  color: #151617;
}
.btn-white.white {
  background: #F1F1F1;
}
.how-play__steps {
  margin-bottom: 32px;
  align-items: center;
}
.how-play__item, .how-play__steps {
  flex-direction: column;
  display: flex;
}
.how-play__badge {
  background: #FFDE2A;
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  color: #151617;
  font-size: 17px;
  font-weight: 800;
  line-height: 100%;
  letter-spacing: .34px;
  text-transform: uppercase;
  border-radius: 4px;
}
.how-play__badge-white {
  background: #F1F1F1;
}
.how-play__item {
  border-radius: 32px;
  background: #7c5bf1;
  padding: 32px;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  width: 100%;
  position: relative;
}
.how-play__row {
  display: flex;
  align-items: flex-end;
  gap: 24px;
  width: 100%;
  justify-content: space-between;
}
.how-play__row h4 {
  color: #F1F1F1;
  font-size: 40px;
  font-weight: 800;
  line-height: 100%;
  letter-spacing: .8px;
}
.how-play__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.how-play__divider {
  max-width: 100%;
  width: 337px;
  height: 28px;
  position: relative;
  overflow: hidden;
}
.how-play__divider::after {
  position: absolute;
  content: '';
  left: 50%;
  top: 40%;
  width: 28px;
  height: 337px;
  transform: translate(-50%, -50%) rotate(90deg);
  background: url('../assets/image/ui/playing-border.svg') no-repeat center / contain;
}
.how-play__row h4, .how-play h4 {
  text-transform: uppercase;
}
.btn-outline {
  border: 2px solid #F1F1F1;
  padding: 16px 22px;
  background: transparent;
  color: #F1F1F1;
}
@media (max-width: 767px) {
  .how-play__actions {
    flex-wrap: wrap;
  }
  .how-play__row h4, .how-play h4 {
    font-size: 28px;
  }
}
@media (max-width: 430px) {
  .how-play__actions, .how-play__actions .btn {
    width: 100%;
  }
}
@media (max-width: 1040px) {
  .how-play h3 {
    font-size: 40px;
    text-align: center;
  }
  .how-play h3 .btn {
    position: static;
    margin: 10px auto 0;
  }
  .how-play__row {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>