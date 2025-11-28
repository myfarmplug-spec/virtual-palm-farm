import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Experience Palm Farming — Anywhere</h1>
          <p className="mt-4 text-slate-700">Learn to plant, nurture and harvest virtually, join webinars and purchase starter kits.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/virtual-farm" className="px-4 py-2 bg-brand text-white rounded-md button-focus" aria-label="Try demo">Try demo</Link>
            <Link to="/learning" className="px-4 py-2 border rounded-md button-focus" aria-label="Open learning">Learn</Link>
          </div>
        </div>

        <div className="space-y-3">
          <Card title="Virtual Tour" description="Walk through a simulated palm farm" />
          <Card title="Start a Kit" description="Purchase starter kits and tools" />
          <Card title="Join Webinars" description="Learn from professionals" />
        </div>
      </section>
    </div>
  )
}
