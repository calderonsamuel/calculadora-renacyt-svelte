<script lang="ts">
    import AccordionItem from "../components/AccordionItem.svelte";
    import InputNumber from "../components/InputNumber.svelte";

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
            value={0}
            min={0}
        />
        <InputNumber 
            id="asesoria-maestria"
            label="Magister"
            value={0}
            min={0}
        />
        <InputNumber 
            id="asesoria-doctorado"
            label="Doctor"
            value={0}
            min={0}
        />
    </div>

</AccordionItem>