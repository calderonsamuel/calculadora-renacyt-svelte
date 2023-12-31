<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { 
        puntajeFormacion, puntajeProduccion, puntajeAsesoria, produccionIndiceH, puntajeTotal, sumaLibrosCapitulos, produccionConf
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

{#if $puntajeTotal === 0}
    <p class="mb-1" transition:fly={flyParams}><i class="bi bi-info-square-fill text-info pe-2"></i>Ingresa tu información para actualizar el resultado en vivo</p>
{:else}
    {#each checks as check}
        {#if !check.passes}
            <p class="mb-1 text-danger" transition:fly={flyParams}><i class="bi bi-dash-square-fill pe-2"></i>No califica: {check.msg}</p>
        {/if}
    {/each}
    {#if checks.every(x => x.passes)}
    <p class="mb-1 text-success" transition:fly={flyParams}><i class="bi bi-check-square-fill pe-2"></i>Sí califica. El gráfico muestra el nivel alcanzado. Se asume que al menos un ítem de producción es de los últimos tres años</p>
        {#if $puntajeTotal >= 200 && $produccionIndiceH == 1}
        <p class="mb-1 text-success" transition:fly={flyParams}><i class="bi bi-check-square-fill pe-2"></i>¡FELICIDADES! Investigador distinguido</p>
        {/if}
    {/if}
    {#if $sumaLibrosCapitulos >= 10}
        <p class="mb-1 text-info" transition:fly={flyParams}><i class="bi bi-info-square-fill pe-2"></i>Libros y capítulos aportan un máximo de 10 pts.</p>
    {/if}
    {#if $puntajeAsesoria >= 10}
        <p class="mb-1 text-info" transition:fly={flyParams}><i class="bi bi-info-square-fill pe-2"></i>Asesorías aportan un máximo de 10 pts.</p>
    {/if}
    {#if $produccionConf >= 10}
    <p class="mb-1 text-info" transition:fly={flyParams}><i class="bi bi-info-square-fill pe-2"></i>Conference Proceedings aportan un máximo de 10 pts.</p>
    {/if}

{/if}


<ScorePlot/>

<div class="callout callout-warning row d-flex">
    <div class="col-auto p-1">
        <i class="bi bi-exclamation-square-fill text-warning fs-3"></i>
    </div>
    <div class="col align-self-center">
        <p class="my-1">Recuerda que los resultados de esta calculadora no son vinculantes para CONCYTEC.</p>
        <p class="my-1 text-muted">
            Programada por <a class="text-muted" href="https://www.samuelenrique.com">Samuel Calderon Serrano</a> 
            con base en la <a class="text-muted" href="https://servicio-renacyt.concytec.gob.pe/normativas/guia/">Normativa RENACYT</a>.
            Reporta errores o sugerencias <a class="text-muted" href="https://github.com/calderonsamuel/calculadora-renacyt-svelte/issues">aquí</a>
        </p>
    </div>
</div>

<!-- <AllScores/> -->

<style>
    .callout {
        padding: 1.25rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        border: 1px solid #e9ecef;
        border-left-width: .25rem;
        border-radius: .25rem;
    }

    .callout-warning {
    border-left-color: #f0ad4e;
}
</style>