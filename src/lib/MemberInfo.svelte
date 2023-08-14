<script lang="ts">
    import type { Member as MemberInterface } from '$lib/types';
    import { Member } from '$lib/classes';

    export let member = new Member({
        name: '',
        image: '',
        website: '',
        twitter: '',
        github: '',
        google_scholar: '',
        semantic_scholar: '',
        about: '',
        title: '',
    } as MemberInterface);

    let showDetails = false;
</script>

<style>
    .card {
        position: relative;
        width: 100%; 
        height: 210pt;
        padding: 5px;
        border-radius: 8px;
        /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
        text-align: center;
        overflow: hidden;
        display: flex; /* Add flex layout */
        flex-direction: column; /* Stack children vertically */
    }

    .details-container {
        background-color: rgb(255, 140, 0);
        color: white;
        height: 205pt;
        padding: 10px;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        display: flex; /* Add flex layout */
        flex-direction: column; /* Stack children vertically */
    }

    .details-container.active {
        opacity: 1;
    }

    .details-container h2 {
        text-align: center;
        font-size: large;
        font-weight: 600;
    }

    .details-container p {
        text-align: center;
        font-size: small;
    }

    .avatar {
        width: 150px; /* Increased width */
        height: 150px; /* Increased height */
        margin: 0 auto; /* Centering the image */
    }

    .card-body {
        color: black;
    }

    .card-body h2 {
        text-align: center;
        font-size: large;
        font-weight: 600;
    }

    .icons {
        display: flex;
        justify-content: center;
    }

    .icon {
        width: 24px; /* Adjust the size as needed */
        height: 24px;
        fill: white; /* Color of the icons */
    }
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

<div class="card" on:mouseenter={() => showDetails = true} on:mouseleave={() => showDetails = false}>
    {#if showDetails}
        <div class="details-container active">
            <h2>{member?.name}</h2>

            <div class="icons">
                {#if member?.website}
                    <a href="{member?.website}">
                        <i class="fas fa-home pr-1 icon"></i>
                    </a>
                {/if}
                {#if member?.github}
                    <a href="{member?.github}">
                        <i class="fab fa-github icon"></i>
                    </a>
                {/if}
                {#if member?.google_scholar}
                    <a href="{member?.google_scholar}">
                        <i class="ai ai-google-scholar ai-lg icon"></i>
                    </a>
                {/if}
                {#if member?.twitter}
                    <a href="{member?.twitter}">
                        <i class="fab fa-twitter icon"></i>
                    </a>
                {/if}
                {#if member?.semantic_scholar}
                    <a href="{member?.semantic_scholar}">
                        <i class="ai ai-semantic-scholar icon"></i>
                    </a>
                {/if}
            </div>
            

            <p>{member?.about}</p>
        </div>
    {:else}
        <figure class="flex-col bg-base-100" class:hidden={showDetails}>
            <div class="avatar inline-flex place-content-center place-items-start rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                <img src={member?.image} alt="{`${member?.name} profile image`}" class="w-full h-auto rounded-full" />
            </div>
        </figure>

        <div class="card-body">
            <h2>
                {member?.name}
            </h2>
            <p>
                {member?.title}
            </p>
        </div>
    {/if}
</div>
