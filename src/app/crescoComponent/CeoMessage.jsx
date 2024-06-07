import React from "react";
import localFont from "next/font/local";
const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf" });
const roboto = localFont({ src: "../fonts/Roboto-Regular.ttf" });

const CeoMessage = () => {
  return (
    <div className=" align-items-center overflow-hidden row bg-[#111827]  flex justify-between">
      <img
        src="assets/img/about/CEO.png"
        className="w-[63vh] h-auto max-w-full"
      />

      <div
        className="col-md-12 col-lg-5 xl:ml-20 mt-5  text-sm"
        id="getintouch"
      >
        <div className="text-block">
          <div className="   overflow-hidden text-capitalize text-gray-900">
            <span className={roboto.className}>Leadership Perspective</span>
          </div>
          <h2 className=" text-white text-2xl">
            <span className={stroma.className}>
              Why it's essential for you to connect with us?
            </span>
          </h2>
          <span className={roboto.className}>
            <p className="mb-4 text-white font-thin mt-3">
              At Cresco, we strive to inspire greatness in every aspect of our
              work.With years of experience and a steadfast commitment to
              excellence, our team embodies this ethos daily. We're deeply
              grateful for your trust and partnership, and we're committed to
              continuing to serve you with integrity and dedication.
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-white">
              <li>
                Our years of experience ensure unmatched insight and results.
              </li>
              <li>We tailor our approach to meet your unique needs.</li>
              <li>
                We're committed to staying ahead with cutting-edge strategies.
              </li>
            </ul>
          </span>
          <hr className="mt-5" />
          <blockquote className="blockquote quote-text">
            <p className=" mb-0 text-[#DAB852]">
              <span className={stroma.className}>
                “Real estate isn't just about buying a property; it's about
                investing in possibilities, planting roots, and building
                futures.”
              </span>
            </p>
            <cite className="fs-14 fw-semibold quote-attribution text-dark">
              — Umer Shauket
            </cite>
            <div className="mt-3 signature">
              
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
