import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: process.env.GOOGLE_MAP_API_KEY,
    version: 'weekly',
    libraries: ['places'],
});

export default loader;