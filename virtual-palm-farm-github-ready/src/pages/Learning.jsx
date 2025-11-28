import React, {useState} from "react";
import Card from "../shared/Card";

const lessons = [
  {id:1, title:"Soil Basics", level:"Beginner", duration:"15m"},
  {id:2, title:"Planting Techniques", level:"Intermediate", duration:"30m"},
  {id:3, title:"Pest Management", level:"Advanced", duration:"20m"}
];

const webinars = [
  {id:1, title:"Webinar: Modern Nursery Management", date:"2025-12-03"},
  {id:2, title:"Webinar: Maximizing Yield", date:"2025-12-10"}
];

export default function Learning(){
  const [active, setActive] = useState(null);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="font-semibold text-2xl mb-4">Learning Academy</h2>

      <section className="mb-6">
        <h3 className="font-semibold mb-3">Lessons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons.map(l => (
            <Card key={l.id} title={l.title} description={`${l.level} • ${l.duration}`}>
              <div className="mt-3">
                <button onClick={() => setActive(l)} className="px-3 py-1 border rounded">Start</button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-semibold mb-3">Upcoming Webinars</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {webinars.map(w => (
            <div key={w.id} className="bg-white p-3 rounded shadow-sm flex items-center justify-between">
              <div>
                <div className="font-semibold">{w.title}</div>
                <div className="text-sm text-slate-600">{w.date}</div>
              </div>
              <div>
                <button className="px-3 py-1 border rounded">Register</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-black/50 absolute inset-0" onClick={() => setActive(null)} />
          <div className="bg-white p-6 rounded shadow-lg z-10 max-w-2xl w-full">
            <h3 className="font-semibold text-lg">{active.title}</h3>
            <p className="mt-2 text-sm text-slate-600">Lesson content placeholder. Video and quiz stubs here.</p>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setActive(null)} className="px-3 py-1 border rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
