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
                  <img class="img-wrapper" src="https://avatars.mds.yandex.net/i?id=27b22dd95d41513f82216d4f72088e9224122f95-7664914-images-thumbs&n=13" alt="№">
                </a>
                <icon-main class="icon icon-exit" name="exitIcon"></icon-main>
              </div>
          </div>
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories-item" v-for="item in items" :key="item.id">
              <story-user-item
                v-bind="getFeedData(item)"
              />
            </li>
          </ul>
        </template>
      </top-line>
    </div>
    <div class="profiles">
      <ul class="profiles__list">
        <li class="profiles__item" v-for="item in items" :key="item.id">
          <user-profile v-bind="getFeedData(item)">
            <template #contentUser >
              <div class="gitTitle">
                <div class="subTitle">{{item.full_name}}</div>
                <div class="description">
                    {{item.description}}
                </div>
                <statisticProfile v-bind="getFeedData(item)"></statisticProfile>
              </div>
            </template>
          </user-profile>
        </li>
      </ul>
    </div>
  </div>
  <pre>{{ items }}</pre>
</template>

<script>
import * as api from '../../api'
import TopLine from '@/components/TopLine.vue'
import storyUserItem from '@/components/storyUserItem.vue'
import iconMain from '@/icons/iconMain'
import stories from './feeds.json'
import userProfile from '@/components/userProfile.vue'
import statisticProfile from '../../components/statisticProfile.vue'
export default {
  props: {
    title: String,
    username: String,
    description: String
  },
  components: {
    TopLine, iconMain, storyUserItem, userProfile, statisticProfile
  },
  data () {
    return {
      items: [],
      stories
    }
  },
  methods: {
    getFeedData (item) {
      return {
        username: item.owner.login,
        src: item.owner.avatar_url,
        full_name: item.full_name,
        description: item.description,
        star: item.stargazers_count,
        forks: item.forks_count,
        data: item.created_at
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()

      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./AppFeeds.scss" scoped>
</style>
