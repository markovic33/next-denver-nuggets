import React, { useEffect, useRef } from "react";

const DEFAULT_CENTER = { lat: 39.7392, lng: -104.9903 };
const DEFAULT_ZOOM = 7;

export const GoogleMaps = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        width: "420px",
        height: "320px",
        justifyContent: "center",

        justifyItems: "center",
        alignItems: "center",
        padding: "15px",
        margin: "10px",
      }}
    />
  );
};
