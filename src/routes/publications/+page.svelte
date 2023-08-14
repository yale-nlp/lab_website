<script lang="ts">
/** @type {import('./$types').PageData} */

import type {Publications} from '$lib/types'
interface data {
    selectedPublications: Publications
}

export let data:data;

import Hero from '$lib/Layout/Hero/Hero.svelte';
import JellyContainer from '$lib/Layout/JellyContainer.svelte';
import PublicationCategories from '$lib/Publications/PublicationCategories.svelte';
import SelectedPublicationsAsCards from '$lib/Publications/SelectedPublicationsAsCards.svelte';
import SelectedPublicationsByYear from '$lib/Publications/SelectedPublicationsByYear.svelte';
// import D3Graph from '$lib/D3Graph.svelte';
import { onMount } from 'svelte'
import { fly, fade } from 'svelte/transition';

let animate = false
onMount(() => {
    animate = true
})

</script>

<Hero></Hero>


<JellyContainer>
    <div class="flex flex-col place-items-center gap-8 mt-8">
        
        <!-- <PublicationCategories categories={data?.publicationCategories}/> -->
        <!-- <div class="divider divider-vertical"></div> -->  
        <div 
            class="text-5xl font-light text-center"
        >
            Selected Publications
        </div>

        <!-- <div class="w-full"><D3Graph graph={data?.selectedGraph}/></div> -->
        <!-- <SelectedPublicationsByYear publications={data?.selectedPublications} />   -->
        <SelectedPublicationsByYear publications={data?.selectedPublications} />        

    </div>    
</JellyContainer>