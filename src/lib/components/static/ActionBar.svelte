<script>
    export let link
    export let copy
</script>

<div class="action p-1 bg-purple fixed text-xl flex flex-col justify-center z-[90]  bottom-0 w-full">  
    <div class="w-full">
        <a class="text-center block" href="{link}"> {copy}</a>
    </div> 
</div>

<style>
    .action {
        height: max-content;
    }
</style>