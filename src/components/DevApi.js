import React from "react";
import codeImage from "../assets/code.jpg";
import PageSection from "./PageSection";

const DevApi = () => {
  return (
    <PageSection
      name="developer API"
      title="developer API"
      subtitle={`Angle that with clasp drraeams negenetey on this  of it said and a my the.`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* {left} */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 p-8 bg-gray-900 rounded-lg ">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Whom madam song fater get as followed sought many level
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Whom madam song fater get as followed sought many level
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Whom madam song fater get as followed sought many level
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Whom madam song fater get as followed sought many level
          </p>
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 md:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="codeimage"
            className="rounded-lg shadow-lg shadow-thBlue"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;
