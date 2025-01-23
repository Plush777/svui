<script lang="ts">
	import Table from '$components/common/Table.svelte';
	import Title from '$components/common/Title.svelte';
	import Section from '$components/common/Section.svelte';
	import { page } from '$app/stores';
	import { getLastPath } from '$utils/path.js';

	const lastPath = getLastPath($page.url.pathname);
</script>

<Title textClassName="text-3xl" styleClassName="" title={lastPath} />

<Section title="Heading">
	{#snippet content()}
		<Table styleClassName="default">
			{#snippet caption()}
				해당 테이블은 Heading, Example 정보를 제공합니다.
			{/snippet}

			{#snippet colgroup()}
				<col style="width: 200px" />
				<col style="width: auto" />
			{/snippet}

			{#snippet thead()}
				<tr>
					<th scope="col" class="text-left font-bold">Heading</th>
					<th scope="col" class="text-left font-bold">Example</th>
				</tr>
			{/snippet}

			{#snippet tbody()}
				<tr>
					<td class="text-sm">
						<code>&lt;h1&gt;&lt;/h1&gt;</code>
					</td>
					<td class="text-[40px] font-medium">
						<p>h1. Svelte ui heading</p>
					</td>
				</tr>
				<tr>
					<td class="text-sm">
						<code>&lt;h2&gt;&lt;/h2&gt;</code>
					</td>
					<td class="text-[32px] font-medium">
						<p>h2. Svelte ui heading</p>
					</td>
				</tr>
				<tr>
					<td class="text-sm">
						<code>&lt;h3&gt;&lt;/h3&gt;</code>
					</td>
					<td class="text-[28px] font-medium">
						<p>h3. Svelte ui heading</p>
					</td>
				</tr>
				<tr>
					<td class="text-sm">
						<code>&lt;h4&gt;&lt;/h4&gt;</code>
					</td>
					<td class="text-[24px] font-medium">
						<p>h4. Svelte ui heading</p>
					</td>
				</tr>
			{/snippet}
		</Table>
	{/snippet}
</Section>

<style>
	th {
		border-bottom: 1px solid var(--gray1);
		color: var(--black2);
	}

	td {
		border-bottom: 1px solid var(--gray1);
	}
</style>
