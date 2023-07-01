<script lang="ts">
    import { onMount } from "svelte";


    export let id = "select-input-id";
    export let label = "";
    export let options = [{value: "", label: ""}];

    let selected = "";
    
    const updateSelected = () => {
        const element = document.getElementById(id) as HTMLInputElement;
        selected = element?.value;
    }

    onMount(updateSelected)



</script>

<div class="">
    <label for="{id}" class="me-1">{label}</label>
    <select {id} class="form-select me-2" aria-label="Default select example" on:change={updateSelected}>
        {#each options as el}
            <option value="{el.value}">{el.label}</option>
        {/each}
      </select>
</div>