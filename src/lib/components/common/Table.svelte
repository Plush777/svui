<script lang="ts">
	let { styleClassName, caption, colgroup, thead, tbody } = $props();
</script>

<div class="table-wrap">
	<table class={`${styleClassName}`}>
		<caption class="sr-only">
			<!-- <slot name="caption" /> -->
			{#if caption}
				{@render caption()}
			{/if}
		</caption>
		<colgroup>
			<!-- <slot name="colgroup" /> -->
			{#if colgroup}
				{@render colgroup()}
			{/if}
		</colgroup>

		{#if thead}
			<thead>
				<!-- <slot name="thead" /> -->
				{#if thead}
					{@render thead()}
				{/if}
			</thead>
		{/if}

		<tbody>
			<!-- <slot name="tbody" /> -->
			{#if tbody}
				{@render tbody()}
			{/if}
		</tbody>
	</table>
</div>
