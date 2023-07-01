<script lang="ts">
    import InputSelect from "../components/InputSelect.svelte";

    let selectors = [
        {
            id: "selector-1",
            label: "my-selector",
            options: [
                {value: "1", label: "one"},
                {value: "2", label: "two"},
                {value: "3", label: "three"}
            ]
        }
    ]
</script>


<div class="container-fluid">
    <div class="row">
        <div class="col-md-4 col-12 bg-primary">
            {#each selectors as selector (selector.id)}
                <InputSelect id = {selector.id} label = {selector.label} options = {selector.options}/>
            {/each}
        </div>
        <div class="col-md-8 col-12 bg-secondary">Bye</div>
    </div>
</div>

