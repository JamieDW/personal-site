<script lang="ts">
	import SimpleLayout from '$lib/components/SimpleLayout.svelte';

	export let data;

	const { articles } = data;
</script>

<svelte:head>
	<title>Articles - Jamie Whelpton</title>
	<meta
		name="description"
		content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
	/>
</svelte:head>

{#snippet Article(article)}
	<article class="md:grid md:grid-cols-4 md:items-baseline">
		<div class="group relative flex flex-col items-start md:col-span-3">
			<h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
				<div
					class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
				></div>
				<a href="/articles/{article.id}"
					><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
					></span><span class="relative z-10">{article.title}</span></a
				>
			</h2>
			<time
				class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 md:hidden dark:text-zinc-500"
				datetime="2022-09-05"
				><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"
					><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span
				>September 5, 2022</time
			>
			<p class="relative z-10 mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
				{article.body}
			</p>
			<div
				aria-hidden="true"
				class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
			>
				Read article<svg
					viewBox="0 0 16 16"
					fill="none"
					aria-hidden="true"
					class="ml-1 h-4 w-4 stroke-current"
					><path
						d="M6.75 5.75 9.25 8l-2.5 2.25"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path></svg
				>
			</div>
		</div>
		<time
			class="relative z-10 order-first mb-3 mt-1 flex hidden items-center text-sm text-zinc-400 md:block dark:text-zinc-500"
			datetime="2022-09-05">September 5, 2022</time
		>
	</article>
{/snippet}

<SimpleLayout
	title="Writing on software design, company building, and the aerospace industry."
	intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
>
	<div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
		<div class="flex max-w-3xl flex-col space-y-16">
			{#each articles as article}
				{@render Article(article)}
			{/each}
		</div>
	</div>
</SimpleLayout>
