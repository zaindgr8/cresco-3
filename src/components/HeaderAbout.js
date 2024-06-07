"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [
  { href: "/", text: "Home 1" },
  { href: "/home-2", text: "Home 2" },
  { href: "/home-3", text: "Home 3" },
  { href: "/home-3-header-dark", text: "Home 3 (Header dark)" },
  { href: "/properties-list", text: "Properties List" },
  { href: "/properties-grid", text: "Properties Grid" },
  { href: "/property-details", text: "Property Details 1" },
  { href: "/property-details-2", text: "Property Details 2" },
  { href: "/about", text: "About Us" },
  { href: "/agent-list", text: "Agents List" },
  { href: "/agent-grid", text: "Agents Grid" },
  { href: "/agent-details", text: "Agent Details" },
  { href: "/post-property", text: "Post Property" },
  { href: "/locations", text: "Locations" },
  { href: "/contact", text: "Contact Us" },
  { href: "/blog-1", text: "Blog 1" },
  { href: "/blog-2", text: "Blog 2" },
  { href: "/blog-details", text: "Blog Details" },
  { href: "/signin", text: "Sign In" },
  { href: "/signup", text: "Sign Up" },
  { href: "/forgot-password", text: "Forgot Password" },
  { href: "/two-factor-auth", text: "Two factor authentication" },
  { href: "/terms-conditions", text: "Terms & Conditions" },
  { href: "/not_found", text: "404 Page" },
  { href: "/505", text: "505 Page" },
  { href: "/style-guide", text: "Style Guide" },
];
import localFont from "next/font/local";

const stroma = localFont({ src: "./fonts/Stroma-Regular.ttf" });
const roboto = localFont({ src: "./fonts/Roboto-Black.ttf" });

export default function Header() {
  const [hasLogo, setHasLogo] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 81) {
        setHasLogo(true);
      } else {
        setHasLogo(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          hasLogo ? "has-logo navbar-wrap " : "no-logo navbar-wrap sticky-top"
        }
      >
        <div className="container-lg mt-5 nav-container position-absolute">
          <nav className="custom-navbar justify-center  navbar-expand-lg ml-16">
            <div className="navbar-collapse" id="navbarSupportedContent">
              {/* Start Navbar Collapse Header */}
              <div className="align-items-center border-bottom d-flex d-lg-none justify-content-between mb-3 navbar-collapse__header pb-3">
                {/* Start Brand Logo For Mobile */}
                <div className="collapse-brand flex-shrink-0">
                  <Link href="/">
                    <img src="assets/img/us.png" alt="" />
                  </Link>
                </div>
                {/* End Brand Logo For Mobile */}
                {/* Start Collapse Close Button */}
                <div className="flex-grow-1 ms-3 text-end">
                  <button
                    type="button"
                    className="bg-transparent border-0 collapse-close p-0 position-relative"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span> <span></span>
                  </button>
                </div>
                {/* End Collapse Close Button */}
              </div>
              {/* End Navbar Collapse Header */}
              <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-20 bg-gray-900">
                <ul className="flex items-center justify-center gap-x-5">
                  <li className={stroma.className}>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="#"
                      role="button"
                    >
                      Home
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="#who"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="#teamwork"
                    >
                      Teamwork
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-brand pe-3 pe-sm-4 py-0" href="/">
                      <img
                        width={100}
                        className="logo-dark"
                        src="assets/img/logo2.png"
                        alt=""
                      />
                      <img
                        className="logo-white"
                        src="assets/img/logo2.png"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className="text-white text-xl hover:text-yellow-500"
                      href="#properties"
                    >
                      Properties
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className="text-white text-xl hover:text-yellow-500"
                      href="#projects"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="#getintouch"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/*  /. End Navbar Collapse */}
            <div className="d-flex gap-1 ms-lg-5">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
