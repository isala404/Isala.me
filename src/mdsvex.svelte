<script lang="ts" module>
	import { img } from '$lib/components/custom';
	// eslint-disable-next-line no-import-assign
	export { img };
</script>

<script lang="ts">
	let props = $props();
</script>

{@render props.children?.()}
