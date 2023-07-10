<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { 
        puntajeFormacion, puntajeProduccion, puntajeAsesoria, puntajeTotal
    } from "$lib/stores/SelectionStore";
    import ScorePlot from './ScorePlot.svelte';
    import AllScores from './AllScores.svelte';

    let checks: {passes: boolean; msg: string}[];

    $: {
        checks = [
            {passes: $puntajeProduccion > 0, msg: "Requiere al menos un ítem en Producción"},
            {passes: $puntajeFormacion == 1 ? $puntajeProduccion >= 9 : true, msg: "Estudiantes requieren 9 puntos en Producción"},
            {passes: $puntajeFormacion > 1 ? $puntajeProduccion >= 6 : true, msg: "Requiere al menos 6 puntos en Producción"},
            {passes: $puntajeTotal >= 10, msg: "Requiere al menos 10 de puntaje total"}
        ]
    }

    let flyParams = { y: -30, duration: 500 }

</script>

<h3>Resultado</h3>

<p transition:fly={flyParams} class="text-muted"><i class="bi bi-exclamation-square-fill text-warning pe-2"></i>Recuerda que los resultados de esta calculadora no son vinculantes para CONCYTEC</p>

{#if $puntajeTotal === 0}
    <p class="mb-1" transition:fly={flyParams}><i class="bi bi-info-square-fill text-info pe-2"></i>Ingresa tu información para actualizar el resultado en vivo</p>
{:else}
    {#each checks as check}
        {#if !check.passes}
            <p class="mb-1  text-danger" transition:fly={flyParams}><i class="bi bi-dash-square-fill pe-2"></i>No califica: {check.msg}</p>
        {/if}
    {/each}
{/if}


<ScorePlot/>

<!-- <AllScores/> -->