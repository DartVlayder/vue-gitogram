<template>
    <div class="x-container">
      <div class="titleProfile">
        <img class="profileComponent-img" v-bind="$attrs" />
        <div class="profileName">{{username}}</div>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./profileComponent.scss" scoped>
</style>
