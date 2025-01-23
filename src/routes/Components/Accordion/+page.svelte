<script lang="ts">
	import Title from '$components/common/Title.svelte';
	import Section from '$components/common/Section.svelte';
	import { page } from '$app/stores';
	import { getLastPath } from '$utils/path.js';
	import Accordion from '$components/common/Accordion.svelte';

	const lastPath = getLastPath($page.url.pathname);

	// interface TableColData {
	// 	thead: string[];
	// 	tbody: string[][];
	// }

	// interface TableRowData {
	// 	tbody: string[];
	// }

	// const data: TableColData[] = [
	// 	{
	// 		thead: ['#', 'First', 'Last', 'Handle'],
	// 		tbody: [
	// 			['Mark', 'Otto', '@mdo'],
	// 			['Jacob', 'Thornton', '@fat'],
	// 			['Larry the Bird', '', '@twitter']
	// 		]
	// 	}
	// ];

	// const data2: TableRowData[] = [
	// 	{
	// 		tbody: ['th1', 'td1', 'th1', 'td1']
	// 	},
	// 	{
	// 		tbody: ['th1', 'td1', 'th1', 'td1']
	// 	},
	// 	{
	// 		tbody: ['th1', 'td1', 'th1', 'td1']
	// 	},
	// 	{
	// 		tbody: ['th1', 'td1', 'th1', 'td1']
	// 	}
	// ];
</script>

<Title textClassName="text-3xl" styleClassName="" title={lastPath} />

<Section title="">
	{#snippet content()}
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
		<Accordion>
			{#snippet head()}
				Title
			{/snippet}

			{#snippet details()}
				details
			{/snippet}
		</Accordion>
	{/snippet}
</Section>
