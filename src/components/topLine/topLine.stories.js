import topLine from './topLine.vue'

export default {
  title: 'topLine',
  components: { topLine }
}

export const DefaultView = () => ({
  components: {
    topLine
  },
  template: `
    <topLine />
  `
})

DefaultView.story = {
  name: 'Стандартынй вид'
}
