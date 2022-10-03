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
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <storyUserItem
                            :avatar="story.avatar"
                            :username="story.username"
                            @onPress="handlePress(story.id)"
                        />
                    </li>
                </ul>
            </template>
        </topLine>
    </div>
    <div class="userProfile">
        <userProfile>
            <template #gitTitle></template>
        </userProfile>
    </div>
    <div class="userProfile">
        <userProfile>
            <template #gitTitle>
            </template>
        </userProfile>
    </div>
</template>

<script>
import { topLine } from '../../components/topLine'
import { iconMain } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { userProfile } from '../../components/userProfile'
import stories from './data.json'

export default ({
  name: 'feedsPage',
  components: {
    topLine,
    iconMain,
    storyUserItem,
    userProfile
  },
  data () {
    return {
      stories
    }
  }
})
</script>

<style lang="scss" src="./feedsPage.scss" scoped>
</style>
