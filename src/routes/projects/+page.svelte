<script lang="ts">
/** @type {import('./$types').PageData} */
import type {Publications, Projects} from '$lib/types'
interface data {
    projects:Projects    
}

export let data:data;

import ProjectListItem from '$lib/Projects/ProjectListItem.svelte';
import ProjectInfo from '$lib/Projects/ProjectInfo.svelte';


import Hero from '$lib/Layout/Hero/Hero.svelte';
import JellyContainer from "$lib/Layout/JellyContainer.svelte";


</script>


<Hero></Hero>

<JellyContainer class="pt-16">   
    <div class="text-center font-bold text-4xl">
        Lab Projects
    </div>
    <br>
    <div class="flex flex-col items-center justify-center w-full">
        <ol class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each data.projects as project}
            <ProjectListItem {project} />
        {/each}  
        </ol>
    </div>

</JellyContainer>
