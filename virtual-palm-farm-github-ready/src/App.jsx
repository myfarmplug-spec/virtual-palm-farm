import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import VirtualFarm from "./pages/VirtualFarm";
import Learning from "./pages/Learning";
import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import CartDrawer from './components/CartDrawer';

export default function App(){
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item){
    setCartItems(prev => [...prev, item]);
    setCartOpen(true);
  }

  function handleRemove(id){
    setCartItems(prev => prev.filter(i => i.id !== id));
  }

  return (
    <div className="min-h-screen">
      <NavBar onOpenCart={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cartItems={cartItems} onRemove={handleRemove} />
      <main id="main" className="p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/virtual-farm" element={<VirtualFarm />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/marketplace" element={<Marketplace onAddToCart={handleAddToCart} />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}
