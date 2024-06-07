<div className="align-items-center d-flex hero-header hero-header__two overflow-hidden position-relative">
  <img
    src="assets/img/png-img/section-bg.png"
    alt=""
    className="h-100 object-fit-cover position-absolute w-100 top-0"
  />
  {/* Start Oblique */}
  <div className="">
    {/* <img
            src="assets/img/senior1.jpeg"
            alt=""
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
          /> */}
    <Slideshow className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0" />
  </div>

  {/* /.End Oblique */}
  <div className="container flex items-center justify-center position-relative">
    <div>
      <div>
        {/* <p class="title-sm">BEAT TRAFFIC JAMS AND CLINIC QUEUES.</p> */}
        <div className=" bg-blue-200 w-[35vh] font-bold text-blue-900 d-inline-block fw-medium mb-3 text-lg rounded-pill section-header__subtitle text-capitalize text-primary">
          Welcome To Senioriser
        </div>
        <h1 className="hero-header_title text-white fw-bold mb-5 text-5xl leading-[8vh]">
          Uniting Senior Communities, Services,
          <br className="d-none d-md-block" />
          and Providers.
        </h1>
        {/* Start Main Search Content */}
        <Dropdown />
        {/* /.End Main Search Content */}
      </div>
    </div>
  </div>
</div>;
