import Link from "next/link";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

import localFont from "next/font/local";

const stroma = localFont({ src: "./fonts/Stroma-Regular.ttf" });
const roboto = localFont({ src: "./fonts/Roboto-Regular.ttf" });

export default function Footer() {
  return (
    <>
      {/* Start Footer */}
      
      <footer
        className=" bg-gray-900 mt-14"
        data-image-src="assets/img/wall-sketch.png"
      >
        <div className="container pt-4">
          {/* Start Card Contact */}
          <div
            className="card-contact text-gray-900 bg-white mb-4 mt-5 py-5 px-4 px-md-5 position-relative overflow-hidden rounded-3 shadow-lg"
            data-aos="fade-down"
          >
            <div className="row align-items-center position-relative z-1">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <h2 className="display-6 fw-bold text-capitalize text-gray-900">
                  <span className={stroma.className}>
                    Get Dubai real estate updates by subscribing to our
                    newsletter.
                  </span>
                </h2>
                <div className="mt-3">
                  {/* <div className="col-auto">
                      <div className=" btn-outline-default border-0">
                        <i className="fas  mr-2 fa-mobile"></i>
                        <span className="">+971 4 529 9647</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="fs-17 l-spacing-1 ">
                        <i className="fas fa-envelope fs-15 mr-2"></i>
                        <span>info@crescorealestate.ae</span>
                      </div>
                    </div> */}

                  <div className="mt-10">
                    <span className={`roboto.className font-thin`}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="py-3 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:border-yellow-500"
                      />
                    </span>
                    <button className="bg-[#DAB852] hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-r-md focus:outline-none">
                      <span className={roboto.className}>Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Card Background Image */}
            <div className="card-sketch w-[45vh] h-[60vh]">
              <img
                src="assets/img/clogo.png"
                alt=""
                className="w-full h-full object-cover object-center"
                style={{ objectFit: "contain" }}
              />
            </div>
            {/* /.End Card Background Image */}
          </div>
          {/* .End Card Contact  */}
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 py-3 py-md-5 pe-xl-5 text-center">
              <div className="footer-about">
                <h3
                  className={`fs-20 text-white fw-semibold link-title mb-3 position-relative`}
                >
                  <span className={stroma.className}>CRESCO REAL ESTATE</span>
                </h3>
                <div className="d-inline-block">
                  {/* Start Qr Code Image */}
                  <img
                    src="assets/img/clogo.png"
                    className="object-cover h-[20vh] rounded-lg"
                    height="146"
                    width="146"
                    alt="..."
                  />
                  {/* /End Qr Code Image */}
                </div>
                <div className={stroma.className}>
                  <p className="text-white">
                    Get in touch with me to discover more.
                  </p>
                  <div className="email-link d-block fw-medium mb-1">
                    <i className="text-white fa-solid fa-phone me-2"></i>
                    <span className="text-white">+971 4 529 9647</span>
                  </div>
                  <div className="text-white email-link d-block fw-medium">
                    <i className="fa-solid fa-envelope me-2"></i>
                    <span className="text-white">info@crescorealestate.ae</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-auto col-xl-2 py-3 py-md-5">
              <h3 className="fs-20 text-white fw-semibold link-title mb-3 position-relative">
                <span className={roboto.className}>Connect with us</span>
              </h3>
              {/* /Start Footer Link  */}
              <span className={stroma.className}>
                <ul className="list-unstyled social-icon">
                  <li>
                    <Link
                      href="https://www.instagram.com/crescorealestate.ae/"
                      target="_blank"
                      className="align-items-center d-flex text-white flex gap-x-3"
                    >
                      <FaInstagram className="text-white text-2xl" />
                      Instagram
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/crescorealestatellc/mycompany/"
                      className="align-items-center text-white d-flex flex gap-x-3"
                    >
                      <FaLinkedin className="text-white text-2xl" />
                      Linked In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`https://wa.me/${+97145299647}`}
                      target="_blank"
                      className="align-items-center text-white d-flex gap-x-3"
                    >
                      <SiWhatsapp className="text-white text-2xl" />
                      WhatsApp
                    </Link>
                  </li>
                </ul>
              </span>
              {/* /.End Footer Link  */}
            </div>

            <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 py-3 py-md-5 d-lg-none d-xl-block">
              <h3 className="fs-20 text-white fw-semibold link-title mb-3 position-relative">
                <span className={roboto.className}>Office Location</span>
              </h3>
              {/* /Start Footer Link  */}
              <span className={stroma.className}>
                <ul className="list-unstyled menu mb-0">
                  <li className="mb-2">
                    <div className="link text-white d-block">
                      <p>
                        Office 1005, 10th Floor, Sobha Ivory 2, Business Bay,
                        Dubai
                      </p>
                    </div>
                  </li>
                </ul>
              </span>
              {/* /.End Footer Link */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg col-xl-2 py-3 py-md-5"></div>
          </div>
          <hr className="mb-0 mt-4" />
          <div className="py-4">
            <div className="align-items-center row mb-2">
              {/* Start Copy Rights Text */}
              <div className="col-sm-auto copy text-sm text-white">
                <span className={roboto.className}>
                  © 2024 CRESCO REAL ESTATE - ALL RIGHTS RESERVED
                </span>
              </div>
              {/* /.End Copy Rights Text */}
            </div>
          </div>
        </div>
      </footer>
      {/* /.End Footer */}
    </>
  );
}
