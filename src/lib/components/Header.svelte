<script>
	import { page } from '$app/stores';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

{#snippet NavItem(href, title)}
	<li>
		<a
			{href}
			aria-current={href === $page.url.pathname}
			class="aria-current:text-teal-500 aria-current:dark:text-teal-400 relative block px-2 py-2 transition hover:text-teal-500 md:px-3 dark:hover:text-teal-400"
		>
			{title}
			{#if href === $page.url.pathname}
				<span
					class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
				></span>
			{/if}
		</a>
	</li>
{/snippet}

{#snippet Navigation()}
	<nav class="pointer-events-auto hidden md:block">
		<ul
			class="flex rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur md:px-3 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
		>
			{@render NavItem('/about', 'About')}
			{@render NavItem('/articles', 'Articles')}
			{@render NavItem('/projects', 'Projects')}
			{@render NavItem('/speaking', 'Speaking')}
			{@render NavItem('/uses', 'Uses')}
		</ul>
	</nav>
{/snippet}

<header
	class="pointer-events-none relative z-50 flex flex-none flex-col"
	style="height:var(--header-height);margin-bottom:var(--header-mb)"
>
	<div class="top-0 z-10 h-16 pt-6" style="position:var(--header-position)">
		<div
			class="top-[var(--header-top,theme(spacing.6))] w-full sm:px-8"
			style="position:var(--header-inner-position)"
		>
			<div class="mx-auto w-full max-w-7xl lg:px-8">
				<div class="relative px-4 sm:px-8 lg:px-12">
					<div class="mx-auto max-w-2xl lg:max-w-5xl">
						<div class="relative flex justify-center md:gap-4">
							<div class="flex flex-1">
								<div
									class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
								>
									<a aria-label="Home" class="pointer-events-auto" href="/"
										><enhanced:img
											src="/static/avatar.jpg"
											alt="Avatar headshot of Jamie Whelpton"
											class="h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
											sizes="2.25rem"
										/></a
									>
								</div>
							</div>
							<div class="flex flex-1 justify-center">
								{@render Navigation()}
							</div>
							<div class="flex flex-1 justify-end">
								<div class="pointer-events-auto">
									<ThemeToggle />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
