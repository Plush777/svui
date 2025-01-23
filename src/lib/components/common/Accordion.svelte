<script lang="ts">
	let { head, details } = $props();

	let open = $state(false);
	import { slide } from 'svelte/transition';

	const handleClick = () => (open = !open);
</script>

<div class="accordion max-w-accordion">
	<div class="accordion-header p-accordion h-accordion flex items-center">
		<button
			class="accordion-text text-accordion flex h-full flex-1 items-center font-semibold"
			onclick={() => handleClick()}
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

<style>
	.accordion-header {
		border-bottom: 1px solid var(--gray1);
	}

	.accordion-header-text {
		color: var(--black2);
	}

	.accordion-details {
		color: var(--gray2);
		border-bottom: 1px solid var(--gray1);
	}

	/* div.accordion {
		margin: 1rem 0;
	}

	div.header {
		display: flex;
		width: 100%;
	}

	div.header .text {
		flex: 1;
		margin-right: 5px;
	}

	div.details {
		background-color: #cecece;
		padding: 1rem;
	} */
</style>
