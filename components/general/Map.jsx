"use client";

// import { useState, useEffect } from 'react'
// import loader from '@utils/googleMapLoader'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ lat, lng }) => {
    // const [map, setMap] = useState(null);

    // useEffect(() => {
    //     loader.load().then(() => {
    //         const mapOptions = {
    //             center: { lat, lng },
    //             zoom: 16,
    //         };
    //         const newMap = new window.google.maps.Map(
    //             document.getElementById('map'),
    //             mapOptions
    //         );
    //         const marker = new window.google.maps.Marker({
    //             position: { lat, lng },
    //             map: newMap,
    //         });
    //         setMap(newMap);
    //     });
    // }, [lat, lng]);

    const mapContainerStyle = {
        width: '100%',
        height: '100%',
    };

    const center = {
        lat,
        lng
    };
    return (
        <div className='w-full h-full relative'>
            <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={14}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Map