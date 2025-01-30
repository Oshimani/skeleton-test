<script lang="ts">
	import Button from '$lib/button.component.svelte';
	import {
		intents,
		variants,
		sizes,
		type Intent,
		type Variant,
		type Size
	} from '$lib/design-system.js';

	let intent = $state<Intent>('primary');
	let variant = $state<Variant>('filled');
	let size = $state<Size>('md');
	let showAllFrom = $state('intent');
</script>

<h2 class="h2">Buttons</h2>

<section class="flex gap-4">
	<!-- INTENT -->
	<div class="bg-surface-100-800-token flex flex-col space-y-2 px-8 py-4 rounded-container-token">
		<h3 class="h3">Intent</h3>
		{#each intents as intentOption}
			<label class="flex items-center space-x-2">
				<input
					disabled={showAllFrom === 'intent'}
					class="radio"
					type="radio"
					name="radio-intent"
					value={intentOption}
					bind:group={intent}
				/>
				<p>{intentOption}</p>
			</label>
		{/each}

		<div class="flex-grow border-b-2"></div>

		<label class="flex items-center space-x-2">
			<input
				class="radio"
				type="radio"
				name="radio-show-all"
				value={'intent'}
				bind:group={showAllFrom}
			/>
			<p>Show all</p>
		</label>
	</div>

	<!-- VARIANT -->
	<div class="bg-surface-100-800-token flex flex-col space-y-2 px-8 py-4 rounded-container-token">
		<h3 class="h3">Variant</h3>
		{#each variants as variantOption}
			<label class="flex items-center space-x-2">
				<input
					disabled={showAllFrom === 'variant'}
					class="radio"
					type="radio"
					name="radio-variant"
					value={variantOption}
					bind:group={variant}
				/>
				<p>{variantOption}</p>
			</label>
		{/each}

		<div class="flex-grow border-b-2"></div>

		<label class="flex items-center space-x-2">
			<input
				class="radio"
				type="radio"
				name="radio-show-all"
				value={'variant'}
				bind:group={showAllFrom}
			/>
			<p>Show all</p>
		</label>
	</div>

	<!-- SIZE -->
	<div class="bg-surface-100-800-token flex flex-col space-y-2 px-8 py-4 rounded-container-token">
		<h3 class="h3">Size</h3>
		{#each ['sm', 'md', 'lg', 'xl'] as sizeOption}
			<label class="flex items-center space-x-2">
				<input
					disabled={showAllFrom === 'size'}
					class="radio"
					type="radio"
					name="radio-size"
					value={sizeOption}
					bind:group={size}
				/>
				<p>{sizeOption}</p>
			</label>
		{/each}

		<div class="flex-grow border-b-2"></div>

		<label class="flex items-center space-x-2">
			<input
				class="radio"
				type="radio"
				name="radio-show-all"
				value={'size'}
				bind:group={showAllFrom}
			/>
			<p>Show all</p>
		</label>
	</div>

	<!-- BUTTON -->
	<div class="bg-surface-100-800-token grow px-8 py-4 rounded-container-token">
		<h3 class="h3">Result</h3>
		<div class=" flex flex-col items-center justify-center gap-4">
			{#if showAllFrom === 'intent'}
				{#each intents as intentOption}
					<Button intent={intentOption} {variant} {size}>{intentOption}</Button>
				{/each}
			{:else if showAllFrom === 'variant'}
				{#each variants as variantOption}
					<Button {intent} variant={variantOption} {size}>{variantOption}</Button>
				{/each}
			{:else if showAllFrom === 'size'}
				{#each sizes as sizeOption}
					<Button {intent} {variant} size={sizeOption}>{sizeOption}</Button>
				{/each}
			{/if}
		</div>
	</div>
</section>
