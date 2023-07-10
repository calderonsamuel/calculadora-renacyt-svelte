import { derived, writable } from "svelte/store";

export const formacionGrado = writable(0)

export const produccionQ1 = writable(0)
export const produccionQ2 = writable(0)
export const produccionQ3 = writable(0)
export const produccionQ4 = writable(0)
export const produccionConf = writable(0)

export const produccionPatenteInvencion = writable(0)
export const produccionPatenteModelo = writable(0)

export const produccionLibros = writable(0)
export const produccionCapitulos = writable(0)
export const produccionIndiceH = writable(0)

export const asesoriaPregrado = writable(0)
export const asesoriaMaestria = writable(0)
export const asesoriaDoctorado = writable(0)

export const puntajeFormacion = derived(formacionGrado, ($formacionGrado) => $formacionGrado)

export const puntajeProduccion = derived(
    [
        produccionQ1, produccionQ2, produccionQ3, produccionQ4, produccionConf,
        produccionPatenteInvencion, produccionPatenteModelo,
        produccionLibros, produccionCapitulos, produccionIndiceH
    ], ([
        $produccionQ1, $produccionQ2, $produccionQ3, $produccionQ4, $produccionConf,
        $produccionPatenteInvencion, $produccionPatenteModelo,
        $produccionLibros, $produccionCapitulos, $produccionIndiceH
    ]) => {
        let puntajeArticulos = ($produccionQ1*5) + ($produccionQ2*4) + ($produccionQ3*3) + ($produccionQ4*2)
        let puntajeConference = $produccionConf > 10 ? 10 : $produccionConf        
        let puntajePatentes = ($produccionPatenteInvencion*3) + ($produccionPatenteModelo)
        let sumaLibros = ($produccionLibros * 2) + ($produccionCapitulos)
        let puntajeLibros = sumaLibros > 10 ? 10 : sumaLibros

        return puntajeArticulos + puntajeConference + puntajePatentes + puntajeLibros
    })

export const puntajeAsesoria = derived(
    [
        asesoriaPregrado, asesoriaMaestria, asesoriaDoctorado
    ], ([
        $asesoriaPregrado, $asesoriaMaestria, $asesoriaDoctorado
    ]) => {
        let sumaAsesoria = ($asesoriaPregrado * 0.5) + ($asesoriaMaestria * 1) + ($asesoriaDoctorado * 2)
        return sumaAsesoria > 10 ? 10 : sumaAsesoria
    })

export const puntajeTotal = derived(
    [
        puntajeFormacion, puntajeProduccion, puntajeAsesoria
    ], ([
        $puntajeFormacion, $puntajeProduccion, $puntajeAsesoria
    ]) => {
        return $puntajeFormacion + $puntajeProduccion + $puntajeAsesoria
    })