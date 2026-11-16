// Google Tag Manager is loaded only after the visitor accepts cookies.
const GTM_ID = 'GTM-WLW8653P'
const KEY = 'cookie-consent'

let loaded = false

export function loadAnalytics() {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  const w = window as unknown as { dataLayer: unknown[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(s)
}

export function readConsent(): 'accepted' | 'declined' | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'accepted' || v === 'declined' ? v : null
  } catch {
    return null
  }
}

export function saveConsent(v: 'accepted' | 'declined') {
  try {
    localStorage.setItem(KEY, v)
  } catch {
    /* private mode: the choice lasts for this visit only */
  }
  if (v === 'accepted') loadAnalytics()
}
