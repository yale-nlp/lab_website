<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Hero from '$lib/Layout/Hero/Hero.svelte';
    import FollowUsBtn from '$lib/Layout/FollowUsBtn.svelte';
    import JellyContainer from '$lib/Layout/JellyContainer.svelte';
    import Carousel from '$lib/Carousal/Carousal.svelte'
    const images = [
        '/images/yale/100_college_st.png',
        '/images/yale/lab_members_2019.jpeg',
    ]
    const imageCaptions = [
        'School of Medicine',
        ''
    ]
    const myImages = images.map((url, id) => ({
        id, url, name: imageCaptions[id],
        caption: imageCaptions[id]
    }))
    
</script>



<Hero class="hidden md:block"></Hero>
<div class="hidden md:flex flex-row ">    
    <!-- <Hero {backgroundImage} class="hero w-1/2 h-[36rem] max-h-[36rem] bg-base-200">
        <span class="uppercase break-keep text-5xl md:text-7xl">
            Yale NLP Lab
        </span>
        <svelte:fragment slot="tagline">
            <FollowUsBtn />  
        </svelte:fragment>
    </Hero>     -->

    <div class="w h-[36rem]">
        <Carousel            
            images={myImages}
            showCaptions={false}             
        />
    </div>
</div>



<JellyContainer>
    <div class="flex place-content-center md:pt-8">
        <div class="text-slate-700 leading-relaxed">
            Lab description here
        </div>
    </div>
</JellyContainer>

