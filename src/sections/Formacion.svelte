<script lang="ts">
    import InputSelect from "../components/InputSelect.svelte";
    import AccordionItem from "../components/AccordionItem.svelte";
    import { formacionGrado } from "$lib/stores/SelectionStore";

    export let parentId: string;
</script>

<AccordionItem {parentId} itemId="formacion" expanded={true}>
    <span slot="header">
        <i class="bi bi-bank"></i>
        Formación
    </span>
    <div  slot="body">
        <InputSelect 
            id = "grado-academico" 
            label = "A. Grado académico (registrado en SUNEDU o MINEDU)" 
            options = {[
                {value: 0, label: "Ninguno"},
                {value: 1, label: "Estudiante matriculado"},
                {value: 2, label: "Bachiller o egresado"},
                {value: 4, label: "Título profesional"},
                {value: 6, label: "Magister"},
                {value: 10, label: "Doctor"}
            ]} 
            bind:selected = {$formacionGrado}
        />
    </div>
</AccordionItem>