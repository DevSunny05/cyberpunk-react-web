import React from "react";
import PageSection from "./PageSection";
import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaSnapchat,
} from "react-icons/fa";

const Customers = () => {
  const facts = [
    {
      id: 1,
      title: "$49M",
      subtitle: "Was and broken balls rusting thy",
    },
    {
      id: 2,
      title: "57%",
      subtitle: "Was and broken balls rusting thy",
    },
    {
      id: 3,
      title: "3 months fater",
      subtitle: "Was and broken balls rusting thy",
    },
    {
      id: 4,
      title: "7 new countries",
      subtitle: "Was and broken balls rusting thy",
    },
  ];

  const companies = [
    {
      id: 1,
      icon: <FaGoogle size={25} />,
      title: "google",
    },
    {
      id: 2,
      icon: <FaFacebook size={25} />,
      title: "facebook",
    },
    {
      id: 3,
      icon: <FaAmazon size={25} />,
      title: "amazon",
    },
    {
      id: 4,
      icon: <FaApple size={25} />,
      title: "apple",
    },
    {
      id: 5,
      icon: <FaSnapchat size={25} />,
      title: "snapchat",
    },
  ];
  return (
    <PageSection
      name="customers"
      title="Customers"
      subtitle={`Angle that with clasp drraeams negenetey on this  of it said and a my the.`}
    >
      <>
        <div className="grid md:grid-cols-4 gap-8 text-left mb-16 ">
          {facts.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg"
            >
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          {companies.map(({ id, title, icon }) => (
            <div key={id} className='flex items-center capitalize p-4 rounded-lg'>
                {icon}
              <p className="ml-2">{title}</p>
            </div>
          ))}
        </div>
      </>
    </PageSection>
  );
};

export default Customers;
