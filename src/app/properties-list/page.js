
import Dropdown from "@/components/form-control-two";

import Footer from "@/components/Footer";
import FfthSection from "../crescoComponent/FfthSectionSeperate";

export default function PropertyList() {
  return (
    <>
      <div>
        
        {/* Start Main Content */}
        <div className="main-content">
          <div className="py-5">
            <div className="container py-4">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  {/* Start Section Header Title */}
                  <div className="section-header text-center mb-5">
                    {/* Start Section Header title */}
                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                      Find your ideal property!
                    </h2>
                    {/* /.End Section Header Title */}
                    {/* Start Section Header Sub Title */}
                    <div className="sub-title fs-16">
                      Elevate your Dubai experience: Let us guide you through
                      our curated <br />
                      selection of off-plan and premium resale properties.
                    </div>
                    {/* /.End Section Header Sub Title */}
                  </div>
                  {/*/. End Section Header */}
                </div>
              </div>
              {/* Start Search Form */}
              <div className="search-form__wrap z-1 position-relative mb-5 properties-search">
                {/* Start Main Search Content */}
                <Dropdown />
                {/* /.End Main Search Content */}
              </div>
              <FfthSection/>
            </div>
          </div>
        </div>
        <Footer/>
        {/* /. End Main Content */}
      </div>
    </>
  );
}