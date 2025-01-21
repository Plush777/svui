<script lang="ts">
	import Icon from '$components/icon/index.svelte';
	import SvgGithub from '$components/icon/github.svelte';
</script>

<header class="h-[4.5rem] border-b border-solid border-gray1 bg-white1">
	<div class="flex size-full items-center justify-between pe-10 ps-10">
		<a href="/" class="flex h-full items-center gap-x-2.5">
			<img src="/images/logo/logo-svelte.png" class="w-8" alt="svelte logo" />
			<span class="text-2xl font-semibold uppercase text-black1">svui</span>
		</a>

		<a href="https://github.com/Plush777/svui" target="_blank">
			<Icon width="28" height="28">
				<SvgGithub />
			</Icon>
			<span class="sr-only">깃허브 새 창으로 이동</span>
		</a>
	</div>
</header>
