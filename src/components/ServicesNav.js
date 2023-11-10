import React from "react";
import img from "../images/E-Learning-1.svg";
import img2 from "../images/Classroom-Training-1.svg";
import img3 from "../images/Training-Management-1.svg";
import img4 from "../images/Testing-1.svg";
import img5 from "../images/EPR.svg";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer";

const ServicesNav = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id="services" className="bg-gray-100 py-20">
        <section data-aos="zoom-in-down">
          <div className="my-4 py-12">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
              services
            </h2>
          </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                    src={img}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center">
                    E-learning
                  </h2>
                  <p className="text-center text-xl">
                    Custom-made E-Learning content designed from the ground up.
                  </p>
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
                    Classroom Training
                  </h2>
                  <p className="text-center text-xl">
                    Nexus certified, exceptional trainers delivering
                    context-based training.
                  </p>
                </div>
              </div>

              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                    src={img3}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center ">
                    Training Management
                  </h2>
                  <p className="text-center text-xl">
                    Complete management of the entire lifecycle of training.
                    Strategise. Plan. Deliver.
                  </p>
                </div>
              </div>

              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                    src={img4}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center ">
                    Nexus Academy
                  </h2>
                  <p className="text-center text-xl">
                    Comprehensive courses, delivered by Nexus, forming the next
                    generation of talent.
                  </p>
                </div>
              </div>

              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                    src={img5}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center ">
                    Application Development
                  </h2>
                  <p className="text-center text-xl">
                    Nexus Nova is a preeminent provider of bespoke application
                    development services.
                  </p>
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

export default ServicesNav;
