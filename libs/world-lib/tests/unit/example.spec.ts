import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { WorldCounter } from '@/index'


describe('WorldCounter.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(WorldCounter)
    expect(wrapper.text()).to.include('-')
    expect(wrapper.text()).to.include('+')
  })
})
