<script lang="ts">
    import type {
        Publication as PublicationInterface,
        Publications as PublicationsInterface,
        PublicationsGroupedByYear
    } from '$lib/types';

    export let publications: PublicationsInterface;

    // Extracting all unique types
    $: types = Array.from(new Set(publications.map((pub: PublicationInterface) => pub.type)));

    let selectedType = "";

    // Initialize years directly
    let years: PublicationsGroupedByYear = {};

    $: {
        // Reset years for each change of publications or selectedType
        years = {};

        publications.forEach((pub: PublicationInterface) => {
            if (selectedType && pub.type !== selectedType) return;

            let year = String(pub?.year as number);

            if (!(year in years)) {
                years[year] = [] as PublicationsInterface;
            }

            years[year].push(pub);
        });
    }
</script>


<div class="">
    <label for="paperType">Filter by Type:</label>
    <select id="paperType" bind:value={selectedType}>
        <option value="">All</option>
        {#each types as type}
            <option value={type}>{type}</option>
        {/each}
    </select>

    {#each Object.entries(years).reverse() as [year, pubs]}
        <div>
            <div class="grid grid-flow-col auto-cols-auto py-4">
                <div class="text-4xl font-extralight col-auto">
                    <div class="sticky top-0 ">
                        {year}
                    </div>
                </div>
                <div class="ml-16 col-auto">
                    {#each pubs as pub}
                        <div class="pb-4">
                            <div class="card-title break-word">
                                {#if pub?.href}
                                    <a class="link" href={pub?.href}>
                                        {pub?.title}
                                    </a>
                                {:else}
                                    {pub?.title}
                                {/if}
                            </div>
                            <span>{@html pub.makeAuthorString()}</span>
                            <span>{@html pub.makePublicationString()}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</div>
