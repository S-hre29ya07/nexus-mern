import React from "react";
import img from "../images/Andrew-ID-Pic.jpg";
import img2 from "../images/Sulleman.jpeg";
import img3 from "../images/Mahfuz.jpeg";
import img4 from "../images/tuxpi.com.1699547827.jpg";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer";

const Team = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id="services" className="bg-gray-100 py-20">
        <section data-aos="zoom-in-down">
          <div className="my-4 py-8">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
              Our Team
            </h2>
          </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out text-center"
                    src={img}
                  />
                  <h2 className="font-semibold my-2 text-2xl text-center">
                    Andrew Dunbar
                  </h2>
                  <h5 className="font-semibold my-2 text-center text-black">
                    Operational Director
                  </h5>
                  <p className="text-md font-medium">
                    As a founding Director of Nexus Nova, Andrew has worked on
                    multiple large scale Electronic Patient Record (EPR)
                    implementations since 2010 and has rose through the ranks to
                    quickly become one of the most experienced and capable
                    Training Managers in the industry. Andrew is also the go-to
                    resource whenever organisations implement floor walking
                    support programmes to their staff and has a wealth of
                    experience in supporting organisations and their teams
                    through the often very stressful cut-over phase of
                    deployments. Andrew is passionate about delivering the best
                    possible training and support programmes to organisations
                    that enables effective awareness and adoption of new ways of
                    working for staff. Andrew also specialises in the Emergency
                    Department Workflows and processes within EPR’s.
                  </p>
                </div>
              </div>

              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                    src={img2}
                  />
                  <h2 className="font-semibold my-2 text-2xl text-center">
                    Suleman Hussain
                  </h2>
                  <h5 className="font-semibold my-2 text-center text-black">
                    Financial Director
                  </h5>
                  <p className="text-md font-medium">
                    As a founding Director of Nexus Nova, Suleman has a unique
                    skill set with a vast knowledge of the finance industry
                    alongside experience with clinical system implementations
                    and support programmes as a training consultant and business
                    Change Partner. Suleman has always had a passion for numbers
                    and brings private sector culture, values and strategies
                    into the health care setting.
                  </p>
                </div>
              </div>

              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                    src={img3}
                  />
                  <h2 className="font-semibold my-2 text-2xl text-center ">
                    Mahfuz Chowdhury
                  </h2>
                  <h5 className="font-semibold my-2 text-center text-black">
                    Technical Director
                  </h5>
                  <p className="text-md font-medium">
                    As a founding Director of Nexus Nova Mahfuz is highly
                    experienced in both technical and operational management
                    roles within large scale Clinical Systems Implementations.
                    From 1st and 2nd line support to Training and Support
                    Management roles, Mahfuz is our expert in Learning
                    Management Systems (LMS) and has led on designing,
                    developing and maintaining organisations often complex
                    systems. Mahfuz is passionate about utilising advances in
                    technology within IT to develop solutions for inefficient
                    processes and applications. Mahfuz has designed a first of
                    type support application that streamlines and improves
                    process within Floor walking support programmes.
                  </p>
                </div>
              </div>

              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                    src={img4}
                  />
                  <h2 className="font-semibold my-2 text-2xl text-center ">
                    Dr. Savio Rodrigues
                  </h2>
                  <h5 className="font-semibold my-2 text-center text-black">
                    Clinical Director and CISO
                  </h5>
                  <p className="text-md font-medium">
                    As a founding Director of Nexus Nova, Savio is a qualified
                    Medical Doctor and has, over the past 5 years, been helping
                    to drive digital change and innovation in the healthcare
                    industry in the UK, working alongside change and
                    transformation teams across the NHS. With excellent
                    knowledge of the acute hospital setting, Savio is passionate
                    about working with people who may be resistant to change in
                    their day-to-day work. Savio enjoys helping them realise the
                    benefits that come with large scale EPR Programmes. Savio is
                    also very passionate about population Health Management and
                    worked recently within his local community helping hard to
                    reach groups become educated about the importance of
                    becoming vaccinated against Covid-19.
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

export default Team;
