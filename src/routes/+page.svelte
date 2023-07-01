<script lang="ts">
    import InputSelect from "../components/InputSelect.svelte";
    import AccordionItem from "../components/AccordionItem.svelte";
    import Formacion from "../sections/Formacion.svelte";

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
        <div class="col-md-4 col-12">
            <div class="accordion mt-3" id="myAccordion">

                <Formacion parentId="myAccordion" />
                
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

