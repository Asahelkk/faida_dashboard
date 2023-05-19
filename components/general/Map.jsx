"use client";

import { useEffect, useRef } from 'react'
import loader from '@utils/googleMapLoader'
import { Box } from '@chakra-ui/react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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

    // const mapContainerStyle = {
    //     width: '100%',
    //     height: '100%',
    // };

    // const center = {
    //     lat,
    //     lng
    // };

    // return (
    //     <div>
    //         <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
    //             <GoogleMap
    //                 mapContainerStyle={mapContainerStyle}
    //                 center={center}
    //                 zoom={10}
    //             >
    //                 <Marker position={center} />
    //             </GoogleMap>
    //         </LoadScript>
    //     </div>

    // );
}

export default Map