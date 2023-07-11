<script lang="ts">
    import Plotly from "$lib/Plotly.svelte";
    import { slide } from "svelte/transition";
    import { 
        puntajeFormacion, puntajeProduccion, puntajeAsesoria, puntajeTotal
    } from "$lib/stores/SelectionStore";

    let makeTrace = (x: number, name: string) => {
        let barFill = name == "Formación" ? "rgb(31, 119, 180)" : name == "Producción" ? "rgb(255, 127, 14)" : "rgb(44, 160, 44)"
        return {
            x: [x],
            y: [''],
            name: `${name} (${x} pts)`,
            orientation: 'h',
            type: 'bar',
            width: 0.25,
            marker: {
                color: barFill,
                opacity: 0.5,
                // line: {
                //     color: 'rgb(8,48,107)',
                //     opacity: 0.7,
                //     width: 1.5
                // }
            },
            hoverinfo: 'none',
        }
    }
    
    let traceFormacion
    let traceProduccion
    let traceAsesoria
    let data: Record<string, any>[]  
    
    let layout = {
        barmode: 'stack',
        xaxis: {
            title: {
                text: "Puntaje calculado"
            },
            range: [0, 200],
            tickvals: [0, 10, 25, 35, 50, 70, 100, 160, 200],
            ticktext: ["0", "VII", "VI", "V", "IV", "III", "II", "I", "?"],
            fixedrange: true
        },
        yaxis: {
            fixedrange: true
        },
        legend: {
            orientation: "h",
            // x: 0.3,
            y: 1.1,
            traceorder: "normal"
        },
        margin: {
            t: 0,
            l: 10,
            r: 10
        }
    } 
    
    let config = {
        displayModeBar: false,
        responsive: true
    }

    $: {
        traceFormacion = makeTrace($puntajeFormacion, "Formación")
        traceProduccion = makeTrace($puntajeProduccion, "Producción")
        traceAsesoria = makeTrace($puntajeAsesoria, "Asesoría") 
        
        data = [traceFormacion, traceProduccion, traceAsesoria]
    }

</script>

{#if $puntajeTotal > 0}
<div transition:slide>
    <Plotly {data} {layout} {config}/>
</div>
{/if}