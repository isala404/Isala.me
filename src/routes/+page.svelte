<script lang="ts">
    import { browser } from "$app/environment";
    import Song from "$lib/about-me/song.svelte";
    import PetProject from "$lib/about-me/pet-project.svelte";
    import Languages from "$lib/about-me/love-language.svelte";
    import Stats from "$lib/about-me/stats.svelte";
    import Github from "$lib/github.svelte";
    import Medium from "$lib/medium.svelte";

    import Icons from "$lib/icons.svelte";
    import Credentials from "$lib/credentials.svelte";

    export let data: any;
    let scrolled = true;
    const checkScroll = () => {
        scrolled = window.scrollY > 15;
    };
    if (browser) {
        window.addEventListener("scroll", checkScroll);
    }
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Isala Piyarisi - Cloud Engineer</title>
    <meta name="title" content="Isala Piyarisi - Cloud Engineer" />
    <meta name="description" content="I am a DevOps engineer with over 7 years of experience, I've had the opportunity to gain proficiency in languages like Rust, Go, Python and JavaScript." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://isala.me/" />
    <meta property="og:title" content="Isala Piyarisi - Cloud Engineer" />
    <meta property="og:description" content="A DevOps engineer with over 7 years of experience. He is a proficient in Rust, Go, Python and JavaScript. His primary skills include server-side programming, infrastructure architecture and maintenance, and minimalistic UI design." />
    <meta property="og:image" content="https://static.isala.me/portfolio/og_image.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://isala.me/" />
    <meta property="twitter:title" content="Isala Piyarisi - Cloud Engineer" />
    <meta property="twitter:description" content="A DevOps engineer with over 7 years of experience. He is a proficient in Rust, Go, Python and JavaScript. His primary skills include server-side programming, infrastructure architecture and maintenance, and minimalistic UI design." />
    <meta property="twitter:image" content="https://static.isala.me/portfolio/og_image.png" />
</svelte:head>

<div class="min-h-screen flex flex-col items-center text-center w-full">
    <header class="flex flex-col items-center mt-8">
        <h1 class="text-5xl md:text-6xl">Isala Piyarisi</h1>
        <h2 class="text-3xl md:text-4xl mt-2">
            Cloud Engineer <span class="hidden md:inline">| AI Enthusiast</span>
        </h2>
        <Icons />
    </header>

    <div
        class="flex flex-col items-center md:my-auto text-center justify-evenly h-full flex-1"
    >
        <section class="mt-12">
            <!-- <h2 class="text-2xl font-bold mb-5 hidden md:block">About Me</h2> -->
            <p class="max-w-[45rem] mx-4">
                Sure, I could build an army of killer robots, but where's the
                fun in that? I am more interested in perfecting my robot that
                passes butter. When I'm not busy with my day job or working on
                my pet projects, you'll find me strategizing in video games -
                the perfect way to unwind and channel my inner engineer. After
                all, video games were the reason I got into programming in the
                first place.
            </p>
        </section>
        <section
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[60rem] justify-items-center align-items-center my-3"
        >
            <div class="h-auto flex flex-col items-center w-72">
                <Languages />
            </div>
            <div class="h-auto flex flex-col items-center w-72">
                <PetProject />
            </div>
            <div
                class="h-auto flex flex-col md:col-span-3 lg:col-span-1 items-center w-72"
            >
                <Song />
            </div>
            <div
                class="h-60 flex flex-col items-center md:col-span-3 max-w-full"
            >
                <Stats data={data} />
            </div>
        </section>
        <img
            src="/icons/down-arrow.svg"
            alt="Arrow to hint to scroll down"
            class="w-6 hidden lg:block transition-opacity duration-500 {scrolled
                ? 'opacity-0'
                : 'opacity-100'}"
            id="arrow"
        />
    </div>
</div>

<div class="flex flex-col items-center md:my-auto text-center">
    <div class="w-screen flex flex-col items-center">
        <section class="mb-5">
            <h2 class="text-2xl font-bold mb-5">Featured Articles</h2>
            <div class="flex flex-row flex-wrap justify-center max-w-[60rem]">
                {#each data.articles as article (article.link)}
                    <Medium {...article} />
                {/each}
            </div>
        </section>

        <section class="my-10">
            <h2 class="text-2xl font-bold mb-5">Featured Projects</h2>
            <div class="flex flex-row flex-wrap justify-center max-w-[60rem]">
                {#each data.project as project (project.link)}
                    <Github {...project} />
                {/each}
            </div>
        </section>

        <section>
            <Credentials />
        </section>
    </div>
    <footer class="mb-3 mt-8">
        Built with ❤ from <a
            class="text-red-500"
            href="https://github.com/MrSupiri/Isala.me"
            target="_blank">svelte</a
        >
    </footer>
</div>

<style>
    @media (min-width: 768px) {
        #arrow {
            animation: bounce 2s infinite;
        }
    }

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
</style>
