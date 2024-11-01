'use client';

import googleMapStyling from '@/app/utils/googleMapStyling';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const MapTypeId = {
  HYBRID: 'hybrid',
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
  TERRAIN: 'terrain',
};
export type MapConfig = {
  id: string;
  label: string;
  mapId?: string;
  mapTypeId?: string;
  styles?: google.maps.MapTypeStyle[];
};

const mapConfig: MapConfig = {
  id: 'greyblack',
  label: 'Grey & Black Map style',
  mapTypeId: MapTypeId.ROADMAP,
  styles: googleMapStyling,
};

const API_KEY: string = process.env.GOOGLE_MAPS_API_KEY!;

const GoogleMap = () => {
  const position = { lat: 44.80054638504948, lng: 20.481693287181592 };

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultCenter={position}
        defaultZoom={15}
        mapId={mapConfig.mapId || null}
        mapTypeId={mapConfig.mapTypeId}
        styles={mapConfig.styles}
        disableDefaultUI={true}
        keyboardShortcuts={false}
        className='aspect-[1435/647] rounded-[30px] mt-10 [&_.gm-style_iframe+div]:border-none'
      >
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
