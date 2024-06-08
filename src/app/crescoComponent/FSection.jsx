'use client';
import React from "react";
import Head from 'next/head';
import localFont from "next/font/local";

// Load fonts with font-display: swap
const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf", display: 'swap' });
const roboto = localFont({ src: "../fonts/Roboto-Black.ttf", display: 'swap' });

const FSection = () => {
  return (
    <>
      <Head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/Stroma-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto-Black.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/img/bg-cresco.jpg" as="image" />
      </Head>
      <div
        className="align-items-center d-flex hero-header overflow-hidden position-relative"
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* Start Oblique */}
        <div>
          <img
            src="/assets/img/bg-cresco.jpg"
            alt="Hero Background"
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
            loading="eager" // Ensure the background image loads eagerly
          />
        </div>
        {/* /.End Oblique */}
        <div
          className="container text-center flex items-center justify-center position-relative"
          style={{ height: "100%", width: "100%" }}
        >
          <div>
            <h1 className="text-white font-bold text-5xl">
              <span className={stroma.className}>
                Unlock The Door <br /> To Your Dream Home
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FSection;
