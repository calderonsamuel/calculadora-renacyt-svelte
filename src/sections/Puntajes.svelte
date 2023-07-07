<script lang="ts">
    import Plotly from "$lib/Plotly.svelte";
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
        },
        legend: {
            orientation: "h",
            // x: 0.3,
            y: 1.1,
            traceorder: "normal"
        },
        margin: {
            t: 0
        }
    } 
    
    let config = {
        displayModeBar: false,
        responsive: true
    }

    $: {

        let puntajeGrado = $formacionGrado

        let puntajeArticulos = ($produccionQ1*5) + ($produccionQ2*4) + ($produccionQ3*3) + ($produccionQ4*2)
        let puntajeConference = $produccionConf > 10 ? 10 : $produccionConf
        let puntajePatentes = ($produccionPatenteInvencion*3) + ($produccionPatenteModelo)
        let sumaLibros = ($produccionLibros * 2) + ($produccionCapitulos)
        let puntajeLibros = sumaLibros > 10 ? 10 : sumaLibros
        let puntajeProduccion = puntajeArticulos + puntajeConference + puntajePatentes + puntajeLibros

        let sumaAsesoria = ($asesoriaPregrado * 0.5) + ($asesoriaMaestria * 1) + ($asesoriaDoctorado * 2)
        let puntajeAsesoria = sumaAsesoria > 10 ? 10 : sumaAsesoria

        traceFormacion = makeTrace(puntajeGrado, "Formación")
        traceProduccion = makeTrace(puntajeProduccion, "Producción")
        traceAsesoria = makeTrace(puntajeAsesoria, "Asesoría") 
        
        data = [traceFormacion, traceProduccion, traceAsesoria]
    }

</script>

<Plotly  {data} {layout} {config}/>

<div class="row">
    <div class="col-12 col-lg-6">
        {#each values as element}
            <div class="w-100">{element.nm}: {element.val}</div>    
        {/each}
    </div>
    <div class="col-12 col-lg-6">
        <!-- <Plotly  {data} {layout} {config}/> -->
    </div>
</div>


