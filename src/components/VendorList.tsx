export default function VendorList({vendors}){
    if(!vendors) return null;

    return(
        <div className="grid md:grid-cols-2 gap-4 mt-6">
            
            {Object.keys(vendors).map((category)=>(
                <div key={category} className="bg-slate-800 p-4 rounded-xl shadow border border-slate-700">

                    <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        {category}
                    </h3>

                    {vendors[category].map((v, i)=>(
                        <div key={i} className="bg-slate-700  p-2 rounded mb-2">
                            <p className="font-medium">{v.name}</p>
                            <p className="text-sm text-gray-400">{v.address}</p>
                            
                        </div>
                        
                    ))}
        </div>
    ))}
    </div>
    );
}