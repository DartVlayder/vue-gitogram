import commentProfile from './commentProfile.vue'

export default {
  title: 'commentProfile.',
  components: { commentProfile }
}

export const DefaultView = () => ({
  components: {
    commentProfile
  },
  template: `
    <commentProfile
        username="John"
        text="Some text"
    />
  `
})

DefaultView.story = {
  name: 'Стандартынй вид'
}
