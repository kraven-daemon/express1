import { writable } from "svelte/store"

async function getdata(url) {
    const res = await fetch(url);
    const data = await res.json();
    if(res.ok){
        return data
    }else{
        throw new Error("Boom");
    }
}

const log = (msg) => { console.log(msg) }

export const lib = writable({ 
    getdata,
    log
})
