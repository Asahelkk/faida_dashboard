"use client";

import { useEffect, useRef } from 'react'
import loader from '@utils/googleMapLoader'
import { Box } from '@chakra-ui/react';

const Map = ({ lat, lng }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        loader.load()
            .then(async () => {
                const { Map } = await google.maps.importLibrary("maps");

                new Map(mapRef.current, {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 8,
                });
            })
            .catch(e => {
                console.log(e)
            });

    }, [lat, lng]);

    return <Box ref={mapRef} width={"100%"} height={"100%"} />;
}

export default Map