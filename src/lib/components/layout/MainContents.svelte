<script lang="ts">
   let { children } = $props();
</script>

<div class="flex-1 h-full">
    <div class="size-full p-mainContents">
        <div class="overflow-y-auto">
            {@render children()}
        </div>
    </div>
</div>