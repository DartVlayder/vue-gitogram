<template>
  <div class="container">
    <div class="topline">
      <top-line>
        <template #headline>
          <div class="headline">
              <h1>Gitogram /</h1>
              <div class="headline-right">
                <icon-main class="icon" name="homeIcon"></icon-main>
                <a href="#" class="icon">
                  <img class="img-wrapper" src="https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png" alt="№">
                </a>
                <icon-main class="icon icon-exit" name="exitIcon"></icon-main>
              </div>
          </div>
        </template>
        <template #content>
              <ul class="stories">
                <li class="stories-item" v-for="story in stories" :key="story.id">
                  <story-user-item
                    :avatar='story.avatar'
                    :username='story.username'
                    @onPress="handlePress(story.id)"
                  >
                  </story-user-item>
                </li>
              </ul>
        </template>
      </top-line>
    </div>
    <user-profile>
      <template #contentUser>
        <div class="gitTitle">
              <div class="subTitle">Заголовок</div>
              <div class="description">
                  Описание
              </div>
              <statisticProfile></statisticProfile>
            </div>
      </template>
    </user-profile>
  </div>
</template>

<script>
import TopLine from '@/components/TopLine.vue'
import storyUserItem from '@/components/storyUserItem.vue'
import iconMain from '@/icons/iconMain'
import stories from './feeds.json'
import userProfile from '@/components/userProfile.vue'
import statisticProfile from '../../components/statisticProfile.vue'
export default {
  components: {
    TopLine, iconMain, storyUserItem, userProfile, statisticProfile
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" src="./AppFeeds.scss" scoped>
</style>
