import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  //   const position = [51.505, -0.09];
  return (
    <div className="w-full h-[68vh]">
      <MapContainer
        center={[4.847223, 6.974604]}
        zoom={50}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[4.847223, 6.974604]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
