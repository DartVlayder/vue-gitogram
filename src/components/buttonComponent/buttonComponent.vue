<template>
    <button
        :class="[
        'c-button', `theme-green`,
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
  name: 'buttonComponent',
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

<style lang="scss" src="./buttonComponent.scss" scoped></style>
