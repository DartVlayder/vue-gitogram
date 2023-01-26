<template>
  <div class="top-container">
    <div class="headline">
      <slot name="headline" />
    </div>
    <div class="content" v-if="$slots.content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.top-container {
  margin-bottom: 25px;
}
.content {
    padding-bottom: 10px;
    overflow: auto;
}
.content::-webkit-scrollbar {
    width: 10px;
  }
.content::-webkit-scrollbar-track {
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 10px;
  }
.content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: linear-gradient(180deg, #7cb96b, #74ad65);
}
</style>
