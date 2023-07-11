<script lang="ts">
    import Plotly from "$lib/Plotly.svelte";
    import { slide } from "svelte/transition";
    import { 
        puntajeFormacion, puntajeProduccion, puntajeAsesoria, puntajeTotal
    } from "$lib/stores/SelectionStore";

    const makeTrace = (x: number, name: string) => {
        let barFill = name == "Formación" ? "rgb(31, 119, 180)" : name == "Producción" ? "rgb(255, 127, 14)" : "rgb(44, 160, 44)"
        return {
            x: [x],
            y: [''],
            name: `${name} (${x} pt${x == 1 ? '': 's'})`,   // 0pts, 1pt, 2pts, etc
            orientation: 'h',
            type: 'bar',
            width: 0.25,
            marker: {
                color: barFill,
                opacity: 0.5
            },
            hoverinfo: 'none',
        }
    }

    const computeRange = (x: number) => Math.ceil(x/25) * 25 + 10
    
    $: traceTotal = {
        x: [$puntajeTotal + 1],
        y: [''],
        mode: 'text',
        text: [`Total: ${$puntajeTotal} pt${$puntajeTotal == 1 ? '': 's'}`],
        type: 'scatter',
        showlegend: false
    }
    
    $: data = [
        makeTrace($puntajeFormacion, "Formación"),
        makeTrace($puntajeProduccion, "Producción"),
        makeTrace($puntajeAsesoria, "Asesoría"),
        traceTotal
    ]
    
    $: layout = {
        barmode: 'stack',
        xaxis: {
            title: {
                text: "Nivel alcanzado"
            },
            range: [0, computeRange($puntajeTotal)],
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

</script>

{#if $puntajeTotal > 0}
<div transition:slide>
    <Plotly {data} {layout} {config}/>
</div>
{/if}