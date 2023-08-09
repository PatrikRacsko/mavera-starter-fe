import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Switcher from './MaveraSwitcher.vue'

describe('MaveraSwitcher', () => {
  it('renders the switch in the off state by default', () => {
    const wrapper = mount(Switcher)
    expect(wrapper.find('.material-switch').classes()).not.toContain('is-on')
  })

  it('toggles the switch when clicked', async () => {
    const wrapper = mount(Switcher)
    await wrapper.find('.material-switch').trigger('click')
    expect(wrapper.find('.material-switch').classes()).toContain('is-on')
    await wrapper.find('.material-switch').trigger('click')
    expect(wrapper.find('.material-switch').classes()).not.toContain('is-on')
  })

  it('does not toggle when disabled', async () => {
    const wrapper = mount(Switcher, {
      props: { disabled: true }
    })
    await wrapper.find('.material-switch').trigger('click')
    expect(wrapper.find('.material-switch').classes()).not.toContain('is-on')
  })
})
