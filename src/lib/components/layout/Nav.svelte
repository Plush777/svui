<script lang="ts">
	import Link from './Link.svelte';
	import { page } from '$app/stores';

	const menus = [
		{
			category: 'Content',
			item: ['Fonts', 'Icons', 'Tables', 'Figures']
		},
		{
			category: 'Components',
			item: [
				'Buttons',
				'Breadcrumb',
				'Popup',
				'Alert',
				'Tab',
				'Pagination',
				'Card',
				'Accordion',
				'Spinners',
				'Drop downs'
			]
		},
		{
			category: 'Forms',
			item: ['Input box', 'Select', 'Check & radios']
		}
	].map((menu) => ({
		...menu,
		item: [...menu.item].sort()
	}));

	const blank_pattern = /\s+/g; // 공백 패턴
	const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/g; // 특수문자 패턴에서 슬래시 제외

	function linkReplace(link: string): string {
		// 공백 제거 및 슬래시 제외한 특수문자 제거
		const cleanedLink = link.replace(blank_pattern, '').replace(special_pattern, '');
		return cleanedLink;
	}
</script>

<aside class="navBar h-full w-220">
	<div class="navScroll h-full overflow-y-auto p-nav">
		<div>
			<ul class="navScrollList h-full">
				{#each menus as oneDepth, index}
					{@const categoryId = oneDepth.category.toLowerCase()}

					<li class="navOneDepth">
						<span class="mb-1.5 block text-xl font-semibold" id={categoryId}
							>{oneDepth.category}</span
						>
						<ul>
							{#each oneDepth.item as twoDepth, index}
								{@const link = `/${oneDepth.category}/${linkReplace(twoDepth)}`}

								<li class="flex items-center">
									<Link path={link} isActive={link === $page.url.pathname ? 'active' : ''}
										>{twoDepth}</Link
									>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</aside>

<style>
	.navScroll::-webkit-scrollbar-thumb {
		border-radius: 0;
		background-color: var(--black1);
	}

	.navScroll::-webkit-scrollbar {
		width: 12px;
	}

	.navOneDepth:not(:last-child) {
		/* mb-9 */
		margin-bottom: 2.25rem;
	}

	.navBar {
		border-right: 1px solid var(--gray1);
	}
</style>
