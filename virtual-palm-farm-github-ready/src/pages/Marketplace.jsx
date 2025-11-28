import React from "react";
import Card from "../shared/Card";

export default function Marketplace({onAddToCart}){
  const products = [
    {id:1, title:"Starter Kit", price:5000},
    {id:2, title:"4x Seeds Pack", price:1200},
    {id:3, title:"Nursery Bag", price:800}
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="font-semibold text-2xl mb-4">Marketplace</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p => (
          <Card key={p.id} title={p.title} description={`₦${p.price}`}>
            <div className="mt-3 flex gap-2">
              <button onClick={() => onAddToCart(p)} className="px-3 py-1 bg-brand text-white rounded">Add to cart</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
