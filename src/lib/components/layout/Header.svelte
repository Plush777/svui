<script lang="ts">
   import Icon from '$components/icon/index.svelte';
   import SvgGithub from '$components/icon/github.svelte';
</script>

<header class="h-[4.5rem] border-b border-solid border-gray1 bg-white1">
    <div class="size-full flex items-center justify-between ps-10 pe-10">
        <a href="/" class="flex items-center h-full gap-x-2.5">
            <img src="/images/logo/logo-svelte.png" class="w-8" alt="svelte logo">
            <span class="text-black1 uppercase text-2xl font-semibold">svui</span>
        </a>

        <a href="#none">
            <Icon width="28" height="28">
                <SvgGithub/>
            </Icon>
            <span class="sr-only">깃허브 새 창으로 이동</span>
        </a>
    </div>
</header>