<template>
  <div class="icon">
    <component :is="name" />
  </div>
</template>
<script>
import * as icons from './variants'
export default {
  components: {
    ...icons
  },
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return Object.keys(icons).includes(value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .icon {
    width: 25px;
    color: #000
  }
</style>
