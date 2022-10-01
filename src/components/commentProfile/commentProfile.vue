<template>
    <div class="c-commentProfile">
        <p>
            <span class="username">{{username}}</span>
            {{text}}
        </p>
    </div>
</template>

<script>
export default {
  name: 'CommentProfile',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./commentProfile.scss" scoped></style>
