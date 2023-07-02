<script lang="ts">
    import AccordionItem from "../components/AccordionItem.svelte";
    import InputNumber from "../components/InputNumber.svelte";

    import { asesoriaPregrado, asesoriaMaestria, asesoriaDoctorado } from "../lib/stores/SelectionStore";

    export let parentId: string;

</script>

<AccordionItem {parentId} itemId="asesoria">
    <span slot="header">
        <i class="bi bi-person-lines-fill"></i>
        Asesoría
    </span>
    <div slot="body">
        <InputNumber 
            id="asesoria-pregrado"
            label="Bachiller o título profesional"
            bind:value={$asesoriaPregrado}
            min={0}
        />
        <InputNumber 
            id="asesoria-maestria"
            label="Magister"
            bind:value={$asesoriaMaestria}
            min={0}
            />
            <InputNumber 
            id="asesoria-doctorado"
            label="Doctor"
            bind:value={$asesoriaDoctorado}
            min={0}
        />
    </div>

</AccordionItem>