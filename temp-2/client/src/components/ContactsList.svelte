<script>
    export let contacts = [];
    export let selected = -1;


    const select = (id) => {
        selected = id
    };
</script>

<ul class="">
	{#each contacts as { _id, nom, prenom, image }}
		<li class="m-2 h-16 flex justify-between bg-black text-white p-3 cursor-pointer" on:click={() => select(_id)}>
            <img class="h-full border-2 border-red-1 rounded-full" src={image} alt="The face of a cat">
            <span class="w-full text-center self-center">
                {prenom}
                {nom}
            </span>
		</li>
	{/each}
</ul>
