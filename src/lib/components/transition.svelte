<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	export let url: URL;
</script>

{#key url}
	<div in:fade>
		<slot />
	</div>
{/key}
