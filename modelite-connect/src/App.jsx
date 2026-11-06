import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/public/HomePage.jsx'
import BrandsPage from './pages/public/BrandsPage.jsx'
import RequestAccessPage from './pages/public/RequestAccessPage.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage.jsx'
import DashboardPage from './pages/dashboard/DashboardPage.jsx'

function PublicLayout({ children }) { return <><Header />{children}<Footer /></> }
export default function App() { return <Routes>
  <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
  <Route path="/brands" element={<PublicLayout><BrandsPage /></PublicLayout>} />
  <Route path="/request-access" element={<PublicLayout><RequestAccessPage /></PublicLayout>} />
  <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
  <Route path="/forgot-password" element={<PublicLayout><ForgotPasswordPage /></PublicLayout>} />
  <Route path="/dashboard" element={<DashboardPage />} />
  <Route path="*" element={<PublicLayout><HomePage /></PublicLayout>} />
</Routes> }
