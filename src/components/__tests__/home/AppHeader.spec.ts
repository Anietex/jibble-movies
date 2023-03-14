import { describe, it, expect, vi, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import AppHeader from '../../home/AppHeader.vue'

describe('AppHeader', () => {

  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('renders properly', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.text()).toContain('Jibble Movies')
  })


  it("should emit search event", () => {
    const wrapper = mount(AppHeader)
    const searchInput = wrapper.find('input');
    searchInput.setValue('movie name');
    vi.advanceTimersByTime(500)
    expect(wrapper.emitted('on-search')).toBeTruthy();
    expect( wrapper.emitted('on-search')[0][0]).toBe('movie name');
  })
})
