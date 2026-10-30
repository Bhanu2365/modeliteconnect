import { readSiteSettings } from '../hooks/useSiteSettings.js'

export function createAccessRequestMailto({ name, email, role, recipient = readSiteSettings().contactEmail }) {
  const roleLabel = role === 'model' ? 'Model access request' : 'Brand access request'
  const subject = `MODELITE Connect — ${roleLabel}`
  const body = [
    'Hello MODELITE Connect team,',
    '',
    `I would like to request ${role} account access.`,
    `Name / brand: ${name.trim() || 'Not provided'}`,
    `Email for my account: ${email.trim()}`,
    '',
    'Please let me know the next steps. Thank you.',
  ].join('\n')
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
