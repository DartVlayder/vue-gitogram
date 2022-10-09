import buttonComponent from './buttonComponent.vue'

export default {
  title: 'buttonComponent',
  components: { buttonComponent },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

export const DefaultView = (args) => ({
  components: {
    buttonComponent
  },
  data () {
    return { args }
  },
  template: `
    <buttonComponent v-bind="args">Following</buttonComponent>
  `
})

DefaultView.args = {
  hoverText: 'Unfollow'
}

DefaultView.story = {
  name: 'Стандартынй вид'
}
