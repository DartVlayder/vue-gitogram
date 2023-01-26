<template>
  <button
    :class="[
      'button', 'green-button',
      {'hover-text': withHoverText}
    ]"
    :data-hover-text="hoverText"
  >
    <span class="btn-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 11px 110px;
  color: #fff;
  border-radius: 10px;
  &:hover{
    background: #9E9E9E;
  }
}
.green-button {
  background: #31AE54;
}
.hoverText {
  background: #9E9E9E;
}
</style>
