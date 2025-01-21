<script lang="ts">
	let { path, isActive, children } = $props();
</script>

<a href={path} class={`navItem ${isActive}`}>
	{@render children()}
</a>

<style>
	.navItem.active {
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 2px;
	}
</style>
