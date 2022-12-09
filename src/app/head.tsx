import React from 'react';
import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>FFXIV Nald</title>
      {/* TODO: to remove once UI component are developed */}
      <Script src="https://cdn.tailwindcss.com" />
    </>
  );
}
