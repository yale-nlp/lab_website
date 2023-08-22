<script lang="ts">
    export let backgroundImage: string;

</script>

<div class="hero h-[15rem] bg-base-200 {$$props.class}" style="background-image: url({backgroundImage});">
  {#if backgroundImage}
        <div class="hero-overlay bg-opacity-60"></div>
  {/if}   
  
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-white md:text-xl font-light break-all">
        <slot>
        </slot>
      </h1>      
      <slot name="tagline"></slot>        
    </div>
  </div>
</div>