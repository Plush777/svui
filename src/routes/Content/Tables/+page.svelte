<script lang="ts">
	import Table from '$components/common/Table.svelte';
	import Title from '$components/common/Title.svelte';
	import Section from '$components/common/Section.svelte';
	import { page } from '$app/stores';
	import { getLastPath } from '$utils/path.js';

	const lastPath = getLastPath($page.url.pathname);

	interface TableColData {
		thead: string[];
		tbody: string[][];
	}

	interface TableRowData {
		tbody: string[];
	}

	const data: TableColData[] = [
		{
			thead: ['#', 'First', 'Last', 'Handle'],
			tbody: [
				['Mark', 'Otto', '@mdo'],
				['Jacob', 'Thornton', '@fat'],
				['Larry the Bird', '', '@twitter']
			]
		}
	];

	const data2: TableRowData[] = [
		{
			tbody: ['th1', 'td1', 'th1', 'td1']
		},
		{
			tbody: ['th1', 'td1', 'th1', 'td1']
		},
		{
			tbody: ['th1', 'td1', 'th1', 'td1']
		},
		{
			tbody: ['th1', 'td1', 'th1', 'td1']
		}
	];
</script>

<Title textClassName="text-3xl" styleClassName="" title={lastPath} />

<Section title="Col">
	{#snippet content()}
		<Table styleClassName="default">
			{#snippet caption()}
				해당 테이블은 First, Last, Handle 정보를 제공합니다.
			{/snippet}

			{#snippet colgroup()}
				<col style="width: 74px" />
				<col style="width: 200px" />
				<col style="width: 200px" />
				<col style="width: auto" />
			{/snippet}

			{#snippet thead()}
				<tr>
					{#each data[0].thead as header}
						<th scope="col" class="text-center text-lg font-bold">
							{header}
						</th>
					{/each}
				</tr>
			{/snippet}

			{#snippet tbody()}
				{#each data[0].tbody as row, rowIndex}
					<tr>
						<td class="text-center">
							{rowIndex + 1}
						</td>
						{#each row as cell}
							<td class="text-center">
								{cell}
							</td>
						{/each}
					</tr>
				{/each}
			{/snippet}
		</Table>
	{/snippet}
</Section>

<Section title="Row">
	{#snippet content()}
		<Table thead="" styleClassName="default">
			{#snippet caption()}
				해당 테이블은 th1, th2, th3, th4, th5, th6 정보를 제공합니다.
			{/snippet}

			{#snippet colgroup()}
				<col style="width: 150px" />
				<col style="width: auto" />
				<col style="width: 150px" />
				<col style="width: auto" />
			{/snippet}

			{#snippet tbody()}
				{#each data2[0].tbody as row}
					<tr>
						<th class="text-left">{row}</th>
						<td class="text-left">{row} </td>
						<th class="text-left">{row}</th>
						<td class="text-left">{row} </td>
					</tr>
				{/each}
			{/snippet}
		</Table>
	{/snippet}
</Section>
