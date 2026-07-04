import { useState } from "react";
import { createEvent } from "../services/api";

type Props = {
  setData: (data: any) => void;
  setLoading: (loading: boolean) => void;
};

export default function EventForm({ setData, setLoading}:Props){
    const [form,setForm]= useState({
        name:" ",
        city:" ",
        email:" ",
        phone:" ",
        date:" ",
        time:" ",
    
    });
    const handleChange= (e)=>{
        setForm({...form, [e.target.name]:e.target.value});
    };
    const handleSubmit=async (e: React.FormEvent)=>{
        e.preventDefault();
        setLoading(true);

        const result=await createEvent(form);
        setData(result);

        setLoading(false);
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className="space-y-4">

            <div>
                <label className="block text-sm mb-1 text-gray-300">Event Name</label>
                <input
                type="text"
                placeholder="e.g. Hackathon"
                className="input"
                onChange={(e)=> setForm({...form,name:e.target.value})}
                />

            </div>

            <div>
    <label className="block text-sm mb-1 text-gray-300">City</label>
    <input
      type="text"
      placeholder="e.g. Raigarh"
      className="input"
      onChange={(e) => setForm({ ...form, city: e.target.value })}
    />
  </div>

  <div>
    <label className="block text-sm mb-1 text-gray-300">Email</label>
    <input
      type="email"
      placeholder="e.g. you@gmail.com"
      className="input"
      onChange={(e) => setForm({ ...form, email: e.target.value })}
    />
  </div>

  <div>
    <label className="block text-sm mb-1 text-gray-300">Phone</label>
    <input
      type="text"
      placeholder="+91XXXXXXXXXX"
      className="input"
      onChange={(e) => setForm({ ...form, phone: e.target.value })}
    />
  </div>

  <div className="grid grid-cols-2 gap-3">
    <div>
      <label className="block text-sm mb-1 text-gray-300">Date</label>
      <input
        type="date"
        className="input"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
    </div>

    <div>
      <label className="block text-sm mb-1 text-gray-300">Time</label>
      <input
        type="time"
        className="input"
        onChange={(e) => setForm({ ...form, time: e.target.value })}
      />
    </div>
  </div>

  <button className="btn-primary">
    Generate Event Plan
  </button>

    </form>
    )

}