<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { 
        puntajeFormacion, puntajeProduccion, puntajeAsesoria, puntajeTotal
    } from "$lib/stores/SelectionStore";
    import ScorePlot from './ScorePlot.svelte';
    import AllScores from './AllScores.svelte';

    

</script>

<h4>Resultado</h4>

<div in:fly|global={{ y: -50, duration: 500 }} out:fade|global={{duration: 250}}>
    {#if $puntajeTotal === 0}
        <p>Ingresa tu información para actualizar el resultado en vivo</p>
    {/if}
</div>

<!-- {#if puntajeTotal === 0}
    <p in:fly={{ y: -50, duration: 500 }} out:fade={{duration: 250}}>Ingresa tu información para actualizar el resultado en vivo</p>
{:else if puntajeProduccion === 0}
    <p>No califica: Requiere al menos un item en producción</p>
{/if} -->

<ScorePlot/>

<!-- <AllScores/> -->