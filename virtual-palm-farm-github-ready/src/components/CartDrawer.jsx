import React from 'react';

export default function CartDrawer({open, onClose, cartItems, onRemove}){
  return (
    <div className={`${open ? 'fixed' : 'hidden'} inset-0 z-50 flex`}>
      <div className="flex-1" onClick={onClose} />
      <aside className="w-96 bg-white shadow-xl p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Cart</h3>
          <button onClick={onClose} className="text-slate-500">Close</button>
        </div>
        <div className="mt-4 space-y-3">
          {cartItems.length === 0 ? <div className="text-sm text-slate-500">Your cart is empty</div> : null}
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-slate-50 p-3 rounded">
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-slate-600">₦{item.price}</div>
              </div>
              <div>
                <button onClick={() => onRemove(item.id)} className="text-red-500 text-sm">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button className="w-full bg-brand text-white py-2 rounded">Checkout (mock)</button>
        </div>
      </aside>
    </div>
  )
}
