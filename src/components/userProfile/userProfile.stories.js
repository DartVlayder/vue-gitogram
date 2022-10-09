import userProfile from './userProfile.vue'

export default {
  title: 'userProfile',
  components: { userProfile }
}

export const DefaultView = () => ({
  components: {
    userProfile
  },
  template: `
    <userProfile 
    />
  `
})

DefaultView.story = {
  name: 'Стандартынй вид'
}
