<script>
    export let visible = false;
    export let indexes;
    export let selected = -1;

    let matches = [];
    let searchStr = "";

    const research = () => {
        if(indexes.length > 1){
            results()
        }
        else{
            matches = []
        }
    }
    const results = () =>{
        console.log(indexes)
        const rez = indexes.filter((o) => {
            const fullname = `${o.prenom} ${o.nom}`;
            if(fullname.match(searchStr)){
                return o
            }
        })
        matches = rez.length > 7 ? rez.slice(0, 8) : rez.slice(0, rez.length)
    }
    const select = (id) => {
        selected = id
        visible = false
    }
</script>

{#if visible}
<div class="absolute top-1/2 left-1/4 bg-blue-600 p-5">
    <input class="text-black" placeholder="Rechercher" bind:value={searchStr} on:keydown={research}>
    <button on:click={results}>[X]</button>
    <ul>
        {#each matches as match}
            <li class="hover:bg-green-400 p-2" on:click={()=> select(match._id)}>{match.prenom} {match.nom}</li>
        {/each}
    </ul>
</div>
{/if}


