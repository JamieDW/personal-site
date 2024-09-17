<script>
	export let title;
	export let intro;
</script>

<div class="mt-16 sm:mt-32 sm:px-8">
	<div class="mx-auto w-full max-w-7xl lg:px-8">
		<div class="relative mt-16 px-4 sm:mt-32 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<header class="max-w-2xl">
					<h1
						class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
					>
						{title}
					</h1>
					<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						{intro}
					</p>
				</header>
				<div class="mt-16 sm:mt-20">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</div>
