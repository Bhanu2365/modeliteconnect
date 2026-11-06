import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Bell, BriefcaseBusiness, CircleHelp, Compass, Heart, LayoutDashboard, LogOut, Menu, Settings, Users, X } from 'lucide-react'
import DashboardViews from './DashboardViews.jsx'
import useSiteSettings from '../../hooks/useSiteSettings.js'
import { brands as seedBrands, models as seedModels } from '../../data/mockData.js'
import './dashboard.css'

const navItems={brand:[['Overview',LayoutDashboard],['Discover models',Compass],['Saved profiles',Heart],['My brand',BriefcaseBusiness]],model:[['My overview',LayoutDashboard],['My profile',Users],['Availability',Compass],['Settings',Settings]],admin:[['Overview',LayoutDashboard],['Model accounts',Users],['Brand accounts',BriefcaseBusiness],['Discover models',Compass],['Saved profiles',Heart],['Settings',Settings]]}
function readUser(){try{return JSON.parse(sessionStorage.getItem('demoUser')||'{"email":"demo@modelite.com","role":"brand"}')}catch{return {email:'demo@modelite.com',role:'brand'}}}

export default function DashboardPage(){
 const [user]=useState(readUser), role=user?.role||'brand'
 const [modelAccounts,setModelAccounts]=useState(()=>seedModels.map((model,index)=>({...model,role:'Model',displayName:model.name,fullName:model.name,accountEmail:model.email,accountStatus:'Approved',id:model.id||index+1})))
 const [brandAccounts,setBrandAccounts]=useState(()=>seedBrands.map((brand,index)=>({...brand,status:'Approved',role:'Brand',accountEmail:brand.representativeEmail,accountStatus:'Approved',id:brand.id||index+1})))
 const items=navItems[role]||navItems.brand
 const [searchParams,setSearchParams]=useSearchParams()
 const defaultSection=role==='model'?'My overview':'Overview'
 const requestedSection=searchParams.get('section')
 const active=items.some(([name])=>name===requestedSection)?requestedSection:defaultSection
 const [saved,setSaved]=useState([]),[notice,setNotice]=useState(''),[menuOpen,setMenuOpen]=useState(false)
 const navigate=useNavigate()
 const siteSettings=useSiteSettings()
 function goTo(page){setSearchParams({section:page});setMenuOpen(false);setNotice('');window.scrollTo({top:0,behavior:'smooth'})}
 function notify(message){setNotice(message);window.setTimeout(()=>setNotice(''),3500)}
 function toggleSaved(id){setSaved(previous=>previous.includes(id)?previous.filter(item=>item!==id):[...previous,id])}
 function logout(){sessionStorage.removeItem('demoUser');navigate('/')}
 return <div className="dash-shell">
  {menuOpen&&<button className="sidebar-scrim" aria-label="Close menu" onClick={()=>setMenuOpen(false)}/>}
  <aside className={menuOpen?'dash-sidebar mobile-open':'dash-sidebar'}><Link to="/" className="wordmark" onClick={()=>setMenuOpen(false)}>MODELITE<span>CONNECT</span></Link><div className="workspace-label">WORKSPACE</div><div className="role-badge"><span className="avatar-initial">{role==='admin'?'M':role==='model'?'A':'S'}</span><div><strong>{role==='admin'?'MODELITE team':role==='model'?'Ananya Mehta':'Studio AUREL'}</strong><small>{role==='admin'?'Administrator':role==='model'?'Model account':'Brand account'}</small></div></div><nav className="side-nav" aria-label="Dashboard sections">{items.map(([name,Icon])=><button type="button" className={active===name?'selected':''} aria-current={active===name?'page':undefined} onClick={()=>goTo(name)} key={name}><Icon size={17}/>{name}{name==='Saved profiles'&&saved.length>0&&<i>{saved.length}</i>}</button>)}</nav><div className="sidebar-bottom"><div className="help-card"><CircleHelp size={17}/><strong>Need a hand?</strong><span>We’re here if you need us.</span><a href={`mailto:${siteSettings.contactEmail}`}>Contact the team <ArrowUpRight size={13}/></a></div><button className="side-logout" onClick={logout}><LogOut size={16}/>Sign out</button><Link className="side-back" to="/" onClick={()=>setMenuOpen(false)}><ArrowLeft size={14}/> Return to public site</Link></div></aside>
  <main className="dash-main"><header className="dash-topbar"><button className="mobile-menu" aria-label="Open dashboard menu" aria-expanded={menuOpen} onClick={()=>setMenuOpen(true)}><Menu size={18}/></button><div className="crumb">Workspace <span>/</span> <strong>{active}</strong></div><div className="top-actions"><span className="preview-tag">DEMO PREVIEW</span><button className="icon-action" aria-label="Notifications" onClick={()=>notify('You’re all caught up.')}><Bell size={18}/><i/></button><span className="user-pill" aria-label={`${role} demo user`}>{role==='admin'?'M':role==='model'?'A':'S'}</span></div></header>
   <div className="dash-content">{notice&&<div className="toast" role="status"><Check size={15}/>{notice}<button onClick={()=>setNotice('')} aria-label="Dismiss notification"><X size={14}/></button></div>}<DashboardViews role={role} active={active} saved={saved} toggleSaved={toggleSaved} notify={notify} goTo={goTo} modelAccounts={modelAccounts} setModelAccounts={setModelAccounts} brandAccounts={brandAccounts} setBrandAccounts={setBrandAccounts}/></div>
  </main>
 </div>
}
