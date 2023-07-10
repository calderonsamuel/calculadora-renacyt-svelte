<script lang="ts">
    import InputSelect from "../components/InputSelect.svelte";
    import AccordionItem from "../components/AccordionItem.svelte";
    import { formacionGrado } from "$lib/stores/SelectionStore";

    export let parentId: string;
</script>

<AccordionItem {parentId} itemId="formacion" expanded={true}>
    <span slot="header" class="fs-5">
        <i class="bi bi-bank"></i>
        Formación
    </span>
    <div  slot="body">
        <InputSelect 
            id = "grado-academico" 
            label = "A. Grado académico (registrado en SUNEDU o MINEDU)" 
            options = {[
                {value: 0, label: "Ninguno-0pts"},
                {value: 1, label: "Estudiante matriculado-1pt"},
                {value: 2, label: "Bachiller o egresado-2pts"},
                {value: 4, label: "Título profesional-4pts"},
                {value: 6, label: "Magister-6 pts"},
                {value: 10, label: "Doctor-10 pts"}
            ]} 
            bind:selected = {$formacionGrado}
        />
    </div>
</AccordionItem>