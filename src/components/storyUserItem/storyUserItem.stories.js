import storyUserItem from './storyUserItem.vue'

export default {
  title: 'storyUserItem.stories',
  components: { storyUserItem }
}

export const DefaultView = () => ({
  components: {
    storyUserItem
  },
  template: `
    <storyUserItem
      username="User Name"
      src="https://www.fillmurray.com/300/300"
      alt="user picture"
    />
  `
})

DefaultView.story = {
  name: 'Стандартынй вид'
}

export const ActiveView = () => ({
  components: {
    storyUserItem
  },
  template: `
    <storyUserItem
      username="User Name"
      src="https://www.fillmurray.com/300/300"
      alt="user picture"
      active
    />
  `
})

ActiveView.story = {
  name: 'С границей у аватара'
}
