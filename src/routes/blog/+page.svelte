<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { ArrowLeft, Clock } from 'lucide-svelte';
	let { data } = $props();
</script>

<section class="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
	<div class="flex items-center mb-6 sm:mb-8">
		<a
			href="/"
			class="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 transition-colors"
		>
			<ArrowLeft class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
			Back to Home
		</a>
	</div>
	<ul class="grid gap-4 sm:gap-6">
		<h1
			class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white px-4 sm:px-8 mb-4 sm:mb-5"
		>
			Blog
		</h1>
		{#each data.posts as post}
			<li class="group">
				<article
					class="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 relative"
				>
					<header
						class="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4"
					>
						<div class="flex-1">
							<div
								class="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 text-sm text-gray-500 dark:text-gray-400"
							>
								<time datetime={post.date}>
									{formatDate(post.date)}
								</time>
								<span class="flex items-center gap-1">
									<Clock class="w-3 h-3 sm:w-4 sm:h-4" />
									{post.read_time}
								</span>
							</div>
							<h2>
								<a
									href={post.slug}
									class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									{post.title}
								</a>
							</h2>
						</div>
						{#if post.image}
							<img
								src={post.image}
								alt={post.title}
								class="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
								loading="lazy"
							/>
						{/if}
					</header>
					<p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2">
						{post.description}
					</p>
					<div
						class="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"
					>
						<div class="flex flex-wrap gap-1.5 sm:gap-2">
							<span
								class="px-2 py-0.5 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
							>
								{post.genre}
							</span>
							{#each post.keywords.slice(0, 3) as keyword}
								<span
									class="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
								>
									#{keyword}
								</span>
							{/each}
						</div>
						<a
							href={post.slug}
							class="text-sm sm:text-base text-right text-blue-600 dark:text-blue-400 transform transition-all duration-200 group-hover:translate-x-1"
						>
							Read more →
						</a>
					</div>
				</article>
			</li>
		{/each}
	</ul>
</section>
