import React from "react";
import img from "../images/neo-image.svg";
import img2 from "../images/lmsimage.svg";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer";

const ProductNav = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id="services" className="bg-gray-100 py-20">
        <section data-aos="zoom-in-down">
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
              Products
            </h2>
          </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                    src={img}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center">
                    Nexus Neo floorwalking/ElbowSupport App
                  </h2>
                  <p className="text-md font-medium text-center my-4 text-xl">
                  Nexus Neo is a lightweight, efficient, fully customisable support tool.
                  </p>
                  <ul className="text-center" style={{ marginLeft:'0'}}>
                    <li>* Mobile Responsiveness</li>
                    <li>* Dynamic Forms</li>
                    <li>* Realtime Issue Log</li>
                    <li>* Visual Dashboards</li>
                    <li>* Bespoke Design</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                    src={img2}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center">
                    Nexus LMS
                  </h2>
                  <p className="text-md font-medium text-center my-4 text-xl">
                  Streamlined and user friendly, Facilitating better learning.
                  </p>
                  <ul className="text-center">
                    <li>* Easy to Use</li>
                    <li>* Modern Design</li>
                    <li>* Dedicated support</li>
                    <li>* Social Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProductNav;
