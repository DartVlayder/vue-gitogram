<template>
    <button :class="['button', {'active': isOpened }]" @click="toggle">
        <span class="text">{{isOpened ? "Hide" : "Show"}} issues</span>
        <span class="icon-toggler">
            <iconMain name="togglerReviews" />
        </span>
    </button>
</template>

<script>
import { iconMain } from '../../icons'

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

<style lang="scss" src="./togglerReviews.scss" scoped></style>
