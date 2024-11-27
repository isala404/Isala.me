<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { ArrowLeft, Share2, Home, Clock, Volume2, VolumeX } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let { data } = $props();
	let progress = $state(0);
	let speech: SpeechSynthesisUtterance;
	let isPlaying = $state(false);

	onMount(() => {
		// Progress tracking
		const updateProgress = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight - windowHeight;
			progress = (window.scrollY / documentHeight) * 100;
		};
		window.addEventListener('scroll', updateProgress);

		// TTS setup
		speech = new SpeechSynthesisUtterance();
		speech.text = document.querySelector('.prose')?.textContent || '';
		speech.onend = () => (isPlaying = false);

		return () => {
			window.removeEventListener('scroll', updateProgress);
			window.speechSynthesis.cancel();
		};
	});

	function toggleTTS() {
		if (isPlaying) {
			window.speechSynthesis.cancel();
			isPlaying = false;
		} else {
			window.speechSynthesis.speak(speech);
			isPlaying = true;
		}
	}
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	{#if data.meta.image}
		<meta property="og:image" content={data.meta.image} />
	{/if}
	<meta name="author" content={data.meta.author} />
	<meta name="keywords" content={data.meta.keywords.join(', ')} />
</svelte:head>

<!-- Progress bar -->
<div class="fixed top-0 left-0 w-full h-1 z-50">
	<div
		class="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-100"
		style="width: {progress}%"
	></div>
</div>

<article class="min-h-screen relative max-w-[100vw] overflow-x-hidden">
	<!-- Navigation -->
	<nav
		class="sticky top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-40 px-4 py-3"
	>
		<div class="max-w-3xl mx-auto flex justify-between items-center">
			<div class="flex gap-2">
				<a
					href="/"
					class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
				>
					<Home class="w-5 h-5" />
				</a>
				<a
					href="/blog"
					class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
				>
					<ArrowLeft class="w-5 h-5" />
				</a>
			</div>
			<div class="flex gap-2">
				<button
					class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
					onclick={toggleTTS}
				>
					{#if isPlaying}
						<VolumeX class="w-5 h-5" />
					{:else}
						<Volume2 class="w-5 h-5" />
					{/if}
				</button>
				<button
					class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
					onclick={() => {
						navigator
							.share({
								title: data.meta.title,
								url: window.location.href
							})
							.catch(() => {});
					}}
				>
					<Share2 class="w-5 h-5" />
				</button>
			</div>
		</div>
	</nav>

	<!-- Header -->
	<header class="max-w-3xl mx-auto px-4 py-8 md:py-12">
		<!-- Author and metadata -->
		<div class="flex flex-col gap-4 mb-6">
			<!-- Author -->
			<div class="flex items-center gap-3">
				<img
					src={data.meta.author_image}
					alt={data.meta.author}
					class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
				/>
				<div class="flex flex-col">
					<span class="text-sm font-medium text-gray-900 dark:text-white">{data.meta.author}</span>
					<div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
						<time datetime={data.meta.date}>{formatDate(data.meta.date)}</time>
						<span>•</span>
						<div class="flex items-center gap-1" title="Estimated reading time">
							<Clock class="w-3.5 h-3.5" />
							<span>{data.meta.read_time} read</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Title and rest of the header -->
		<h1
			class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
		>
			{data.meta.title}
		</h1>

		<!-- Description -->
		<p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
			{data.meta.description}
		</p>

		<!-- Tags -->
		<div class="flex overflow-x-auto no-scrollbar pb-2">
			<div class="flex gap-2 flex-nowrap">
				{#each data.meta.keywords as keyword}
					<span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 whitespace-nowrap">
						#{keyword}
					</span>
				{/each}
			</div>
		</div>

	</header>

	<!-- Featured Image -->
	{#if data.meta.image}
		<div class="w-full max-w-4xl mx-auto px-4 mb-8">
			<img
				src={data.meta.image}
				alt={data.meta.title}
				class="w-full aspect-[21/9] object-cover rounded-xl shadow-lg"
			/>
		</div>
	{/if}

	<!-- Content -->
	<div class="prose max-w-3xl mx-auto px-4 pb-8">
		<data.content />
	</div>
</article>

<!-- Footer -->
<footer class="max-w-3xl mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-800">
	<p class="text-center text-gray-600 dark:text-gray-400 text-sm font-mono">
		<a
			href={`https://github.com/isala404/Isala.me/blob/main/src/posts/${data.meta.slug}/index.md`}
			class="hover:underline inline-flex items-center gap-1.5"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="opacity-50">$</span> git clone this-article <span class="text-xs">↗</span>
		</a>
	</p>
</footer>
