<script>
    import {
        slide, fade
    } from "svelte/transition";

    export let item
    let isOpen = false
    const toggle = () => isOpen = !isOpen
</script>
    <button class="bg-white mb-4 p-4 rounded-md w-full" on:click={toggle} aria-expanded={isOpen}>
        <div class="flex justify-between w-full text-black text-m mb-4">
            <p class=" mb-0 text-left">{item.title}</p>
            {#if isOpen}
                <p class="mb-0">×</p>
            {:else}
                <p class="mb-0">+</p>
            {/if}
            
        </div>
        <div class="text-gray text-s text-left  " class:hidden={isOpen}>
            <p class="mb-0">{@html item.text.substring(0,240)}...</p>
        </div>

        <div class="text-gray text-s text-left  " class:hidden={!isOpen}>
            <p class="mb-0">{@html item.text}</p>
        </div>


    </button>
