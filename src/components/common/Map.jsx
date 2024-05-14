import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 19.30451,
  lng: -98.902998,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAH4O2Bqa3FVw6fnNPVUUnBg1Htb0hesTE",
  });

  if (!isLoaded) return <div>Map cannot be loaded right now, sorry.</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9}
      options={{ streetViewControl: false }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default React.memo(Map);