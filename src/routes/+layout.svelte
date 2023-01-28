<script>
	import '../app.css';
	import Navbar from '$lib/components/nav/navbar.svelte';
	import Footer from '$lib/components/nav/footer.svelte';
</script>

<Navbar />
<main class="bg-background">
	<slot />
</main>
<Footer />
