<script lang="ts">
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
	{@render children?.()}
</div>
