import React from "react";

const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const quoteStyle = {
  fontStyle: "italic",
  color: "darkblue", // Change this to the color you want for the names
};

const Clients = () => {
  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Testimonials
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <div className="grid sm:grid-cols-3 lg:grid-cols-3">
            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out hover:opacity-100 w-1/6"
            >
              <div style={containerStyle}>
                <p>
                  Andrew and his training team were brilliant. They delivered
                  exceptional training and were very patient with our staff.
                </p>
                <div style={quoteStyle}>- Adam Smith</div>
                <div style={quoteStyle}>(Training Manager NHS Trust)</div>
              </div>
            </div>

            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out hover:opacity-100"
            >
              <div style={containerStyle}>
                <p>
                  Through a tough period with the Pandemic, Andrew and his
                  training team navigated and delivered E-learning and Classroom
                  training outstandingly.
                </p>
                <div style={quoteStyle}>- C williams</div>
                <div style={quoteStyle}>(Programme Director NHS Trust)</div>
              </div>
            </div>

            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out hover:opacity-100"
            >
              <div style={containerStyle}>
                <p>
                  Andrew fully understood our training needs which comprised of
                  a diverse and challenging members of our staff.
                </p>
                <div style={quoteStyle}>- K Batts</div>
                <div style={quoteStyle}>(Training Manager NHS Trust)</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
