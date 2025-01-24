<script lang="ts">
	import Title from '$components/common/Title.svelte';
	import Section from '$components/common/Section.svelte';
	import { page } from '$app/stores';
	import { getLastPath } from '$utils/path.js';
	import Accordion from '$components/common/Accordion.svelte';

	const lastPath = getLastPath($page.url.pathname);

	let groupOpenIndex = $state(-1);

	const accordions = [
		{
			id: 1,
			head: () => 'Title 1',
			details: () => 'Details 1',
			openType: 'default'
		},
		{
			id: 2,
			head: () => 'Title 2',
			details: () => 'Details 2',
			openType: 'default'
		}
	];
</script>

<Title textClassName="text-3xl" styleClassName="" title={lastPath} />

<Section title="Default">
	{#snippet content()}
		<div>
			{#each accordions as accordion, i (accordion.id)}
				<Accordion openType="default" {...accordion} {groupOpenIndex} index={i}>
					{#snippet head()}
						{accordion.head}
					{/snippet}

					{#snippet details()}
						{accordion.details}
					{/snippet}
				</Accordion>
			{/each}
		</div>
	{/snippet}
</Section>

<Section title="Multiple">
	{#snippet content()}
		<div>
			<Accordion>
				{#snippet head()}
					Title
				{/snippet}

				{#snippet details()}
					details
				{/snippet}
			</Accordion>
			<Accordion>
				{#snippet head()}
					Title
				{/snippet}

				{#snippet details()}
					details
				{/snippet}
			</Accordion>
		</div>
	{/snippet}
</Section>
