<template>
    <button class="c-story-user-item" @click="$emit('onPress')">
        <div :class="['avatar', {'bordered' : active}]">
            <img class="img" v-bind="$attrs" />
        </div>
        <div class="username">{{ username }}</div>
    </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    active: Boolean
  }
}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped>
</style>
