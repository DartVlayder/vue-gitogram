<template>
  <button class="story-user-item" @click="$emit(onPress)">
    <div class="avatar">
      <img v-bind="$attrs" class="img" alt="avatar">
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .story-user-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .avatar {
    width: 70px;
    border: 1px solid #A6328D;
    border-radius: 100%;
    padding: 5px;
  }
  .avatar:hover {
    border: none;
  }
  .img {
    border-radius: 100%;
  }
</style>
