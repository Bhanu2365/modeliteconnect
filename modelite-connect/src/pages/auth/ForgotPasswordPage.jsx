import { ArrowLeft, ArrowUpRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import useSiteSettings from '../../hooks/useSiteSettings.js'
import './auth.css'
import './forgot.css'
export default function ForgotPasswordPage(){const settings=useSiteSettings();return <main className="forgot-page"><Link to="/login" className="back-link"><ArrowLeft size={15}/> Back to sign in</Link><span className="forgot-icon"><Mail size={21}/></span><div className="section-kicker">Account support</div><h1>Let’s get you<br/><em>back in.</em></h1><p>If you can’t access your account, email the MODELITE team. They’ll help you securely reset your password.</p><a className="button button-dark" href={`mailto:${settings.contactEmail}?subject=${encodeURIComponent('MODELITE Connect account access help')}`}>Email the MODELITE team <ArrowUpRight size={16}/></a><small>For your privacy, we can’t confirm whether an email address belongs to an account.</small></main>}
