<script lang="ts">
	import '$styles/app.css';
	import '$styles/globals.css';
	import '$styles/root.css';
	import Header from '$components/layout/Header.svelte';
	import Nav from '$components/layout/Nav.svelte';
	import MainContents from '$components/layout/MainContents.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>SVUI</title>
</svelte:head>

<Header />

<main class="flex h-nav items-center">
	<Nav />
	<MainContents>
		{@render children()}
	</MainContents>
</main>
