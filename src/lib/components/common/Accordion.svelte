<script lang="ts">
	import { slide } from 'svelte/transition';

	let { head, details, openType = 'independent', index, groupOpenIndex } = $props();

	let open = $state(false);

	const handleClick = () => {
		if (openType === 'default') {
			// If not already open, set the group's open index to this index
			groupOpenIndex = groupOpenIndex === index ? -1 : index;
		} else {
			// Independent mode
			open = !open;
		}
	};

	// Update open state based on groupOpenIndex for default mode
	$effect(() => {
		if (openType === 'default') {
			open = groupOpenIndex === index;
		}
	});
</script>

<div class="accordion max-w-accordion">
	<div class="accordion-header h-accordion flex items-center">
		<button
			class="accordion-text p-accordion text-accordion flex h-full flex-1 items-center font-semibold"
			onclick={handleClick}
		>
			<div class="accordion-header-text accordion-text flex flex-1 items-center">
				{#if head}
					{@render head()}
				{/if}
			</div>

			<span class="font-bold">{open ? '-' : '+'}</span>
		</button>
	</div>

	{#if open}
		<div class="accordion-details p-accordion text-accordionDetails" transition:slide>
			{#if details}
				{@render details()}
			{/if}
		</div>
	{/if}
</div>
