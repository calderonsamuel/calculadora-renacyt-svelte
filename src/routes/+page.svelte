<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import InputSelect from './components/InputSelect.svelte';

    let btnStyles = [
        "btn-primary",
        "btn-secondary",
        "btn-danger",
        "btn-warning"
    ]
</script>


<div class="container-fluid">
    <div class="row">
        <div class="col-md-4 col-12 bg-primary">Hello</div>
        <div class="col-md-8 col-12 bg-secondary">Bye</div>
    </div>
    {#each btnStyles as btnStyle}
        <InputSelect {btnStyle}/>
    {/each}
</div>

