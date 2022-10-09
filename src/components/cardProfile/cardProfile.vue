<template>
    <div class="cardProfile">
        <div class="cardProfile-header">
            <div class="progressIndicator">
                <progressIndicator></progressIndicator>
            </div>
            <div class="profileComponent">
                <profileComponent username="react  reposit"></profileComponent>
            </div>
        </div>
        <div class="cardProfile-contentWrapper">
            <img class="cardProfile-img" src="https://www.fillmurray.com/300/200" alt="img">
            <div class="cardProfile-content" name="cardProfile-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatibus, explicabo nostrum rerum ea libero soluta odit dolores sunt adipisci reprehenderit, itaque inventore quia assumenda unde tenetur odio alias autem.</div>
        </div>
        <div class="buttonComponent">
            <buttonComponent>Following</buttonComponent>
        </div>
    </div>
</template>

<script>
import { progressIndicator } from '../progressIndicator'
import { profileComponent } from '../profileComponent'
import { buttonComponent } from '../buttonComponent'

export default ({
  name: 'cardProfile',
  components: {
    progressIndicator,
    profileComponent,
    buttonComponent
  }
}
)
</script>

<style lang="scss" src="./cardProfile.scss" scoped></style>
