<script lang="ts">
    import type {Project} from '$lib/types'
    export let project: Project
</script>

<style>
    .hover-effect a {
        text-decoration: none;
    }

    .hover-effect:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }

    .hover-effect:hover .title {
    color: #007BFF; /* Natural blue color */
    }

</style>

<div class="hover-effect">  
    <a href="/projects/{project?.href}">
        <li class="py-2">
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="bg-cover bg-center h-56 p-4" style="background-image: url('{project?.hero.image}')">
                </div>
                <div class="p-5 h-20 text-left">
                    <span class="tracking-wide text-xl font-bold text-gray-700 title">{project?.title}</span>
                </div>
                <div class="p-4 h-36 text-left">
                    <p class="text-gray-500 text-sm">{project?.tldr}</p>
                </div>
            </div>
        </li>
    </a>
</div>
