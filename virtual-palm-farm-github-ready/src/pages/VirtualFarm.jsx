import React, { useState, useEffect } from "react";

function Plot({plot, onAction}){
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform" role="region" aria-label={plot.name}>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{plot.name}</div>
          <div className="text-xs text-slate-500">Moisture: {plot.moisture}%</div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onAction(plot.id, "water")} className="px-2 py-1 bg-blue-500 text-white rounded text-sm button-focus">Water</button>
          <button onClick={() => onAction(plot.id, "harvest")} className="px-2 py-1 bg-green-600 text-white rounded text-sm button-focus">Harvest</button>
        </div>
      </div>
    </div>
  )
}

export default function VirtualFarm(){
  const [plots, setPlots] = useState([
    {id:1, name:"Field A", moisture: 60, stage: "growing"},
    {id:2, name:"Nursery 1", moisture: 80, stage: "seedling"},
    {id:3, name:"Field B", moisture: 45, stage: "mature"}
  ]);

  function handleAction(id, action){
    setPlots(prev => prev.map(p => {
      if(p.id !== id) return p;
      if(action==="water") return {...p, moisture: Math.min(100, p.moisture + 20)};
      if(action==="harvest") return {...p, stage: "harvested", moisture: Math.max(0, p.moisture - 30)};
      return p;
    }));
  }

  useEffect(() => {
    const t = setInterval(() => {
      setPlots(prev => prev.map(p => ({...p, moisture: Math.max(0, p.moisture - 1)})));
    }, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h2 className="font-semibold">Farm Map & Canvas</h2>
          <div className="mt-4 h-64 bg-gradient-to-b from-slate-50 to-white rounded flex items-center justify-center text-slate-400">Interactive farm canvas (placeholder)</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-live="polite">
          {plots.map(p => <Plot key={p.id} plot={p} onAction={handleAction} />)}
        </div>
      </div>

      <aside className="space-y-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Quick Stats</h3>
          <div className="mt-2 text-sm text-slate-600">Soil: Loam</div>
          <div className="text-sm text-slate-600">Expected yield: Moderate</div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Actions</h3>
          <div className="mt-2 text-sm text-slate-600">Plant, Water, Harvest</div>
        </div>
      </aside>
    </div>
  )
}
