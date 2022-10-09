import cardProfile from './cardProfile.vue'

export default {
  title: 'cardProfile',
  components: { cardProfile }
}

export const DefaultView = () => ({
  components: {
    cardProfile
  },
  template: `
    <cardProfile 
    />
  `
})

DefaultView.story = {
  name: 'Стандартынй вид'
}
