import { shallowMount } from '@vue/test-utils'
import Counter from '../../src/index'

describe('Counter.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Counter)
    expect(wrapper.text()).toContain('-')
    expect(wrapper.text()).toContain('+')
  })
})
