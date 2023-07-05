<svelte:head>
    <script src="https://cdn.plot.ly/plotly-2.24.1.min.js" charset="utf-8"></script>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { 
        formacionGrado,
        produccionQ1, produccionQ2, produccionQ3, produccionQ4, produccionConf,
        produccionPatenteInvencion, produccionPatenteModelo,
        produccionLibros, produccionCapitulos, produccionIndiceH,
        asesoriaPregrado, asesoriaMaestria, asesoriaDoctorado 
    } from "$lib/stores/SelectionStore";

    
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

    let makeTrace = (x: number, name: string) => {
        return {
            x: [x],
            y: [''],
            name: name,
            orientation: 'h',
            type: 'bar',
            width: 0.25
        }
    }
    
    let traceFormacion
    let traceProduccion
    let traceAsesoria
    let data
    
    
    
    let layout = {
        barmode: 'stack',
        xaxis: {
            title: {
                text: "Puntaje calculado"
            }
        },
        legend: {
            orientation: "h",
            y: 1.1,
            traceorder: "normal"
        }
    } 
    
    let config = {
        displayModeBar: false,
        responsive: true
    }

    $: {
        traceFormacion = makeTrace($formacionGrado, "Formación")
        traceProduccion = makeTrace(30, "Producción")
        traceAsesoria = makeTrace(10, "Asesoría") 
        
        data = [traceFormacion, traceProduccion, traceAsesoria]
    }

    let plotDiv;
    let Plot;
    
    onMount(() => {
        plotDiv = document.getElementById('plotDiv');
        Plotly.react(plotDiv, data, layout, config);
    })

    // $: {
    //     Plotly.react(plotDiv, data, layout, config);
    // }

</script>

<div class="row">
    <div class="col-12 col-lg-6">
        {#each values as element}
            <div class="w-100">{element.nm}: {element.val}</div>    
        {/each}
    </div>
    <div class="col-12 col-lg-6">
        <div id="plotDiv"></div>
    </div>
</div>


