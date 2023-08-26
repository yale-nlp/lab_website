<script lang="ts">
    /** @type {import('./$types').PageData} */
    import type {ProjectData} from './+page'
    export let data: ProjectData;

    import { goto } from '$app/navigation';

    import type { Project } from '$lib/types';
    import { Project as ProjectClass } from '$lib/classes';
    import ProjectInfo from '$lib/Projects/ProjectInfo.svelte';    
    import Hero from '$lib/Layout/Hero/Hero.svelte'
    import SelectedPublicationsByProject from '$lib/Publications/SelectedPublicationsByProject.svelte';
</script>

<Hero>
</Hero>

<div class="flex flex-col place-items-center mt-8 mx-16">
    <ProjectInfo  useProjectHero="{false}" project={data?.project}/>
    <SelectedPublicationsByProject publications={data?.selectedPublications} />
</div>
