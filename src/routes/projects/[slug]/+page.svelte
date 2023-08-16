<script lang="ts">
    /** @type {import('./$types').PageData} */
    import type {ProjectData} from './+page'
    export let data: ProjectData;
    import { goto } from '$app/navigation';

    import type { Project } from '$lib/types';
    import { Project as ProjectClass } from '$lib/classes';
    import ProjectInfo from '$lib/Projects/ProjectInfo.svelte';    
    import Hero from '$lib/Layout/Hero/Hero.svelte'
    const handleProjectTitle = (project: Project) => {
        const heroTitle = project.hero.title
        return heroTitle
    }

    interface Route {
        title:string;
        href?:string;
        abbreviation?:string;
    }
    const routeTitle = (project: Route) => {
        return project.abbreviation ? project.abbreviation : project.title
    }

    $: heroTitle = handleProjectTitle(data?.project)
    $: backgroundImage = String(data?.project.hero.image)
    $: subtitle = String(data?.project?.hero.blurb)
</script>


<Hero {backgroundImage} {subtitle}>
    {heroTitle}
</Hero>

<div class="flex flex-col md:flex-row justify-center mt-8 mx-16">

    <div class="lg:ml-16">  
        <ProjectInfo  
            useProjectHero="{false}" 
            project={data?.project}                     
        />
    </div>
</div>

