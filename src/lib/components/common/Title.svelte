<script lang="ts">
	let { title, styleClassName, textClassName = 'text-xl' } = $props();
</script>

{#if title}
	<div class={styleClassName}>
		<h2 class={`title-text ${textClassName} font-bold`}>{title}</h2>
	</div>
{/if}

<style>
	.title {
		color: var(--black1);
	}
</style>
