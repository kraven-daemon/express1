<script>
  import { BarsSolid, MagnifyingGlassSolid } from 'svelte-awesome-icons'
  import Menu from './Menu.svelte'
  import SearchModal from './SearchModal.svelte'

  export let indexes = [];
  export let searchActive = false;

  let visible = false
  const toggleSearch = () => {
      visible = !visible
  }
  const menu = () => {
  }
</script>

<nav class="bg-black text-white h-16 p-2 flex justify-between">
    <button class="p-3" on:click={menu}>
        <BarsSolid/>
    </button>

    <span class="self-center font-bold">Necronominou</span>
    <button class="p-3" on:click={toggleSearch}>
        {#if searchActive}
            <MagnifyingGlassSolid class="text-green-200"/>
        {:else}
            <MagnifyingGlassSolid class="text-red-900"/>
        {/if}
    </button>
    <SearchModal bind:visible={visible} {indexes}/>
</nav>
