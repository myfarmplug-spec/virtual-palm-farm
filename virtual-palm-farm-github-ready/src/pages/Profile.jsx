import React, {useState} from "react";

export default function Profile(){
  const [compact, setCompact] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-semibold text-2xl mb-4">Profile & Dashboard</h2>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-slate-600">Toggle dashboard view</div>
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={compact} onChange={e => setCompact(e.target.checked)} />
            <span className="text-sm">Compact view</span>
          </label>
        </div>
      </div>

      <div className={`bg-white p-4 rounded shadow-sm ${compact ? 'text-sm' : ''}`}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-slate-200" />
          <div>
            <div className="font-semibold">User Name</div>
            <div className="text-sm text-slate-600">Member since 2025</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded shadow-sm">
            <div className="font-semibold">Current Plots</div>
            <div className="text-sm text-slate-600">3</div>
          </div>

          <div className="bg-white p-3 rounded shadow-sm">
            <div className="font-semibold">Certificates</div>
            <div className="text-sm text-slate-600">0</div>
          </div>

          <div className="bg-white p-3 rounded shadow-sm">
            <div className="font-semibold">Earnings</div>
            <div className="text-sm text-slate-600">₦0</div>
          </div>
        </div>
      </div>
    </div>
  )
}
