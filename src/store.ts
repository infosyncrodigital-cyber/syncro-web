import { reactive } from 'vue'

// Small shared state: which plan a visitor picked, so the contact form
// can start with a sensible first line; and the legal / cookie dialogs.
export const ui = reactive({
  plan: '' as '' | 'web' | 'software',
  legalOpen: false,
  legalTab: 'privacy' as 'privacy' | 'legal' | 'cookies',
  cookiesOpen: false,
})

export function choosePlan(plan: 'web' | 'software') {
  ui.plan = plan
}

export function openLegal(tab: 'privacy' | 'legal' | 'cookies') {
  ui.legalTab = tab
  ui.legalOpen = true
}
