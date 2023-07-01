<script lang="ts">
    import InputSelect from "../components/InputSelect.svelte";
    import AccordionItem from "../components/AccordionItem.svelte";

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
            <div class="accordion" id="myAccordion">
                
                <AccordionItem parentId = "myAccordion" itemId="formacion" expanded={true}>
                    <span slot="header">
                        <i class="bi bi-bank"></i>
                        Formación
                    </span>
                    <div  slot="body">
                        {#each selectors as selector (selector.id)}
                        <InputSelect id = {selector.id} label = {selector.label} options = {selector.options} />
                        {/each}
                    </div>
                </AccordionItem>
                
                <AccordionItem parentId = "myAccordion" itemId="produccion">
                    <span slot="header">
                        <i class="bi bi-book"></i>
                        Producción
                    </span>

                </AccordionItem>
                
                <AccordionItem parentId = "myAccordion" itemId="asesoria">
                    <span slot="header">
                        <i class="bi bi-person-lines-fill"></i>
                        Asesoría
                    </span>

                </AccordionItem>
            </div>
        </div>
        <div class="col-md-8 col-12 bg-secondary">
            
        </div>
    </div>
</div>

