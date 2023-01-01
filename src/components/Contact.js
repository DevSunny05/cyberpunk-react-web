import React from "react";
import PageSection from "./PageSection";
import contactImage from "../assets/contact-us.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForn from "./ContactForn";

const Contact = () => {
  return (
    <PageSection
      name="contact"
      title="Contact"
      subtitle={`Angle that with clasp drraeams negenetey on this  of it said and a my the.`}
    >
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        {/* left */}
        <div className="w-full md:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contactImage}
            alt="contact me"
            className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple hover:scale-105 duration-300"
          />
          <p className="py-12 max-w-md">
            Off what of no stronger Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nesciunt, dolore aut sed ab recusandae quaerat
            doloremque hic a eveniet. Dolore.
          </p>

          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaLinkedin size={25} />
            </div>

            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaTwitter size={25} />
            </div>

          </div>
        </div>

        {/* right */}
        <div className="w-full  md:w-1/2 h-full rounded-xl p-4">
            <ContactForn/>
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
