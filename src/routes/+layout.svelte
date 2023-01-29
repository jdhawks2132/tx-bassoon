<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/nav/navbar.svelte';
	import Footer from '$lib/components/nav/footer.svelte';
	import Transition from '$lib/components/transition.svelte';
</script>

<Navbar />
<main class="relative bg-background px-2 lg:px-11">
	<Transition url={$page.url}>
		<slot />
	</Transition>
</main>
<Footer />
