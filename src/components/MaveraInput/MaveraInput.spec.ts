import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MaveraInput from './MaveraInput.vue'

describe('MaveraInput', () => {
  let wrapper: any

  it('disables the input when disabled prop is true', async () => {
    wrapper = shallowMount(MaveraInput, {
      propsData: {
        disabled: true
      }
    })
    const input = wrapper.find('.material-input')
    expect(input.attributes('disabled')).equals('')
    expect(input.classes()).toContain('material-input--disabled')
  })

  it('enables the input when disabled prop is false', () => {
    wrapper = shallowMount(MaveraInput, {
      propsData: {
        disabled: false
      }
    })
    const input = wrapper.find('.material-input')
    expect(input.attributes('disabled')).toBeFalsy()
  })

  it('does not apply hover styles when input is disabled', async () => {
    wrapper = shallowMount(MaveraInput, {
      propsData: {
        disabled: true
      }
    })
    const input = wrapper.find('.material-input')
    await input.trigger('mouseenter')
    expect(input.element.style.backgroundColor).not.toBe('#f0f0f0')
  })
})
