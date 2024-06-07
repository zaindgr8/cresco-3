"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import localFont from "next/font/local";

const stroma = localFont({ src: "./fonts/Stroma-Regular.ttf" });
const roboto = localFont({ src: "./fonts/Roboto-Black.ttf" });


const Select = dynamic(() => import("react-select"), {
  ssr: false,
});
function Dropdown() {
  const [value, setValue] = useState(null);
  const options = [
    { value: "Business Bay", label: "Business Bay" },
    { value: "JVC", label: "JVC" },
    { value: "Marina JBR", label: "Marina JBR" },
  ];
  const optionsTwo = [
    { value: "Offices", label: "Offices" },
    { value: "Apartment", label: "Apartment" },
    { value: "Houses", label: "Houses" },
  ];
  const optionsThree = [
    { value: "Rent", label: "Rent" },
    { value: "Sell", label: "Sell" },
  ];
  const customSelectStyle = {
    control: (provided) => ({
      ...provided,
      // Adjust the padding as needed
      minHeight: "48px", // Add min-height
      borderRadius: "0.5rem", // Add border-radius
      border: "0", // Add border
      boxShadow: "0px 0px 40px rgba(29, 58, 83, 0.1)", // Add box-shadow
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: "2.25rem", // Add padding-left
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#0a73c0" : "white", // Change the background color when an option is selected
      color: state.isSelected ? "white" : "black", // Change the text color when an option is selected
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Hide the indicator separator
    }),
  };
  return (
    // Start form
    <form className="row g-2 main-search">
      <div className="col-md-4 ">
        <div className="search-select">
          <Select
            id="test"
            options={options}
            defaultValue={value}
            onChange={setValue}
            isSearchable={true}
            placeholder="Location"
            styles={customSelectStyle}
            className=""
          />

          <i className="fa-solid fa-location-crosshairs search-icon" />
        </div>
      </div>

      <div className="col-md-4">
        <div className="search-select">
          <span>
            <Select
              options={optionsTwo}
              defaultValue={value}
              onChange={setValue}
              isSearchable={true}
              styles={customSelectStyle}
              placeholder="Property"
            />
          </span>
          <i className="fa-solid fa-house fs-17 search-icon"></i>
        </div>
      </div>

      <div className="col-md-4">
        <div className="search-input">
          <i className="fa-solid fa-magnifying-glass search-icon" />
          <span>
            <input type="text" className="form-control" placeholder="Budget" />
          </span>
          <Link
            // href="properties-list"
            href="/"
            className="bg-[#DAB852] p-1 px-3 rounded-sm search-btn position-absolute top-50"
          >
            <i className="fa-solid fa-angle-right" />
          </Link>
        </div>
      </div>
    </form>

    // End Form
  );
}

export default Dropdown;
