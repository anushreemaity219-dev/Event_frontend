import VendorList from "./VendorList";

export default function EventResult({data}){
    if(!data) return null;

    return(
        <div className="mt-8 w-full max-w-4xl space-y-6">
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">

                <h2 className="text-xl font-semibold  text-blue-400 mb-3">
                    Event Plan
                </h2>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {data.eventPlan}
                </p>
        </div>
        <VendorList vendors={data.vendors}/>
        </div>
    );
}