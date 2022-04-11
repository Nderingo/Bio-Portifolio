import React from "react";
import Resume from "../images/Emmanuel FullStack CV PDF.pdf";

function CV() {
  return (
    <section id="CV" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <a
            href={Resume}
            download="LyimoResume"
            className="w-1/3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Download my Resume
          </a>
        </div>
      </div>
    </section>
  );
}
export default Resume;