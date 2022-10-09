import profileComponent from './profileComponent.vue'

export default {
  title: 'profileComponent',
  components: { profileComponent }
}

export const DefaultView = () => ({
  components: {
    profileComponent
  },
  template: `
    <profileComponent 
    username="joshua_l"
    />
  `
})

DefaultView.story = {
  name: 'Стандартынй вид'
}
