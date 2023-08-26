<script lang="ts">
    import type {
        Project as ProjectInterface
    } from '$lib/types'
    
    export let project: ProjectInterface
    export let useProjectHero = true
    export let contentWidthClasses = ''
    
</script>

<style>
    .hero-image {
        width: 50%; 
        display: block;
        margin: 0 auto; /* This centers the image if it's inline-block or block */
    }
</style>

<div class="">
    <div class="flex justify-center  mx-4">
        <div class="max-w-full my-4 md:w-[48rem] lg:w-[64rem] {contentWidthClasses}"> 
            <div class="text-center font-bold text-4xl">
                {project?.title}
            </div>  

            <br>
            {#if project?.hero?.image}
                <img src={project?.hero?.image} alt="Project Hero" class="my-4 hero-image">
            {/if}
            <br>

            <div class="inline-block text-slate-700 text-xl">
                {project?.description}
            </div>
        </div>        
    </div>    
</div>   
    