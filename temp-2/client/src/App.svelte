<script>
    import Navigation from './components/Navigation.svelte';
    import ContactsList from './components/ContactsList.svelte'
    import ContactsDetails from './components/ContactsDetails.svelte';
    import { lib }  from './lib.js';

    // const baseUrl = "http://192.168.0.104/contacts";
    const baseUrl = "/contacts"
    const index = "/indexes";

    const getData = $lib.getdata

    const contacts = getData(baseUrl)
    const indexes = getData(baseUrl + index)

    let selected = -1;


</script>

{#await indexes}
    <Navigation searchActive={false}/>
{:then index}
    <Navigation indexes={index} searchActive={true}/>
{:catch err}
    <p>boom : {err}</p>
{/await}


{#await contacts}
    <p>loading ...</p>
{:then contact}
    {#if selected < 0}
        <ContactsList contacts={contact} bind:selected={selected}/>
    {:else if selected >= 0}
        <ContactsDetails {...contact[selected-1]}  bind:selected={selected}/>
    {/if}
{:catch err}
    <p>boom : {err}</p>
{/await}

