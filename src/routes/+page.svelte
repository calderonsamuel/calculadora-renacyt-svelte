<script lang="ts">
    import AccordionItem from "../components/AccordionItem.svelte";
    import Formacion from "../sections/Formacion.svelte";
    import Produccion from "../sections/Produccion.svelte";
    import Asesoria from "../sections/Asesoria.svelte";

    import Puntajes from "../sections/Puntajes.svelte";

</script>


<div class="container-fluid">
    <div class="row">
        <div class="col-md-4 col-12">
            <div class="accordion mt-3" id="myAccordion">

                <Formacion parentId="myAccordion" />
                
                <Produccion parentId="myAccordion" />

                <Asesoria parentId="myAccordion"/>
                
            </div>
        </div>
        <div class="col-md-8 col-12 p-3 bg-secondary">
            <Puntajes />
        </div>
    </div>
</div>

