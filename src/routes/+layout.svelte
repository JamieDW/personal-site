<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<title>Jamie Whelpton - Software designer, traveller, and amateur baker</title>
	<meta
		name="description"
		content="I’m Jamie Whelpton. I live in Kingston Upon Hull, where I design the future."
	/>
</svelte:head>

<div class="fixed inset-0 flex justify-center sm:px-8">
	<div class="flex w-full max-w-7xl lg:px-8">
		<div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
	</div>
</div>
<div class="relative flex w-full flex-col">
	<Header />
	<main class="flex-auto">
		<slot></slot>
	</main>
	<Footer />
</div>

<ModeWatcher />
