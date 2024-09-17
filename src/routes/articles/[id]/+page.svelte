<script lang="ts">
	import SimpleLayout from '$lib/components/SimpleLayout.svelte';

	export let data;

	const { article } = data;
</script>

<svelte:head>
	<title>Articles - Jamie Whelpton</title>
	<meta
		name="description"
		content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
	/>
</svelte:head>

<SimpleLayout
	title={article.title}
	intro={article.body + article.body + article.body + article.body + article.body}
>
	<div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
		<div class="flex max-w-3xl flex-col space-y-16"></div>
	</div>
</SimpleLayout>
