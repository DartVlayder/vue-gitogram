import feedsPage from './feedsPage.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  onAction: action('onAction')
}

export default {
  title: 'feedsPage',
  components: { feedsPage }
}

export const DefaultView = () => ({
  components: {
    feedsPage
  },
  template: `
    <feedsPage @action='onAction'
    />
  `,
  methods
})

DefaultView.story = {
  name: 'Стандартынй вид'
}
