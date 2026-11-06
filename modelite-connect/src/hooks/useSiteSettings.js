import { useEffect, useState } from 'react'

const STORAGE_KEY = 'modeliteSiteSettings'
const DEFAULTS = {
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'hello@modeliteconnect.com',
  instagramHandle: '@modeliteconnect',
}

export function readSiteSettings() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } }
  catch { return DEFAULTS }
}

export function saveSiteSettings(next) {
  const settings = { ...readSiteSettings(), ...next }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  window.dispatchEvent(new Event('modelite-site-settings'))
  return settings
}

export default function useSiteSettings() {
  const [settings, setSettings] = useState(readSiteSettings)
  useEffect(() => {
    const update = () => setSettings(readSiteSettings())
    window.addEventListener('modelite-site-settings', update)
    window.addEventListener('storage', update)
    return () => {
      window.removeEventListener('modelite-site-settings', update)
      window.removeEventListener('storage', update)
    }
  }, [])
  return settings
}
