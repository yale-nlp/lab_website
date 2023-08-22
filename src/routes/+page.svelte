<script>
    import { onMount } from 'svelte';

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
    onMount(() => {
        // Load the Twitter widget if it's not already loaded
        if (typeof twttr === 'undefined') {
            let script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.charset = "utf-8";
            document.head.appendChild(script);
        } else {
            twttr.widgets.load();
        }
    });
</script>

<style>
    .main-content {
        display: flex;
        justify-content: space-between;
    }

    .twitter-feed {
        width: 30%;  /* Adjusted to 25% for more compact appearance */
        min-width: 250px; /* Adjusted to a smaller minimum width */
        height: 410px;  /* Fixed height for the window effect */
        overflow-y: auto;  /* Allow internal vertical scrolling */
        border: 1px solid #ccc;  /* Optional border styling */
        box-shadow: 0 0 10px rgba(0,0,0,0.1);  /* Optional shadow for a "lifted" effect */
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

    .news-section {
        width: 65%;
        min-width: 250px;
        height: 450px; 
        overflow-y: auto; 
        color: #5d5c5c;
        margin-top: -20px;
    }
    .news-list {
        list-style-type: none; /* No bullets */
        padding: 0;
    }

    .news-item {
        margin-bottom: 5px;
    }

    .news-date {
        font-weight: bold;
        padding: 2px 6px;
    }

</style>

<Hero class="hidden md:block"></Hero>
<Hero backgroundImage="/images/projects_hero.jpeg">
    Lab description here
</Hero>

<JellyContainer class="pt-16">
    <div class="main-content">
        <!-- <div class="hidden md:flex flex-row">    
            <div class="w h-[36rem]">
                <Carousel            
                    images={myImages}
                    showCaptions={false}             
                />
            </div>
        </div> -->

        <div class="twitter-feed">
            <a class="twitter-timeline" href="https://twitter.com/yalenlp?ref_src=twsrc%5Etfw">Tweets by yalenlp</a>
        </div>

        <div class="news-section">
            <div class="line-through-title">
                <span>News</span>
            </div>
            <ul class="news-list" style="overflow-x:auto; height: 380px">
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
                <li class="news-item">
                    <span class="news-date">2023/5</span> x papers presented at ACL 2023.
                </li>
            </ul>
        </div>

    </div>

</JellyContainer>
