<script>
/** @type {import('./$types').PageData} */
export let data;
import MemberInfo from '$lib/MemberInfo.svelte';  

import JellyContainer from '$lib/Layout/JellyContainer.svelte';
import TextHero from '$lib/Layout/Hero/TextHero.svelte';

import _ from 'lodash'
// console.log('members', _.groupBy(sorted, 'status')) 

$: past = data?.members.filter(({isAlum})=>isAlum)
$: curr = data?.members.filter(({isAlum})=>!isAlum)
$: groups = _.groupBy(curr, 'status')

import Hero from '$lib/Layout/Hero/Hero.svelte';
const useStickyTextHero = false;
const stickyClasses = 'sticky top-0 bg-base-100 z-[100] pb-8'


import { onMount } from 'svelte'
import { fly, fade } from 'svelte/transition';

let animate = false
onMount(() => {
    animate = true
})

const adjustGroup = (group) => {
    switch (group) {
        case 'PI':
            return 'Principal Investigator'
            break;
        case 'postdoc':
            return 'Postdoctoral Fellows'
            break;
    }
}

const groupOrder = [
    'PI', 
    'postdoc', 
]

</script>

<Hero></Hero>

<JellyContainer>
    {#await groups}
        Loading Members...
    {:then results}

        <div class="my-4 py-4">
        {#each groupOrder as group, g}
        {@const members = results[group]}
            <div class="my-4 py-4">         
                <div>
                    <TextHero class="py-0 pt-0">
                        <div slot="tagline" class="py-0 pt-0">
                        {adjustGroup(group)}
                        </div>
                    </TextHero>
                    
                    <div class="flex flex-col items-center justify-center w-full">
                        <ol class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {#each members as member}        
                            <MemberInfo {member}/> 
                            {/each}  
                        </ol>
                    </div>
                </div>
            </div>
        {/each}
        </div>
    {:catch error}
        {error.message}
    {/await}       
    
</JellyContainer>