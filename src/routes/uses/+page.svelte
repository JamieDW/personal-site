<script>
	import Section from '$lib/components/Section.svelte';
	import SimpleLayout from '$lib/components/SimpleLayout.svelte';

	const uses = [
		{
			title: 'Workstation',
			tools: [
				{
					title: 'Dell XPS 17 9720 (32GB, 12th Gen Intel i7)',
					description:
						"I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I've never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
				},
				{
					title: 'HUAWEI MateView GT 27-inch',
					description:
						"The only display on the market if you want something HiDPI and bigger than 27”. When you're working at planetary scale, every pixel you can get counts."
				},
				{
					title: 'IBM Model M SSK Industrial Keyboard',
					description:
						"They don't make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main."
				},
				{
					title: 'Apple Magic Trackpad',
					description:
						'Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.'
				},
				{
					title: 'Herman Miller Aeron Chair',
					description:
						"If I'm going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair."
				}
			]
		},
		{
			title: 'Development tools',
			tools: [
				{
					title: 'Sublime Text 4',
					description:
						'I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.'
				},
				{
					title: 'iTerm2',
					description:
						'I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use.'
				},
				{
					title: 'TablePlus',
					description:
						'Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.'
				}
			]
		},
		{
			title: 'Design',
			tools: [
				{
					title: 'Figma',
					description:
						'We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.'
				}
			]
		},
		{
			title: 'Productivity',
			tools: [
				{
					title: 'Alfred',
					description:
						'It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.'
				},
				{
					title: 'Reflect',
					description:
						'Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.'
				},
				{
					title: 'SavvyCal',
					description:
						'Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.'
				},
				{
					title: 'Focus',
					description:
						'Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Uses - Jamie Whelpton</title>
	<meta
		name="description"
		content="Software I use, gadgets I love, and other things I recommend."
	/>
</svelte:head>

{#snippet ToolsSection(title, tools)}
	<Section {title}>
		<ul role="list" class="space-y-16">
			{#each tools as { title, description }}
				{@render Tool(title, description)}
			{/each}
		</ul>
	</Section>
{/snippet}

{#snippet Tool(title, description)}
	<li class="group relative flex flex-col items-start">
		<h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{title}</h3>
		<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
	</li>
{/snippet}

<SimpleLayout
	title="Software I use, gadgets I love, and other things I recommend."
	intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff."
>
	<div class="space-y-20">
		{#each uses as { title, tools }}
			{@render ToolsSection(title, tools)}
		{/each}
	</div>
</SimpleLayout>
