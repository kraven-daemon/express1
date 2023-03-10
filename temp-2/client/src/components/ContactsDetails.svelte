<script>
    import ContactsField from './ContactsField.svelte';

    import { ArrowLeftSolid} from "svelte-awesome-icons";


    export let _id;
    export let prenom;
    export let nom;
    export let image;
    export let telephone;
    export let email;
    export let adresse;
    export let entreprise;

    export let selected;
    const exit = () => { selected = -1 }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            _id: _id,
            prenom: prenom,
            nom: nom,
            image: image,
            telephone: telephone,
            email: email,
            adresse: adresse,
            entreprise: entreprise
        })
    }
</script>

<form method="post" on:submit={handleSubmit}>
    <button class="p-6 mt-3 mr-3 bg-red-900 text-white absolute top-16 right-0 rounded-xl" on:click={exit}>
        <ArrowLeftSolid/>
    </button>
    <div class="h-72 p-8 flex justify-center items-center">
        <img class="h-36 rounded-full ring-4 ring-red-900" src={image} alt="The face of a cat">
    </div>

    <ContactsField name={"prenom"} label={"Prénom"} value={prenom}/>
    <ContactsField name={"nom"} label={"Nom"} value={nom}/>
    <ContactsField name={"telephone"} label={"Téléphone"} value={telephone}/>
    <ContactsField name={"email"} label={"Email"} value={email}/>
    <ContactsField name={"adresse"} label={"Adresse"} value={adresse}/>
    <ContactsField name={"entreprise"} label={"Entreprise"} value={entreprise}/>

    <button type="submit" class="bg-green-700 text-white p-2 rounded">Sauvegarder</button>
    <button class="bg-red-700 text-white p-2 rounded">Effacer</button>
</form>
