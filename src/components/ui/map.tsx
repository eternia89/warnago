"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapProps {
  center: [number, number]; // [longitude, latitude]
  zoom?: number;
  className?: string;
  markerTitle?: string;
  markerDescription?: string;
  googleMapsUrl?: string;
}

export function Map({
  center,
  zoom = 16,
  className = "",
  markerTitle,
  markerDescription,
  googleMapsUrl,
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: center,
      zoom: zoom,
    });

    map.current.on("load", () => {
      setLoaded(true);
    });

    // Add marker with popup
    if (markerTitle) {
      const popupContent = `
        <div style="padding: 12px 16px; font-family: var(--font-body), sans-serif; min-width: 200px;">
          <h3 style="font-weight: 600; font-size: 16px; margin: 0 0 8px 0; font-family: var(--font-head), sans-serif;">${markerTitle}</h3>
          ${markerDescription ? `<p style="font-size: 13px; color: #666; margin: 0 0 12px 0; line-height: 1.4;">${markerDescription}</p>` : ""}
          ${
            googleMapsUrl
              ? `<a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="display: block; position: relative; overflow: hidden; background: #FBBC04; color: white; text-align: center; padding: 10px 16px; border-radius: 10px 3px 15px 5px; text-decoration: none; font-weight: 600; font-size: 18px; font-family: var(--font-head), sans-serif; border: 1px solid rgba(0,0,0,0.2); box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <div style="position: absolute; width: 60px; height: 60px; border-radius: 50%; background: #34A853; top: -30px; left: -0px;"></div>
                  <div style="position: absolute; width: 60px; height: 60px; border-radius: 50%; background: #4285F4; top: -25px; left: -10px;"></div>
                  <div style="position: absolute; width: 60px; height: 60px; border-radius: 50%; background: #EA4335; bottom: -40px; right: -15px;"></div>
                  <span style="position: relative;">Lihat di Google Maps</span>
                </a>`
              : ""
          }
        </div>
      `;

      const popup = new maplibregl.Popup({
        offset: 25,
        closeButton: false,
        className: "map-popup",
        maxWidth: "280px",
      }).setHTML(popupContent);

      new maplibregl.Marker({ color: "#8ddb57" })
        .setLngLat(center)
        .setPopup(popup)
        .addTo(map.current)
        .togglePopup();
    }

    // Add navigation controls
    map.current.addControl(
      new maplibregl.NavigationControl(),
      "top-right",
    );

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [center, zoom, markerTitle, markerDescription, googleMapsUrl]);

  return (
    <div
      ref={mapContainer}
      className={`w-full h-full ${className}`}
      style={{ minHeight: "200px" }}
    />
  );
}
