<script lang="ts">
	let { content, title } = $props();

	import Title from '$components/common/Title.svelte';
</script>

<section class={`section mb-16 flex flex-col gap-y-5`}>
	<Title {title} styleClassName=" " />

	{#if content}
		{@render content()}
	{/if}
</section>

<style>
	.section:first-of-type {
		margin-top: 40px;
	}

	.section:last-of-type {
		margin-bottom: 0;
	}
</style>
