<script>
	import logoPrepKitchen from '$lib/images/logos/prepkitchen.webp';
	import logoUniLED from '$lib/images/logos/uniled.webp';
	import logoPurePetFood from '$lib/images/logos/purepetfood.webp';
	import logoStyleTech from '$lib/images/logos/styletech.webp';
	import logoALS from '$lib/images/logos/als.webp';

	import image1 from '$lib/images/dexter_1.jpg?enhanced';
	import image2 from '$lib/images/malta.jpg?enhanced';
	import image3 from '$lib/images/sicily.jpg?enhanced';
	import image4 from '$lib/images/dexter_2.jpg?enhanced';
	import image5 from '$lib/images/ibiza.jpg?enhanced';
	import {
		GitHubIcon,
		InstagramIcon,
		LinkedInIcon,
		TwitterIcon
	} from '$lib/components/SocialIcons';

	export let data;

	const { articles } = data;

	const resume = [
		{
			company: 'Prep Kitchen',
			title: 'Software Developer',
			logo: logoPrepKitchen,
			start: '2023',
			end: 'Present'
		},
		{
			company: 'UniLED',
			title: 'Laravel Software Developer',
			logo: logoUniLED,
			start: '2022',
			end: '2023'
		},
		{
			company: 'Pure Pet Food',
			title: 'Lead Software Developer',
			logo: logoPurePetFood,
			start: '2020',
			end: '2023'
		},
		{
			company: 'StyleTech',
			title: 'Software Developer',
			logo: logoStyleTech,
			start: '2018',
			end: '2020'
		},
		{
			company: 'ALS',
			title: 'IT Support & Developer',
			logo: logoALS,
			start: '2015',
			end: '2018'
		}
	];
</script>

{#snippet Jobs()}
	<div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
		<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
				class="h-6 w-6 flex-none"
				><path
					d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
					class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
				></path><path
					d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
					class="stroke-zinc-400 dark:stroke-zinc-500"
				></path></svg
			><span class="ml-3">Work</span>
		</h2>
		<ol class="mt-6 space-y-4">
			{#each resume as job}
				<li class="flex gap-4">
					<div
						class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
					>
						<img
							alt=""
							loading="lazy"
							width="32"
							height="32"
							decoding="async"
							data-nimg="1"
							class="h-7 w-7"
							src={job.logo}
							style="color: transparent;"
						/>
					</div>
					<dl class="flex flex-auto flex-wrap gap-x-2">
						<dt class="sr-only">Company</dt>
						<dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
							{job.company}
						</dd>
						<dt class="sr-only">Role</dt>
						<dd class="text-xs text-zinc-500 dark:text-zinc-400">{job.title}</dd>
						<dt class="sr-only">Date</dt>
						<dd
							class="ml-auto text-xs text-zinc-500 dark:text-zinc-400"
							aria-label="2019 until Present"
						>
							<time datetime={job.start}></time>{job.start}<span aria-hidden="true"> - </span>
							<time datetime={job.end}>{job.end}</time>
						</dd>
					</dl>
				</li>
			{/each}
		</ol>
		<a
			class="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
			href="#"
			>Download CV<svg
				viewBox="0 0 16 16"
				fill="none"
				aria-hidden="true"
				class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
				><path
					d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path></svg
			></a
		>
	</div>
{/snippet}

{#snippet Photos()}
	<div class="mt-16 sm:mt-20">
		<div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
			{#each [image1, image2, image3, image4, image5] as image}
				<div
					class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 odd:-rotate-2 even:rotate-2 sm:w-72 sm:rounded-2xl dark:bg-zinc-800"
				>
					<enhanced:img
						loading="lazy"
						alt=""
						sizes="(min-width: 640px) 18rem, 11rem"
						class="absolute inset-0 h-full w-full object-cover"
						src={image}
					/>
				</div>
			{/each}
		</div>
	</div>
{/snippet}

{#snippet Newsletter()}
	<div class="space-y-10 lg:pl-16 xl:pl-24">
		<form action="/" class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
			<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
					class="h-6 w-6 flex-none"
					><path
						d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
						class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
					></path><path
						d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
						class="stroke-zinc-400 dark:stroke-zinc-500"
					></path></svg
				><span class="ml-3">Stay up to date</span>
			</h2>
			<p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
				Get notified when I publish something new, and unsubscribe at any time.
			</p>
			<div class="mt-6 flex">
				<input
					placeholder="Email address"
					aria-label="Email address"
					required
					class="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
					type="email"
				/><button
					class="ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
					type="submit">Join</button
				>
			</div>
		</form>
		{@render Jobs()}
	</div>
{/snippet}

{#snippet SocialLink(title, href, icon)}
	<a {href} aria-label={title} class="group -m-1 p-1">
		<svelte:component
			this={icon}
			class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
		/>
	</a>
{/snippet}

{#snippet Article(article)}
	<article class="group relative flex flex-col items-start">
		<h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
			<div
				class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
			></div>
			<a href="/articles/{article.id}"
				><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
					class="relative z-10">{article.title}</span
				></a
			>
		</h2>
		<time
			class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500"
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
	</article>
{/snippet}

<div class="mt-16 sm:mt-32 sm:px-8">
	<div class="mx-auto w-full max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<div class="max-w-2xl">
					<h1
						class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
					>
						Software developer, traveller, and amateur baker.
					</h1>
					<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						I’m Jamie, a software developer and entrepreneur based in Kingston Upon Hull. I’m the
						founder and CEO of Planetaria, where we develop technologies that empower regular people
						to explore space on their own terms.
					</p>
					<div class="mt-6 flex gap-6">
						{@render SocialLink('Follow on Twitter', 'https://x.com/WhelptonJamie', TwitterIcon)}
						{@render SocialLink(
							'Follow on Instagram',
							'https://www.instagram.com/jamie.whelpton/',
							InstagramIcon
						)}
						{@render SocialLink('Following on GitHub', 'https://github.com/JamieDW', GitHubIcon)}
						{@render SocialLink(
							'Following on LinkedIn',
							'https://www.linkedin.com/in/jamie-whelpton-31293112a/',
							LinkedInIcon
						)}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{@render Photos()}
<div class="mt-24 sm:px-8 md:mt-28">
	<div class="mx-auto w-full max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
					<div class="flex flex-col gap-16">
						{#each articles as article}
							{@render Article(article)}
						{/each}
					</div>

					{@render Newsletter()}
				</div>
			</div>
		</div>
	</div>
</div>
