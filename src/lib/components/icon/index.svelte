<script lang="ts">
    let { width, height, children } = $props();
</script>

<svg width={width} height={height} viewBox={`0 0 1024 1024`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {@render children()}
</svg>
    