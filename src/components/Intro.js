import React from "react";
import img from "../images/Print-Planning-Estimating-Flexography-Course.jpg";
import { Link } from "react-router-dom";
import img6 from "../images/Digital-Health-Go-live-Adoption-and-Early-Live-Support-Icon-2.svg";
import img7 from "../images/EPR-and-Digital-Health-Program-and-Project-Management-Icon-1.svg";
import img8 from "../images/Training.svg";
const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src={img} />
          </div>
          <div
            className="flex-col my-4 text-center text-xl lg:text-xl font-semibold text-gray-500 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-blue-900 font-bold">
              We have an innovative approach to both training and support for
              EPR implementations
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-500">
                Our bespokely designed applications focus on the front-end users
                of the new systems.
              </p>
            </div>

            <div>
              <p className="my-3 text-xl text-gray-500">
                Ensuring effective knowledge transfer and safe, efficient
                adoption.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 group-hover: translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <img
                  alt="card img"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current mx-auto"
                  src={img6}
                />
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                Transform <span className="font-black">Strategy</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We can fully provide support, knowledge and impart our
                  experience of large-scale transformation projects.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <img
                  alt="card img"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current mx-auto"
                  src={img7}
                />
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                Early Life <span className="font-black">Support</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  Post transformation requires a deep understanding of go-lives,
                  stabilization and extended support.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <img
                  alt="card img"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current mx-auto"
                  src={img8}
                />
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                Training <span className="font-black">Support</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  Our core processes involve unparalleled training strategies,
                  implementation and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
