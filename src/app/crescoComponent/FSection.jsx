'use client'
import React from "react";
import localFont from "next/font/local";

// Load fonts with font-display: swap
const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf", display: 'swap' });
const roboto = localFont({ src: "../fonts/Roboto-Black.ttf", display: 'swap' });

const FSection = () => {
  return (
    <>
      <div
        className="align-items-center d-flex hero-header overflow-hidden position-relative"
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* Start Oblique */}
        <div >
          {/* <video
            autoPlay
            muted
            loop
            src="/assets/img/Website.mp4"
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0 video"
            preload="metadata" // Preload only metadata to start
          /> */}
          <img
            src="/assets/img/bg-cresco.jpg"
            alt="Hero GIF"
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0 video"
          />
        </div>
        {/* /.End Oblique */}
        <div
          className="container text-center flex items-center justify-center position-relative"
          style={{ height: "100%", width: "100%" }}
        >
          <div>
            <div>
              <h1 className=" text-white  font-bold  text-5xl ">
                <span className={stroma.className}>
                  Unlock The Door <br /> To Your Dream Home
                </span>
              </h1>
              {/* Start Main Search Content */}
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default FSection;
