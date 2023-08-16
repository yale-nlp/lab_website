<script lang="ts">
    import type {
        Publication as PublicationInterface,
        Publications as PublicationsInterface,
        PublicationsGroupedByYear
    } from '$lib/types';

    export let publications: PublicationsInterface;

    // Extracting all unique types
    $: types = Array.from(new Set(publications.map((pub: PublicationInterface) => pub.project)));

    let selectedType = "";

    // Initialize years directly
    let years: PublicationsGroupedByYear = {};

    $: {
        // Reset years for each change of publications or selectedType
        years = {};

        publications.forEach((pub: PublicationInterface) => {
            if (selectedType && pub.project !== selectedType) return;

            let year = String(pub?.year as number);

            if (!(year in years)) {
                years[year] = [] as PublicationsInterface;
            }

            years[year].push(pub);
        });

        // Sort publications for each year based on the venue, and make Arxiv the last
        for (const year in years) {
            years[year].sort((a, b) => {
                if (a?.venue.includes("ArXiv")) return 1;
                if (b?.venue.includes("ArXiv")) return -1;
                return a?.venue.localeCompare(b?.venue);
            });
        }
    }
</script>



<style>
    .pub-title a {
        color: #007BFF;
        text-decoration: none; /* If you don't want underlined links */
        font-weight: bold; /* This makes the title bold */
    }

    .pub-title a:hover {
        text-decoration: underline; /* Underline on hover for better UX */
    }

    .pub-publication {
        font-style: italic; /* This makes the publication string italic */
    }

    .line-through-title {
        position: relative;
        text-align: center;
        margin-bottom: 15px;
    }

    .line-through-title span {
        background-color: #fff; /* Assuming your background is white. If not, change this. */
        padding: 0 10px; /* Adjust as needed to give space around the text. */
        z-index: 1;
        position: relative;
        font-size: xx-large;
    }

    .line-through-title::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background: black; /* Adjust the color as needed. */
        z-index: 0;
    }

    .header-container {
        display: flex;
        flex-direction: column; /* Set direction to column to make elements stack vertically */
        align-items: flex-end;  /* Align children to the end (right for LTR languages) */
    }
    .filter-container {
        margin-top: 10px; /* Adjust this value for more/less space between title and filter */
    }
</style>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

<div class="header-container">
    <div class="text-center font-bold text-4xl">
        Publications
    </div>
    <div class="filter-container">
        <label for="paperType">Filter by Project:</label>
        <select id="paperType" bind:value={selectedType}>
            <option value="">All</option>
            <!-- Assume types contains distinct projects -->
            {#each types as type}
                <option value={type}>{type}</option>
            {/each}
        </select>
    </div>
</div>
{#each Object.entries(years).reverse() as [year, pubs]}
    <div>
        <div class="line-through-title">
            <span>{year}</span>
        </div>
        {#each pubs as pub}
            <li>
                <span class="pub-authors" itemprop="author">
                    {@html pub.makeAuthorString()}.
                </span>

                <span class="pub-title">     
                    <a href={pub?.url} itemprop="url">{pub?.title}.</a>
                </span>

                <span class="pub-publication">
                    {@html pub.makePublicationString()}. 
                </span>
            </li>
        {/each}
    </div>
{/each}
