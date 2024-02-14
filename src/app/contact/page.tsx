// pages/contact.tsx
"use client";

import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import for GoogleMap component to avoid SSR
const DynamicGoogleMap = dynamic(() => import("../../components/GoogleMap"), {
  ssr: false,
});

const ContactPage: React.FC = () => {
  // Define state for map visibility
  const [showMap, setShowMap] = useState(false);

  // Toggle map visibility
  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="container mx-auto mt-10">
      <Head>
        <title>Contact - Denver Nuggets</title>
        <meta
          name="description"
          content="Contact Denver Nuggets basketball team"
        />
      </Head>
      <div className="grid grid-cols-2 gap-8 mb-10">
        {/* Contact information */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="mb-4">
            You can contact the Denver Nuggets basketball team using the
            following methods:
          </p>
          <ul className="list-disc list-inside">
            <li>Phone: 123-456-7890</li>
            <li>Email: info@nuggets.com</li>
            <li>Address: 123 Basketball Court, Denver, CO, 80202</li>
          </ul>
        </div>
        {/* Map */}
        <div>
          <button
            onClick={toggleMap}
            className="text-blue-500 font-semibold mb-4 focus:outline-none"
          >
            {showMap ? "Hide Map" : "Show Map"}
          </button>
          {showMap && (
            <div className="h-96 bg-gray-200 rounded-md mb-5">
              <DynamicGoogleMap />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
