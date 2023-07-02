<script lang="ts">
    import AccordionItem from "../components/AccordionItem.svelte";
    import InputNumber from "../components/InputNumber.svelte";
    import InputSelect from "../components/InputSelect.svelte";

    import { 
        produccionQ1, produccionQ2, produccionQ3, produccionQ4, produccionConf,
        produccionPatenteInvencion, produccionPatenteModelo,
        produccionLibros, produccionCapitulos, produccionIndiceH
    } from "$lib/stores/SelectionStore";

    export let parentId: string;
</script>

<AccordionItem {parentId} itemId="produccion">
    <span slot="header">
        <i class="bi bi-book"></i>
        Producción
    </span>
    <div slot="body">
        <h6>B. Artículos científicos en revistas indizadas</h6>
        <p class="mt-3">Nº de Art. cient. Scopus o Web of Science (Scimago o JCR)</p>
        <div class="row mt-1 px-2">
            <InputNumber 
                id="produccion-q1"
                label="Q1"
                bind:value={$produccionQ1}
                min={0}
                inputClass="col px-1"
            />
            <InputNumber 
                id="produccion-q2"
                label="Q1"
                bind:value={$produccionQ2}
                min={0}
                inputClass="col px-1"
            />
            <InputNumber 
                id="produccion-q2"
                label="Q3"
                bind:value={$produccionQ3}
                min={0}
                inputClass="col px-1"
            />
            <InputNumber 
                id="produccion-q2"
                label="Q4"
                bind:value={$produccionQ4}
                min={0}
                inputClass="col px-1"
            />
        </div>
        <p class="mt-3">Conference Proceeding (Scopus o WoS)/Scielo</p>
        <InputNumber 
            id="produccion-conference"
            label="Nº"
            bind:value={$produccionConf}
            min={0}
        />

        <h6 class="mt-3">C. Registros de propiedad intelectual, concedidas y registradas en INDECOPI, SCOPUS u otras</h6>
        <InputNumber 
            id="produccion-pat-inv"
            label="Patente de invención o Certificado de Obtentor o Paquete Tecnológico"
            bind:value={$produccionPatenteInvencion}
            min={0}
        />
        <div class="row">
            <div class="col">
                <InputNumber 
                id="produccion-pat-mod"
                label="Patente de modelo de utilidad o certificado de derecho de autor por software"
                bind:value={$produccionPatenteModelo}
                min={0}
                />
            </div>
        </div>
        
        <h6>D. Publicaciones de libros y/o capítulos de libro indizados</h6>
        <InputNumber 
            id="produccion-libros"
            label="Nº de libros"
            bind:value={$produccionLibros}
            min={0}
        />
        <InputNumber 
            id="produccion-capitulos"
            label="Nº de capítulos de libro"
            bind:value={$produccionCapitulos}
            min={0}
        />

        <h6>E. Índice H Scopus</h6>
        <InputSelect
            id="produccion-h"
            label="¿Valor del índice H > 10?"
            options={[
                {value: 0, label: "No"},
                {value: 1, label: "Sí"}
            ]}
            bind:selected={$produccionIndiceH}
        />
        
    </div>
</AccordionItem>