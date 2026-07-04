/*import { useState } from "react";
import { updateChecklist } from "../services/api";

export default function Checklist({ checklist }) {
  const [command, setCommand] = useState("");

  const handleUpdate = async () => {
    await updateChecklist(command);
    alert("Checklist updated!");
    setCommand("");
  };

  if (!checklist) return null;

  return (
    <div className="bg-white p-5 shadow rounded mt-5">
      <h2 className="text-xl font-bold">Checklist</h2>

      {checklist.map((item, i) => (
        <p key={i}>
          {item.task} - {item.completed ? "✅" : "❌"}
        </p>
      ))}

      <input
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="e.g. venue booked"
        className="border p-2 mt-3 w-full"
      />

      <button
        onClick={handleUpdate}
        className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
      >
        Update
      </button>
    </div>
  );
}*/