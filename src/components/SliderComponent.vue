<template>
  <div class="slider">
    <div class="slider__header">
      <indicator-component class="mb-10"></indicator-component>
      <profile-component username="John Doe"></profile-component>
    </div>
    <div class="slider__content">
      <p class="slider__content--main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolore minima perspiciatis minus! Provident consectetur nulla pariatur, porro natus dolorem iusto dolorum enim consequatur facilis distinctio ipsam quasi necessitatibus laboriosam, assumenda excepturi. Rerum minima error maxime dolorum praesentium quisquam porro dolorem. Rem porro corporis modi suscipit, eligendi totam aspernatur laudantium?
      </p>
    </div>
    <div class="slider__button">
      <button-component hover-text="Unfollow">
        Following
    </button-component>
    </div>
  </div>
</template>
<script>
import IndicatorComponent from './IndicatorComponent.vue'
import ButtonComponent from './ButtonComponent.vue'
import profileComponent from './profileComponent.vue'
export default {
  components: { ButtonComponent, IndicatorComponent, profileComponent }
}
</script>
<style scoped lang="scss">
.slider {
  display: flex;
  flex-direction: column;
  width: 375px;
  background: rgb(202, 197, 197);
  border-radius: 10px;
  &__header {
    padding: 20px 20px 10px 20px;
    border-bottom: 1px solid #ac9494;
  }
  &__content {
    max-height: 458px;
    overflow: auto;
    padding: 20px;
    border-bottom: 1px solid #ac9494;
    &--main {
      padding: 5px;
    }
  }
  &__button {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
.slider__content {
    padding-bottom: 10px;
    overflow: auto;
}
.slider__content::-webkit-scrollbar {
    width: 10px;
  }
.slider__content::-webkit-scrollbar-track {
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #383535;
    border-radius: 10px;
  }
.slider__content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: linear-gradient(180deg, #7cb96b, #74ad65);
}
.mb-10 {
  margin-bottom: 10px;
}
</style>
