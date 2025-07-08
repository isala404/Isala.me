<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	let { data, form } = $props();

	// If authenticated, show the proxied content
	if (data.authenticated) {
		// Proxy the static website by loading it in an iframe
		// This is the simplest way to proxy the content
	}

	onMount(() => {
		const parentWrapper = document.getElementById('parent-wrapper');
		if (parentWrapper) {
			parentWrapper.style.height = '100vh';
			parentWrapper.style.width = '100vw';
		}
	});
</script>

<svelte:head>
	<title>Amy Turns 24</title>
</svelte:head>

{#if data.authenticated}
	<!-- Show the proxied static website -->
	<div class="w-full h-screen">
		<iframe
			src="https://static.isala.me/amy-turns-24/index.html"
			class="w-full h-full border-0"
			title="Amy Turns 24"
		></iframe>
	</div>
{:else}
	<!-- Show login form -->
	<div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
		<div class="max-w-md w-full space-y-8 p-8">
			<div class="text-center">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Protected Content</h2>
				<p class="mt-2 text-gray-600 dark:text-gray-400">
					Please enter the password to access Amy's special page
				</p>
			</div>

			<form method="POST" action="?/login" use:enhance class="mt-8 space-y-6">
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						required
						class="relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-800"
						placeholder="Enter password"
					/>
				</div>

				{#if form?.incorrect}
					<div class="text-red-600 dark:text-red-400 text-sm text-center">
						Incorrect password. Please try again.
					</div>
				{/if}

				<button
					type="submit"
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
				>
					Access Content
				</button>
			</form>
		</div>
	</div>
{/if}
