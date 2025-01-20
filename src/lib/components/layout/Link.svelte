<script lang="ts">
let { path, isActive, children } = $props();
</script>

<a href={path} class={`navItem ${isActive}`}>
    {@render children()}
</a>