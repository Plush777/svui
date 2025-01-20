<script lang="ts">
    let { children } = $props();
</script>

<main class="flex items-center h-nav">
    {@render children()}
</main>