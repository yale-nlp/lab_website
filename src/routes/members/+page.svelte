<script>
/** @type {import('./$types').PageData} */
export let data;
import MemberInfo from '$lib/MemberInfo.svelte';  

import JellyContainer from '$lib/Layout/JellyContainer.svelte';

import _ from 'lodash'
// console.log('members', _.groupBy(sorted, 'status')) 

$: past = data?.members.filter(({isAlum})=>isAlum)
$: curr = data?.members.filter(({isAlum})=>!isAlum)
$: groups = _.groupBy(curr, 'status')

import Hero from '$lib/Layout/Hero/Hero.svelte';


import { onMount } from 'svelte'

let animate = false
onMount(() => {
    animate = true
})


const groupOrder = [
    'PI', 
    'phd', 
    'visit_phd',
    'master',
]

</script>

<Hero></Hero>

<JellyContainer class="pt-16">
    {#await groups}
        Loading Members...
    {:then results}

    <div class="w-full">
        <div class="text-center font-bold text-4xl">
            People
        </div>
        <br>
        <ol class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {#each groupOrder as group, g}
        {@const members = results[group]}
                    

        {#each members as member}        
        <MemberInfo {member}/> 
        {/each}  
        {/each}
    </ol>
    </div>
    {:catch error}
        {error.message}
    {/await}       
    
</JellyContainer>