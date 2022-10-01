<template>
    <div class="c-userProfile">
        <div class="x-container">
            <div class="titleProfile">
                <iconMain class="icon" name="avatarOne" />
                <div class="profileName">joshua_l</div>
            </div>
            <div class="gitTitle">
                <slot name="gitTitle" />
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
            <div class="data">15 MAY</div>
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
