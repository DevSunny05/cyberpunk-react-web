import React from "react";
import PageSection from "./PageSection";
import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";

const Products = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className="text-white" />,
      title: "rocket manufacturing",
      subtitle:
        "Fact from with my the i, this shadow soul i mens was of bird , raven till mien before by of. The lordly one fancy me not and crocking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my dear his impore, I nothing",
    },
    {
      id: 2,
      icon: <FaMicrochip size={50} className="text-white" />,
      title: "advance electronic",
      subtitle:
        "Fact from with my the i, this shadow soul i mens was of bird , raven till mien before by of. The lordly one fancy me not and crocking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my dear his impore, I nothing",
    },
    {
      id: 3,
      icon: <FaRobot size={50} className="text-white" />,
      title: "robotics ",
      subtitle:
        "Fact from with my the i, this shadow soul i mens was of bird , raven till mien before by of. The lordly one fancy me not and crocking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my dear his impore, I nothing",
    },
    {
      id: 4,
      icon: <FaSatellite size={50} className="text-white" />,
      title: "payload to orbit",
      subtitle:
        "Fact from with my the i, this shadow soul i mens was of bird , raven till mien before by of. The lordly one fancy me not and crocking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my dear his impore, I nothing",
    },
  ];
  return (
    <div>
      <PageSection
        name="products"
        title="Products"
        subtitle="Plainly lamlight weather evermore threat tell, we or scare bird spoke bird spoken he weather on, sinking thy again sent what eyes tinkled his explore these. Within melancholy sad bird not respiterespite"
      >
        <div className="grid lg:grid-cols-2 gap-12 text-black">
          {products.map(({ id, icon, title, subtitle }) => (
            <div
              key={id}
              className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="flex items-center justify-center duration-300 group-hover:scale-105">
                <div className="bg-black rounded-full p-5 m-4">{icon}</div>
                <div>
                  <h1 className="text-3xl lg-5xl my-8 capitalize">{title}</h1>
                  <p>{subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default Products;
