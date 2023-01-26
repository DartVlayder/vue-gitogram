<template>
  <button :class="['button', {active: isOpened}]" @click="toggle">
    <span class="text">{{ isOpened ? "Hide" : "Show" }} issues</span>
    <span class="icon-toggler">
        <icon-main name="togglerIcon" class="togl-icon"></icon-main>
    </span>
  </button>
</template>

<script>
import iconMain from '@/icons/iconMain.vue'

export default {
  components: {
    iconMain
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-toggler {
    width: 10px;
    height: 10px;
    height: 5.5px;
    transform: rotate(180deg);
}
.button {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  &.active{
    .icon-toggler{
        transform: rotate(0deg);
    }
  }
}
.text {
    margin-right: 5px;
}
.togl-icon {
  width: 10px;
  height: 10px;
}
</style>
