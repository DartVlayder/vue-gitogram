<template>
    <div class="topLine">
        <topLine>
            <template #headLine>
                <h1>Gitogram /</h1>
                <div class="icons">
                    <iconMain class="icon" name="homeHeader" @click="$emit('action', 'home')"/>
                    <iconMain class="icon" name="avatarOne" @click="$emit('action', 'profile')"/>
                    <iconMain class="icon" name="exitHeader" @click="$emit('action', 'logout')"/>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="item in items" :key="item.id">
                        <!-- :avatar="story.avatar" :username="story.username"  @onPress="handlePress(story.id)" -->
                        <storyUserItem
                            v-bind="getFeedData(item)"
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
    <pre>{{items}}</pre>
</template>

<script>
import { topLine } from '../../components/topLine'
import { iconMain } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { userProfile } from '../../components/userProfile'
/* import stories from './data.json' */

import * as api from '../../api'

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
      items: []
    }
  },
  methods: {
    getFeedData (item) {
      return {
        username: item.name,
        img: item.owner.avatar_url
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
})
</script>

<style lang="scss" src="./feedsPage.scss" scoped>
</style>
