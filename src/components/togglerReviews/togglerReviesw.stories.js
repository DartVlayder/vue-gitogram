import togglerReviews from './togglerReviews.vue'

export default {
  title: 'togglerReviews',
  components: { togglerReviews }
}

export const DefaultView = () => ({
  components: {
    togglerReviews
  },
  template: `
    <togglerReviews />
  `
})

DefaultView.story = {
  name: 'Стандартынй вид'
}
