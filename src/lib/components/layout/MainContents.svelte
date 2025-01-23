<script lang="ts">
	let { children } = $props();
</script>

<div class="h-full flex-1">
	<div class="size-full overflow-y-auto p-mainContents">
		{@render children()}
	</div>
</div>
