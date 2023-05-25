"use client";

import { useEffect, useRef } from 'react'
import loader from '@utils/googleMapLoader'
import { Box } from '@chakra-ui/react';

const Settings = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        loader.load()
            .then(async () => {
                const { Map } = await google.maps.importLibrary("maps");

                new Map(mapRef.current, {
                    center: { lat: -1.26942, lng: 36.77717 },
                    zoom: 16,
                });
            })
            .catch(e => {
                console.log(e)
            });

    }, []);

    return (
        <Box maxH={"91%"} overflowY={"scroll"} position={"relative"}>
            <Box ref={mapRef} width={"100%"} maxH={"full"} />
        </Box>

    );
}

export default Settings