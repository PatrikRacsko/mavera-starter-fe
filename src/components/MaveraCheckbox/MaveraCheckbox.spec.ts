import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MaveraCheckbox from './MaveraCheckbox.vue'

describe('MaveraCheckbox', () => {
  it('renders the checkbox correctly', () => {
    const wrapper = shallowMount(MaveraCheckbox)
    expect(wrapper.find('.material-checkbox-label').exists()).toBe(true)
  })

  it('changes appearance when disabled', async () => {
    const wrapper = shallowMount(MaveraCheckbox, {
      props: {
        disabled: true
      }
    })
    const input = wrapper.find('.hidden-checkbox')

    expect(input.attributes().disabled).toBe('')
  })
})
