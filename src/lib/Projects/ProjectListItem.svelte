<script lang="ts">
    import type {Project} from '$lib/types'
    export let project: Project
</script>

<li class="py-2">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="bg-cover bg-center h-56 p-4" style="background-image: url('{project?.hero.image}')">
    </div>
    <div class="p-4 text-center">
        <a href="/projects/{project?.href}" class="uppercase tracking-wide text-sm font-bold text-gray-700">{project?.title}</a>
    </div>
    </div>
</li>