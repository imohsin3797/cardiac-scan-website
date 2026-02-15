'use client';

import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const serviceAreas = [
  { city: 'Orlando', zip: '32828', lat: 28.5383, lng: -81.1692 },
  { city: 'Tampa', zip: '33647', lat: 28.1499, lng: -82.3513 },
  { city: 'St. Petersburg', zip: '33709', lat: 27.8147, lng: -82.7379 },
  { city: 'Kissimmee', zip: '34741', lat: 28.2920, lng: -81.4076 },
  { city: 'Brandon', zip: '33511', lat: 27.9378, lng: -82.2859 },
  { city: 'Winter Garden', zip: '34787', lat: 28.5653, lng: -81.5912 },
  { city: 'Valrico', zip: '33594', lat: 27.9370, lng: -82.2362 },
  { city: 'Davenport', zip: '33837', lat: 28.1614, lng: -81.6017 },
  { city: 'Altamonte Springs', zip: '32701', lat: 28.6611, lng: -81.3656 },
  { city: 'Ruskin', zip: '33570', lat: 27.7209, lng: -82.4332 },
  { city: 'Winter Haven', zip: '33880', lat: 28.0339, lng: -81.7335 },
  { city: 'Plant City', zip: '33566', lat: 28.0022, lng: -82.1131 },
  { city: 'Zephyrhills', zip: '33542', lat: 28.2389, lng: -82.1819 },
  { city: 'Lakeland', zip: '33805', lat: 28.0317, lng: -81.8915 },
  { city: 'Riverview', zip: '33578', lat: 27.8656, lng: -82.2703 },
  { city: 'Bradenton', zip: '34210', lat: 27.4988, lng: -82.5693 },
  { city: 'Tavares', zip: '32778', lat: 28.8068, lng: -81.7778 },
  { city: 'Sarasota', zip: '34243', lat: 27.3364, lng: -82.5326 },
  { city: 'St Pete', zip: '33702', lat: 27.7725, lng: -82.6415 },
  { city: 'Lake Wales', zip: '33853', lat: 27.9094, lng: -81.5788 },
];

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Center of all service areas (roughly central Florida)
    const centerLat = serviceAreas.reduce((sum, a) => sum + a.lat, 0) / serviceAreas.length;
    const centerLng = serviceAreas.reduce((sum, a) => sum + a.lng, 0) / serviceAreas.length;

    const map = L.map(mapRef.current, {
      center: [centerLat, centerLng],
      zoom: 9,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    mapInstanceRef.current = map;

    // Use a clean map tile style
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Add highlighted circle markers for each zip code
    serviceAreas.forEach((area) => {
      // Large translucent circle to highlight the area
      L.circle([area.lat, area.lng], {
        radius: 8000,
        color: '#C41F3E',
        fillColor: '#C41F3E',
        fillOpacity: 0.15,
        weight: 2,
        opacity: 0.6,
      }).addTo(map);
    });

    // Fit bounds to show all markers with padding
    const bounds = L.latLngBounds(serviceAreas.map((a) => [a.lat, a.lng]));
    map.fitBounds(bounds, { padding: [40, 40] });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <Box
      ref={mapRef}
      sx={{
        width: '100%',
        height: '100%',
        minHeight: { xs: 400, sm: 500 },
        '& .leaflet-control-attribution': {
          fontSize: '9px',
          opacity: 0.7,
        },
      }}
    />
  );
}
