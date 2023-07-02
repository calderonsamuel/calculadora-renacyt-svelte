<script lang="ts">
    import { asesoriaPregrado, asesoriaMaestria, asesoriaDoctorado } from "../lib/stores/SelectionStore";
    
    interface inputTypes {nm: string, val: number}
    
    let values: inputTypes[] = []

    $: {
        values = [
            {nm: "Asesoria de pregrado", val: $asesoriaPregrado},
            {nm: "Asesoria de maestria", val: $asesoriaMaestria},
            {nm: "Asesoria de doctorado", val: $asesoriaDoctorado}
        ]
    }
</script>

{#each values as element}
    <div>{element.nm}: {element.val}</div>    
{/each}