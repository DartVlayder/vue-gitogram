<template>
    <div class="titleProfile">
        <iconMain class="icon" name="avatarOne" />
        <div class="profileName">{{username}}</div>
    </div>
</template>

<script>
import { iconMain } from '../../icons'

export default {
  components: {
    iconMain
  },
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
