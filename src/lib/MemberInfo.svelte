<script lang="ts">
    import type { Member as MemberInterface } from '$lib/types';
    import { Member } from '$lib/classes';

    export let member = new Member({
        name: { first: 'Lab', last: 'Member' },
        image: '',
        about: 'Detailed information about the person...',
    } as MemberInterface);

    let showDetails = false;
</script>

<style>
    .card {
        position: relative;
        width: 100%; 
        height: 250pt;
        padding: 20px;
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
        height: 200pt;
        padding: 20px;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }

    .details-container.active {
        opacity: 1;
    }

    .details-container h2 {
        text-align: center;
        font-size: large;
        font-weight: 600;
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
        margin: 10px 0; /* Added some margin around the name */
    }
</style>

<div class="card" on:mouseenter={() => showDetails = true} on:mouseleave={() => showDetails = false}>
    {#if showDetails}
        <div class="details-container active">
            <h2>{member?.name}</h2>
            <p>{member?.about}</p>
        </div>
    {:else}
        <figure class="flex-col bg-base-100" class:hidden={showDetails}>
            <div class="avatar inline-flex place-content-center place-items-start rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                <img src={member?.image} alt="{`${member?.name_str} profile image`}" class="w-full h-auto rounded-full" />
            </div>
        </figure>

        <div class="card-body">
            <h2 class="card-title sticky {showDetails ? 'hidden' : ''}">
                {member?.name}
            </h2>
        </div>
    {/if}
</div>
