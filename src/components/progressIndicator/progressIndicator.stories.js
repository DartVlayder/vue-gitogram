import progressIndicator from './progressIndicator.vue'

export default {
  title: 'progressIndicator',
  component: progressIndicator,
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'Запускается при полном прогрессе'
    }
  }
}

const template = (args) => ({
  components: {
    progressIndicator
  },
  data () {
    return { args }
  },
  template: '<progressIndicator @onFinish="args.onFinish" />'
})

template.story = {
  name: 'Стандартынй вид'
}

export const Default = template.bind({})
