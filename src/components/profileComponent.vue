<template>
    <div class="x-container">
      <div class="titleProfile">
        <img class="profileComponent-img" src="https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png" />
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

<style lang="scss" scoped>
.titleProfile {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
}
.icon {
    margin-right: 14px;
}
.profileName {
    font-weight: 700;
    font-size: 18px;
}
.profileComponent-img{
    width: 44px;
    height: 44px;
    border-radius: 100%;
    margin-right: 20px;
}
</style>
