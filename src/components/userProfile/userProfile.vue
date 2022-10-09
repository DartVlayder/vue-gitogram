<template>
    <div class="c-userProfile">
        <div class="x-container">
            <div class="gitTitle">
                <div class="subTitle">{{ full_name }}</div>
                <div class="description">
                    {{description}}
                </div>
                <div class="statistics-wrapper">
                    <div class="statistics grey">
                        <iconMain class="starImg" name="starProfile" />
                        <div class="starName">Star</div>
                    </div>
                    <div class="statistics white">
                        <div class="number__stars">{{star}}</div>
                    </div>
                    <div class="statistics grey">
                        <iconMain class="starImg" name="forkFile" />
                        <div class="starName">Fork</div>
                    </div>
                    <div class="statistics white">
                        <div class="number__stars">{{forks}}</div>
                    </div>
                </div>
            </div>
            <div class="Reviews">
                <togglerReviews @onToggle="toggle" />
                <div class="comments" v-if="shown">
                    <ul class="comments-list">
                        <li class="comments-item" v-for="n in 5" :key="n" >
                            <commentProfile text="Some text" username="John" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="data">{{data}}</div>
        </div>
    </div>
</template>

<script>
import { iconMain } from '../../icons'
import { togglerReviews } from '../togglerReviews'
import { commentProfile } from '../commentProfile'

export default {
  components: {
    iconMain,
    togglerReviews,
    commentProfile
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
    full_name: {
      type: String,
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

<style lang="scss" src="./userProfile.scss" scoped></style>
