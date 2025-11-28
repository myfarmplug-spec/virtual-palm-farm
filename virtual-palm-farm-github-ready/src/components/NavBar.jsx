import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { signIn, signOut } from '../services/authService';

export default function NavBar({onOpenCart}){
  const linkClass = ({isActive}) => isActive ? "text-brand font-semibold" : "text-slate-700";
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  async function handleLogin(){
    if(user){
      await signOut();
      setUser(null);
    } else {
      const u = await signIn();
      setUser(u);
    }
  }

  return (
    <nav className="bg-white shadow-sm" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button aria-label="Home" onClick={() => window.location.href = '/'} className="w-10 h-10 rounded-md bg-brand flex items-center justify-center text-white font-bold">VP</button>
          <div className="hidden md:block text-lg font-semibold">Virtual Palm Farming</div>
        </div>

        <button className="md:hidden px-2" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o=>!o)}>Menu</button>

        <div className="hidden md:flex items-center gap-6" role="menu">
          <NavLink to="/" className={linkClass}>Explore</NavLink>
          <NavLink to="/virtual-farm" className={linkClass}>Virtual Farm</NavLink>
          <NavLink to="/learning" className={linkClass}>Learn</NavLink>
          <NavLink to="/marketplace" className={linkClass}>Marketplace</NavLink>
          <NavLink to="/community" className={linkClass}>Community</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onOpenCart} className="text-slate-700" aria-label="Open cart">Cart</button>
          <NavLink to="/profile" className="text-slate-700">Profile</NavLink>
          <button onClick={handleLogin} className="bg-brand text-white px-3 py-1 rounded-md text-sm">{user ? 'Logout' : 'Login'}</button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2">
            <NavLink to="/" className={linkClass}>Explore</NavLink>
            <NavLink to="/virtual-farm" className={linkClass}>Virtual Farm</NavLink>
            <NavLink to="/learning" className={linkClass}>Learn</NavLink>
            <NavLink to="/marketplace" className={linkClass}>Marketplace</NavLink>
            <NavLink to="/community" className={linkClass}>Community</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
