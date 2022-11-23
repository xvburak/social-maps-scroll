<script>
    export let stuff
    import PrinciplesItem from "$lib/components/sections/PrinciplesItem.svelte";
</script>

<div id="principy" class="min-h-screen w-full pt-20 p-4 bg-gray text-white">
    <div class="max-w-screen-lg mx-auto">
        { #each stuff as item }
            <PrinciplesItem {item} />
        { /each }
    </div>
</div>