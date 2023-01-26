<template>
    <div class="userProfile">
        <div class="container">
          <profile-component
            :username=username
            v-bind="$attrs"
          >
          </profile-component>
          <slot name="contentUser"/>
            <div class="Reviews">
                <togglerItem @onToggle="toggle" />
                <div class="comments" v-if="shown">
                    <ul class="comments-list">
                        <li class="comments-item" v-for="n in 5" :key="n" >
                            <commentProfile />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="data">{{data}}</div>
    </div>
</template>

<script>
import togglerItem from './togglerItem.vue'
import commentProfile from './commemtProfile.vue'
import profileComponent from './profileComponent.vue'

export default {
  components: {
    togglerItem,
    commentProfile,
    profileComponent
  },
  props: {
    forks: {
      type: Number,
      required: true
    },
    star: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped>
.userProfile {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background: rgb(202, 197, 197);
  padding: 16px 17px;
  margin-bottom: 10px;
}
.Reviews {
  margin-bottom: 10px;
  margin-top: 10px;
}
.comments-item {
  margin-bottom: 10px;
}
.data {
  font-size: 12px;
  color: #00000066;
}
@media (max-width: 375px) {
    .statistics {
        padding: 6px 8px;
    }
}
</style>
