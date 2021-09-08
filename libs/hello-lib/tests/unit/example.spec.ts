import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils'
import { HelloCounter } from "@/components/index";

describe('HelloCounter.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloCounter)
    expect(wrapper.text()).to.contain('-')
    expect(wrapper.text()).to.contain('+')
  })
})
