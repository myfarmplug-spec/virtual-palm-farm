import React from "react";

export default function Card({title, description, image, children}){
  return (
    <article className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow focus-within:shadow-md">
      {image ? <img src={image} alt="" className="w-full h-40 object-cover rounded mb-3" /> : null}
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 mt-2">{description}</p>
      {children}
    </article>
  )
}
