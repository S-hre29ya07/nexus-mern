import React from "react";
import img from "../images/E-Learning-1.svg";
import img2 from "../images/Classroom-Training-1.svg";
import img3 from "../images/Training-Management-1.svg";
import img4 from "../images/Testing-1.svg";
import img5 from "../images/EPR.svg";
import bg1 from "../images/first.jpg";
import bg2 from "../images/second.jpg";
import bg3 from "../images/third.jpg";
import bg4 from "../images/fourth.jpg";
import bg5 from "../images/fifth.jpg";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-xl font-semibold text-gray-700">
            Our core processes involve unparalleled bespoke training strategies,
            management, implementation and support for face-to-face and
            E-learning authoring and delivery.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <div
              className="relative overflow-hidden text-white rounded-lg shadow-2xl p-3 group"
              style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="relative z-10 m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                  src={img}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  E-learning
                </h2>
                <p className="text-center text-xl lg:text-md">
                  Custom-made E-Learning content designed from the ground up.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-40"></div>
            </div>

            <div
              className="relative overflow-hidden text-white rounded-lg shadow-2xl p-3 group"
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: "cover",
              }}
            >
              <div className="relative z-10 m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                  src={img2}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Classroom Training
                </h2>
                <p className="text-center text-xl lg:text-xl">
                  Nexus certified, exceptional trainers delivering context-based
                  training.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-40"></div>
            </div>

            <div
              className="relative overflow-hidden text-white rounded-lg shadow-2xl p-3 group"
              style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: "cover",
              }}
            >
              <div className="relative z-10 m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                  src={img3}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Training Management
                </h2>
                <p className="text-center text-xl lg:text-xl">
                  Complete management of the entire lifecycle of training.
                  Strategise. Plan. Deliver.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-40"></div>
            </div>

            <div
              className="relative overflow-hidden text-white rounded-lg shadow-2xl p-3 group"
              style={{
                backgroundImage: `url(${bg4})`,
                backgroundSize: "cover",
              }}
            >
              <div className="relative z-10 m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                  src={img4}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Nexus Academy
                </h2>
                <p className="text-center text-xl lg:text-xl">
                  Comprehensive courses, delivered by Nexus, forming the next
                  generation of talent.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-40"></div>
            </div>

            <div
              className="relative overflow-hidden text-white rounded-lg shadow-2xl p-3 group"
              style={{
                backgroundImage: `url(${bg5})`,
                backgroundSize: "cover",
              }}
            >
              <div className="relative z-10 m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out mx-auto"
                  src={img5}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Application Development
                </h2>
                <p className="text-center text-xl lg:text-xl">
                  Nexus Nova is a preeminent provider of bespoke application
                  development services.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-40"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
