<script lang="ts">
    import Carousel from "svelte-carousel";
    import { browser } from '$app/environment';
    export let data: any;
</script>

<h3 class="text-xl my-4">Nerd Stats</h3>
{#if browser}
    <div class="w-full text-center">
        <Carousel arrows={false} autoplay={true} pauseOnFocus={true} autoplayDuration={4500} swiping={false}>
            {#each data['nerd-stats'] as stat (stat.title)}
                <div class="h-40 flex flex-col justify-center relative">
                    <div class={stat.color + " flex flex-col justify-center absolute opacity-50 h-full w-full z-10 rounded-xl"} />
                    <div class="z-20 absolute w-full text-center">
                        <img src={stat.icon} alt={stat.title} class="w-10 h-10 mx-auto opacity-75" />
                        <p class='text-lg'>{stat.value} {stat.title}</p>
                    </div>
                </div>
            {/each}
        </Carousel>
    </div>
{/if}
