import { ContainerScrollComponent } from "./ui/ContainerScroll";
import { LampContainer } from "./ui/Lamp";
import MagicButton from "./ui/MagicButton";
import { ServicesParallax } from "./ui/ServicesParallax";

import { FaLocationArrow } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <section className="bg-white dark:bg-black w-full">
        <div className="my-10 w-3/4 flex m-auto">
          <div className="w-1/2">
            <LampContainer>
              <h1 className="text-center text-7xl -mt-60">
                We Are Accepting New Clients!
              </h1>
            </LampContainer>
          </div>
          <div className="flex justify-center align-middle w-1/2 my-auto">
          <MagicButton
            title="JOIN TEAM INDY"
            icon={<FaLocationArrow />}
            position="right"
          />
          </div>
        </div>
        <ServicesParallax products={products} />
        <ContainerScrollComponent />
      </section>
    </>
  );
};

export const products = [
  {
    title: "",
    link: "",
    thumbnail: "/galeria1.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail: "/galeria2.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail: "/galeria3.jpg",
  },

  {
    title: "",
    link: "",
    thumbnail: "/galeria4.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail: "/galeria5.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail: "/galeria6.jpg",
  },
  {
    title: "",
    link: "",
    thumbnail: "/galeria7.png",
  },
  {
    title: "",
    link: "",
    thumbnail: "/galeria8.png",
  },
  {
    title: "",
    link: "",
    thumbnail: "/galeria2.jpg",
  },
  {
    title: "3",
    link: "",
    thumbnail: "/galeria3.jpg",
  },
  {
    title: "1",
    link: "",
    thumbnail: "/galeria1.jpg",
  },
  {
    title: "2",
    link: "",
    thumbnail: "/galeria2.jpg",
  },
  {
    title: "3",
    link: "",
    thumbnail: "/galeria3.jpg",
  },
];

export default Services;
