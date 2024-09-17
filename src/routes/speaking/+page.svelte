<script>
	import SimpleLayout from '$lib/components/SimpleLayout.svelte';

	const speaches = [
		{
			title: 'Conferance',
			events: [
				{
					title: 'In space, no one can watch you stream — until now',
					description:
						'A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.',
					event: 'SysConf 2021',
					cta: 'Watch video'
				},
				{
					title: 'Lessons learned from our first product recall',
					description:
						'They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated.',
					event: 'Business of Startups 2020',
					cta: 'Watch video'
				}
			]
		},
		{
			title: 'Podcasts',
			events: [
				{
					title: 'Using design as a competitive advantage',
					description:
						'How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria.',
					event: 'Encoding Design, July 2022',
					cta: 'Listen to podcast'
				},
				{
					title: 'Bootstrapping an aerospace company to $17M ARR',
					description:
						'The story of how we built one of the most promising space startups in the world without taking any capital from investors.',
					event: 'The Escape Velocity Show, March 2022',
					cta: 'Listen to podcast'
				},
				{
					title: 'Programming your company operating system',
					description:
						'On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation.',
					event: 'How They Work Radio, September 2021',
					cta: 'Listen to podcast'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Speaking - Jamie Whelpton</title>
</svelte:head>

{#snippet SpeakingSection(title, events)}
	<section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
		<div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
			<h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{title}</h2>
			<div class="md:col-span-3">
				<div class="space-y-16">
					{#each events as { title, description, event, cta }}
						{@render Event(title, description, event, cta)}
					{/each}
				</div>
			</div>
		</div>
	</section>
{/snippet}

{#snippet Event(title, description, event, cta)}
	<article class="group relative flex flex-col items-start">
		<h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
			<div
				class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
			></div>
			<a href="https://m.youtube.com/watch?v=dQw4w9WgXcQ"
				><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
					class="relative z-10">{title}</span
				></a
			>
		</h3>
		<p
			class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500"
		>
			<span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"
				><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span
			>{event}
		</p>
		<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
			{description}
		</p>
		<div
			aria-hidden="true"
			class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
		>
			{cta}<svg
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
	</article>
{/snippet}

<SimpleLayout
	title="I’ve spoken at events all around the world and been interviewed for many podcasts."
	intro="	One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
>
	<div class="space-y-20">
		{#each speaches as speach}
			{@render SpeakingSection(speach.title, speach.events)}
		{/each}
	</div>
</SimpleLayout>
