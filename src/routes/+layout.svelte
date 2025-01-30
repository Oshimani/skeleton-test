<script lang="ts">
	import '../app.css';
	import { autoModeWatcher, LightSwitch } from '@skeletonlabs/skeleton';

	let { children } = $props();

	const themes = [
		{ name: 'crimson', enhancements: true },
		{ name: 'gold-nouveau', enhancements: true },
		{ name: 'hamlindigo', enhancements: true },
		{ name: 'modern', enhancements: true },
		{ name: 'rocket', enhancements: true },
		{ name: 'sahara', enhancements: true },
		{ name: 'seafoam', enhancements: true },
		{ name: 'skeleton', enhancements: true },
		{ name: 'vintage', enhancements: true },
		{ name: 'wintry', enhancements: true }
	];
	let theme = $state('skeleton');

	$effect(() => {
		console.log(theme);
		switchTheme(theme);
	});

	// Function to switch the theme and save it to local storage
	function switchTheme(theme: string) {
		document.body.setAttribute('data-theme', theme);
	}
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>

<main class="space-y-8 px-16 py-8">
	<header class="flex items-center justify-between">
		<h1 class="h1">Playing with Skeleton & CVA</h1>

		<aside
			class="bg-surface-100-800-token flex items-center gap-4 px-8 py-4 shadow-xl rounded-container-token"
		>
			<!-- DARK MODE TOGGLE -->
			<LightSwitch />

			<!-- THEME SWITCH -->
			<label>
				<select class="select" bind:value={theme}>
					{#each themes as theme}
						<option value={theme.name}>{theme.name}</option>
					{/each}
				</select>
			</label>
		</aside>
	</header>
	{@render children()}
</main>
