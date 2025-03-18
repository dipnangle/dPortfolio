// import React, { useState } from "react";
// // import MapGL, { Marker, Popup } from "react-map-gl";
// import Map, { Marker, Popup } from "react-map-gl";

// const journeyData = [
//     { id: 1, title: "SSC", lat: 19.076, lon: 72.8777, details: "Completed SSC with distinction" },
//     { id: 2, title: "College", lat: 19.2183, lon: 72.9781, details: "Graduated with honors" },
//     { id: 3, title: "Internship", lat: 28.6139, lon: 77.209, details: "Worked on AI projects" },
//     { id: 4, title: "Job", lat: 37.7749, lon: -122.4194, details: "Started first job at a tech company" }
// ];

// const JourneyMap = () => {
//     const [selectedLocation, setSelectedLocation] = useState(null);
//     return (
//         <div className="w-full h-screen relative">
//             <Map
//                 mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//                 initialViewState={{ longitude: 72.8777, latitude: 19.076, zoom: 3 }}
//                 style={{ width: "100%", height: "100%" }}
//                 mapStyle="mapbox://styles/mapbox/dark-v10"
//             >
//                 {journeyData.map((loc) => (
//                     <Marker key={loc.id} longitude={loc.lon} latitude={loc.lat}>
//                         <button
//                             onClick={() => setSelectedLocation(loc)}
//                             className="bg-red-500 p-2 rounded-full shadow-lg text-white hover:scale-110 transition"
//                         >
//                             📍
//                         </button>
//                     </Marker>
//                 ))}
//                 {selectedLocation && (
//                     <Popup
//                         longitude={selectedLocation.lon}
//                         latitude={selectedLocation.lat}
//                         onClose={() => setSelectedLocation(null)}
//                         closeOnClick={false}
//                         className="bg-white p-4 shadow-xl rounded-lg"
//                     >
//                         <h3 className="text-lg font-bold">{selectedLocation.title}</h3>
//                         <p>{selectedLocation.details}</p>
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5 }}
//                         />
//                     </Popup>
//                 )}
//             </Map>
//         </div>
//     );
// };

// export default JourneyMap;
