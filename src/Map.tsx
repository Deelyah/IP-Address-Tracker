import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  //   const position = [51.505, -0.09];
  useEffect(() => {}, []);
  return (
    <div className="w-full h-[68vh]">
      <MapContainer
        //   long , lat
        center={[7.0085, 4.7731]}
        zoom={100}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[7.0085, 4.7731]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
