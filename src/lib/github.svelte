<script lang="ts">
	interface Props {
		title: string;
		description: string;
		tag: string;
		link: string;
		stars: number;
		forks: number;
		color: string;
	}

	let { title, description, tag, link, stars, forks, color }: Props = $props();
</script>

<div
	class="border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-[21rem] shadow-lg rounded-lg overflow-hidden m-3"
>
	<div class="p-6">
		<div class="flex justify-between items-center">
			<div class="flex items-center dark-icon-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-6 h-6 text-gray-900"
				>
					<path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					></path>
					<path d="M9 18c-4.51 2-5-2-7-2"></path>
				</svg>
				<h3 class="tracking-tight text-lg font-bold text-gray-900 dark:text-gray-100 ml-2">
					{title}
				</h3>
			</div>
			<div class="text-gray-100 {color} text-sm font-medium px-2 py-1 rounded-md">
				{tag}
			</div>
		</div>
		<p class="text-sm mt-4 text-gray-600 dark:text-gray-300 text-left">{description}</p>
		<div class="mt-4 flex items-center justify-between">
			<div class="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5 text-yellow-500"
				>
					<polygon
						points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
					></polygon>
				</svg>
				<span class="text-sm text-gray-500 ml-2">{stars} Stars</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5 text-gray-500 ml-4"
				>
					<circle cx="12" cy="18" r="3"></circle>
					<circle cx="6" cy="6" r="3"></circle>
					<circle cx="18" cy="6" r="3"></circle>
					<path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path>
					<path d="M12 12v3"></path>
				</svg>
				<span class="text-sm text-gray-500 ml-2">{forks} Forks</span>
			</div>
			<a class="text-blue-500 text-sm font-medium hover:underline" href={link} target="_blank">
				View on GitHub
			</a>
		</div>
	</div>
</div>
