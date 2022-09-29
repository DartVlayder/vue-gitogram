<template>
    <div class="topLine">
        <topLine>
            <template #headLine>
                <h1>Gitogram /</h1>
                <div class="icons">
                    <iconMain class="icon" name="homeHeader" />
                    <iconMain class="icon" name="avatarOne" />
                    <iconMain class="icon" name="exitHeader" />
                </div>
            </template>
            <template #content>
                <h2>Content</h2>
            </template>
        </topLine>
    </div>
</template>

<script>
import { topLine } from '../../components/topLine'
import { iconMain } from '../../icons'

export default ({
  name: 'feedsPage',
  components: {
    topLine,
    iconMain
  }
})
</script>

<style lang="scss" src="./feedsPage.scss" scoped>
</style>
