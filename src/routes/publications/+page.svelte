<script lang="ts">
/** @type {import('./$types').PageData} */

import type {Publications} from '$lib/types'
interface data {
    selectedPublications: Publications
}

export let data:data;

import Hero from '$lib/Layout/Hero/Hero.svelte';
import JellyContainer from '$lib/Layout/JellyContainer.svelte';
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
        <SelectedPublicationsByYear publications={data?.selectedPublications} />
    </div>    
</JellyContainer>