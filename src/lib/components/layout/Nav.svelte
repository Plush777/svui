<script lang="ts">
    import Link from "./Link.svelte";
    import { page } from '$app/stores';

    const menus = [
        {
            category: 'Content',
            item: ['Typography','Icons','Tables','Figures']
        },
        {
            category: 'Components',
            item: ['Buttons','Breadcrumb','Popup', 'Alert', 'Tab', 'Pagination', 'Card', 'Accordion', 'Spinners', 'DropDowns']
        },
        {
            category: 'Forms',
            item: ['Input box','Select','Check & radios']
        }
    ].map(menu => ({
        ...menu,
        item: [...menu.item].sort()
    }))
</script>

<aside class="w-220 h-full ">
    <div class="navScroll p-nav h-full overflow-y-auto">
        <div>
            <ul class="h-full navScrollList">
                {#each menus as oneDepth, index}
                    {@const categoryId = oneDepth.category.toLowerCase()}
                    

                    <li class="navOneDepth">
                        <button type="button" class=" text-xl font-semibold mb-1.5 " id={categoryId}>{oneDepth.category}</button>
                        <ul>
                            {#each oneDepth.item as twoDepth, index}
                                {@const link = `/${categoryId}`}

                                <li class="p-navItem flex items-center">
                                    <Link path={link} isActive={link === $page.url.pathname ? 'active' : ''}>{twoDepth}</Link>
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
</style>