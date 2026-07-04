const BASE_URL=import.meta.env.VITE_API_URL;

export async function createEvent(data:any){
    const res =await fetch(`${BASE_URL}/api/create-event`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

/*export async function updateCheckList(command){
    const res = await fetch(`${BASE_URL}/update-checklist`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({command}),
    });
    return res.json();
}*/