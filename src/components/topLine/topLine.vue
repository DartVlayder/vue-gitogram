<template>
  <div class="c-topLine">
    <div class="x-container">
        <div class="headLine">
            <slot name="headLine" />
        </div>
        <div class="content" v-if="$slots.content">
            <slot name="content" />
        </div>
    </div>
  </div>
</template>

<style lang="scss" src="./topLine.scss" scoped>
</style>
