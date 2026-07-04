import { useState } from "react";
import EventForm from "../components/EventForm";
import EventResult from "../components/EventResult";
import VendorList from "../components/VendorList";
//import Checklist from "../components/Checklist";
import Loader from "../components/Loader";

 export function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold  text-blue-400">EventEase</h1>
      <p className="text-gray-400  mt-2 mb-6 text-center max-w-xl">
        One Prompt. Complete Event Planning.
      </p>

      <div className="w-full max-w-2xl bg-slate-800 p-6 rounded-xl shadow-lg">
           <EventForm setData={setData} setLoading={setLoading} />
      </div>

      {loading && <Loader />}

      <EventResult data={data} />
      
      
    </div>
  );
}
