<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';

	interface Boinger {
		val: number;
		boinged: boolean;
	}

	// biome-ignore lint/style/useConst: <explanation>
	export let color = 'pink';

	const [send, receive] = crossfade({});

	const boingers: Boinger[] = [
		{ val: 1, boinged: true },
		{ val: 2, boinged: true },
		{ val: 3, boinged: false },
		{ val: 4, boinged: true },
		{ val: 5, boinged: false }
	];

	function toggleBoing(id: number): void {
		const index = boingers.findIndex((v) => v.val === id);
		boingers[index].boinged = !boingers[index].boinged;
	}
</script>

<div class="container">
	<div class="boingers">
		{#each boingers.filter((v) => !v.boinged) as { val } (val)}
			<div
				role="button"
				tabindex="0"
				animate:flip
				in:receive={{ key: val }}
				out:send={{ key: val }}
				style="background:{color};"
				on:click={() => toggleBoing(val)}
				on:keydown={(e) => e.key === 'Enter' && toggleBoing(val)}
			>
				{val}
			</div>
		{/each}
	</div>

	<div class="boingers">
		{#each boingers.filter((v) => v.boinged) as { val } (val)}
			<div
				role="button"
				tabindex="0"
				animate:flip
				in:receive={{ key: val }}
				out:send={{ key: val }}
				style="background:{color};"
				on:click={() => toggleBoing(val)}
				on:keydown={(e) => e.key === 'Enter' && toggleBoing(val)}
			>
				{val}
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 300px;
		height: 200px;
		display: flex;
		justify-content: space-between;
	}

	.boingers {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
	}

	.boingers div {
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #eee;
		font-weight: bold;
		border-radius: 2px;
		cursor: pointer;
	}
</style>
