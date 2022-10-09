<template>
    <div class="c-userProfile">
        <div class="x-container">
            <profileComponent username="joshua_l"></profileComponent>
            <div class="gitTitle">
                <div class="subTitle">Vue.js</div>
                <div class="description">
                    <span>JavaScript</span> framework for building interactive web applications ⚡
                </div>
                <div class="statistics-wrapper">
                    <div class="statistics grey">
                        <iconMain class="starImg" name="starProfile" />
                        <div class="starName">Star</div>
                    </div>
                    <div class="statistics white">
                        <div class="number__stars">156k</div>
                    </div>
                    <div class="statistics grey">
                        <iconMain class="starImg" name="forkFile" />
                        <div class="starName">Fork</div>
                    </div>
                    <div class="statistics white">
                        <div class="number__stars">4</div>
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
            <div class="data">15 MAY</div>
        </div>
    </div>
</template>

<script>
import { profileComponent } from '../profileComponent'
import { iconMain } from '../../icons'
import { togglerReviews } from '../togglerReviews'
import { commentProfile } from '../commentProfile'

export default {
  components: {
    iconMain,
    togglerReviews,
    commentProfile,
    profileComponent
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
