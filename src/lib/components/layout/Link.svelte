<script lang="ts">
	let { path, isActive, children } = $props();
</script>

<a href={path} class={`navItem flex items-center p-navItem ${isActive}`}>
	{@render children()}
</a>

<style>
	.navItem.active {
		font-weight: 700;
		color: var(--white1);
		border-radius: 4px;
		background-color: var(--gray2);
	}
</style>
