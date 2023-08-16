<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Hero from '$lib/Layout/Hero/Hero.svelte';
    import FollowUsBtn from '$lib/Layout/FollowUsBtn.svelte';
    import JellyContainer from '$lib/Layout/JellyContainer.svelte';
    import Carousel from '$lib/Carousal/Carousal.svelte';
    
    const images = [
        '/images/yale/100_college_st.png',
        '/images/yale/100_college_st.png',
    ];
    const imageCaptions = [
        'School of Medicine',
        ''
    ];
    const myImages = images.map((url, id) => ({
        id, url, name: imageCaptions[id],
        caption: imageCaptions[id]
    }));

    // Load the Twitter widget if it's not already loaded
    if (typeof twttr === 'undefined') {
        let script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.charset = "utf-8";
        document.head.appendChild(script);
    } else {
        twttr.widgets.load();
    }
</script>

<style>
    .content-container {
        display: flex;
    }

    .main-content {
        flex: 1;
    }

    .twitter-feed {
        width: 30%;  /* Adjusted to 25% for more compact appearance */
        min-width: 250px; /* Adjusted to a smaller minimum width */
        height: 600px;  /* Fixed height for the window effect */
        overflow-y: auto;  /* Allow internal vertical scrolling */
        border: 1px solid #ccc;  /* Optional border styling */
        box-shadow: 0 0 10px rgba(0,0,0,0.1);  /* Optional shadow for a "lifted" effect */
    }
</style>

<Hero class="hidden md:block"></Hero>

<div class="content-container">

    <!-- Main Content -->
    <div class="main-content">
        <div class="hidden md:flex flex-row">    
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
    </div>

    <!-- Twitter Feed Section -->
    <div class="twitter-feed">
        <a class="twitter-timeline" href="https://twitter.com/yalenlp?ref_src=twsrc%5Etfw">Tweets by yalenlp</a>
    </div>

</div>
