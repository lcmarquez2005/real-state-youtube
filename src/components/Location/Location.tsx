
"use client"

import { Map } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css';  
import { Transition } from "../Transition"
import { MarkerHouse } from "./MarkerHouse";

export function Location() {

    // const coordinatePoint = {
    //     lat: 20.1167,
    //     lng: -98.7333
    // } * Pachuca
    const coordinatePoint = {
        lat: 40.63667,
        lng: -3.74922
    }

    const centerMarker = ( position: { lat: number, lng: number }, fnMap: Map ) => {
        fnMap.flyTo({
            lat: position.lat,
            lng: position.lng
        })
    }
    return (
        <Transition className="px-4 py-8 md:py44 md:px-36">
            <h4 className="text-center text secondary" id="location">Localización</h4>
            <h2 className="max-w-2xl mx-auto my-4 text-3xl font-semibold text-center">Disponibles en Toda Pachuca</h2>
        
            <MapContainer
                center={coordinatePoint}
                // zoom={13} * Pachuca
                zoom={6}
                scrollWheelZoom={false}
                style={{ height: "500px", width: "100%" }}
                className="h-[700px]">
                    <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png" />
                    <MarkerHouse selectMarker={centerMarker} />
            </MapContainer>
        </Transition>
        
    )
}
