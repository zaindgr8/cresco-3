import Link from "next/link";
import AgentList from "../data/agent-list.json"
export default async function AgentListData() {
  
const openWhatsApp = (phoneNumber) => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};
   
    return (
        <div className="row g-4">
            {
                AgentList.map((agent) => {
                    return (
                      <div
                        className=" card mb-4 overflow-hidden bg-grey border-0 shadow"
                        key={agent.id}
                      >
                        <Link href="" className="card-link" />
                        <div className="card-body p-0">
                          <div className="g-0 row">
                            <div className="bg-white col-lg-5 col-md-6 col-xl-3 position-relative">
                              {/* Start Agent Avatar Image */}
                              <img
                                src={agent.img}
                                alt=""
                                className="h-100 w-100 object-fit-cover"
                              />
                              {/* /.End Agent Avatar Image */}
                            </div>
                            <div className="bg-white col-lg-7 col-md-6 col-xl-6 p-3 p-lg-4 p-md-3 p-sm-4">
                              <div className="d-flex flex-column h-100">
                                <div className="mb-3">
                                  {/* Start Agent Name */}
                                  <h6 className="fs-23 mb-0">
                                    {agent.name}
                                    <i className="fas fa-medal text-yellow-500" />
                                  </h6>
                                  {/* /.End Agent Name */}
                                  {/* Start Designation */}
                                  <div className="text-yellow-500 fw-semibold">
                                    {agent.designation}
                                  </div>
                                  {/* /.End Designation */}
                                  {/* Start Agent About */}
                                  <div className="mt-3">
                                    {agent.description}
                                  </div>
                                  {/* /.End Agent About */}
                                </div>
                                {/* Start Agent Information */}
                                <div className="border-top mt-auto pt-3">
                                  <div className="row gy-2 gx-4">
                                    <div className="col-auto">
                                      <div className="d-flex align-items-center text-dark">
                                        <div className="flex-shrink-0">
                                          <i className="fa-solid fa-phone fs-18" />
                                        </div>
                                        <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                          Contact :
                                          {agent.phoneNumber}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="d-flex align-items-center text-dark">
                                        <div className="flex-shrink-0">
                                          <i className="fa-solid fa-fan fs-18" />
                                        </div>
                                        <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                          Experience Since : {agent.experience}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="d-flex align-items-center text-dark">
                                        <div className="flex-shrink-0">
                                          <i className="fa-solid fa-chart-area fs-18" />
                                        </div>
                                        <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                          Areas : {agent.areas}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <div className="d-flex align-items-center text-dark">
                                        <div className="flex-shrink-0">
                                          <i className="fa-solid fa-language fs-18" />
                                        </div>
                                        <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                          Language : {agent.language}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* /. End Agent Information */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                })
            }

        </div>
    );
}
