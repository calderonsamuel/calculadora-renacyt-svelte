<script lang="ts">
    import { 
        formacionGrado,
        produccionQ1, produccionQ2, produccionQ3, produccionQ4, produccionConf,
        produccionPatenteInvencion, produccionPatenteModelo,
        produccionLibros, produccionCapitulos, produccionIndiceH,
        asesoriaPregrado, asesoriaMaestria, asesoriaDoctorado 
    } from "$lib/stores/SelectionStore";

    import { onMount } from "svelte";
    
    interface inputTypes {nm: string, val: number}
    
    let values: inputTypes[] = []

    $: {
        values = [
            {nm: "Formación - grado académico", val: $formacionGrado},
            {nm: "Producción - Q1", val: $produccionQ1},
            {nm: "Producción - Q2", val: $produccionQ2},
            {nm: "Producción - Q3", val: $produccionQ3},
            {nm: "Producción - Q4", val: $produccionQ4},
            {nm: "Producción - Conf. Proceedings", val: $produccionConf},
            {nm: "Producción - Patente de invencion", val: $produccionPatenteInvencion},
            {nm: "Producción - Patente de modelo", val: $produccionPatenteModelo},
            {nm: "Producción - Libros", val: $produccionLibros},
            {nm: "Producción - Capitulos", val: $produccionCapitulos},
            {nm: "Producción - Indice H", val: $produccionIndiceH},
            {nm: "Asesoria de pregrado", val: $asesoriaPregrado},
            {nm: "Asesoria de maestria", val: $asesoriaMaestria},
            {nm: "Asesoria de doctorado", val: $asesoriaDoctorado}
        ]
    }

    onMount(() => {
        let TESTER = document.getElementById('tester');

        let data = [{
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16] 
        }]

        let layout = {
            title: {
                text: "plot",
                xanchor: "center",
                y: 0
            },
            margin: {
                b: 100
            }
        } 
        
        let config = {
            displayModeBar: false,
            responsive: true,
        }

        Plotly.newPlot( TESTER, data, layout, config);

        })

</script>

<div class="w-100" style="height: 500px;">
    <div id="tester" class="w-100" style="height:400px;"></div>
</div>


<!-- {#each values as element}
    <div class="w-100">{element.nm}: {element.val}</div>    
{/each} -->
