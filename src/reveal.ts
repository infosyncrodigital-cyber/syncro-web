import type { Directive } from 'vue'

// Adds .is-in once an element enters the viewport. Elements are only
// hidden while html.js is set, so the content never depends on this.
let io: IntersectionObserver | null = null

function observer() {
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io!.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
  }
  return io
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  getSSRProps(binding) {
    return { 'data-reveal': '', style: binding.value ? `--i:${binding.value}` : undefined }
  },
  mounted(el, binding) {
    el.setAttribute('data-reveal', '')
    if (binding.value) el.style.setProperty('--i', String(binding.value))
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in')
      return
    }
    observer().observe(el)
  },
}
