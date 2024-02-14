import { useEffect, useRef } from "react";

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleMapScript = () => {
      // Check if the Google Maps script has already been loaded
      if (!window.google) {
        // Google Maps script not loaded yet, load it asynchronously
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyApP_1pPWRvZFiNN-DKt0c0cwt9tletNxE&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        // Google Maps script already loaded, initialize the map
        initializeMap();
      }
    };

    loadGoogleMapScript();
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    // Initialize Google Maps
    const map = new (window as any).google.maps.Map(mapRef.current, {
      center: { lat: 39.7392, lng: -104.9903 }, // Denver coordinates
      zoom: 10,
    });

    // Add marker for Denver Nuggets location
    new (window as any).google.maps.Marker({
      position: { lat: 39.7488, lng: -105.0077 }, // Pepsi Center coordinates
      map,
      title: "Denver Nuggets Arena (Pepsi Center)",
    });
  };

  return <div ref={mapRef} className="h-full w-full" />;
};

export default GoogleMap;
