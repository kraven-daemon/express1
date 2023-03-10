<script>
    import { UserPenSolid } from 'svelte-awesome-icons'

    export let name;
    export let value;
    export let label;

    let editable = false;

    const toggleEdit = () => {
        editable = !editable;
    }

</script>
{#if !editable}
<div class="flex bg-neutral-800 pt-3 px-2">
    <div class="flex flex-col basis-3/4 mr-2">
        <label class="p-3 bg-red-900 text-white font-bold text-center" for={name}>{label}</label>
        <input class="p-3 bg-emerald-900 text-white font-bold text-center" type="text" value={value} name={name} id={name} disabled/>
    </div>
    <button class="text-white border-2 flex basis-1/4" on:click={toggleEdit}>
        <UserPenSolid class="w-full h-full p-6"/>
    </button>
</div>
{:else if editable}
<div class="flex bg-neutral-800 pt-3 px-2">
    <div class="flex flex-col basis-3/4 mr-2">
        <label class="p-3 bg-red-900 text-white font-bold text-center" for={name}>{label}</label>
        <input class="p-3 bg-emerald-900 text-white font-bold text-center enabled:ring-2 ring-yellow-400 outline-none" type="text" value={value} name={name} id={name} autofocus/>
    </div>
    <button class="text-red-900 border-2 flex basis-1/4" on:click={toggleEdit}>
        <UserPenSolid class="w-full h-full p-6"/>
    </button>
</div>
{/if}
