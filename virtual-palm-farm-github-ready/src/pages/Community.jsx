import React from "react";
import Card from "../shared/Card";

const posts = [
  {id:1, user:"Amina", text:"Planted my first palms today!"},
  {id:2, user:"Chidi", text:"Looking for tips on soil prep."}
];

export default function Community(){
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="font-semibold text-2xl mb-4">Community Feed</h2>
      <div className="space-y-3">
        {posts.map(p => (
          <Card key={p.id} title={p.user} description={p.text} />
        ))}
      </div>
    </div>
  )
}
