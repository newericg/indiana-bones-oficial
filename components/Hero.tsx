import { HeroText } from "./ui/HeroText";
import VideoHero from "./VideoHero";

const Hero = () => {
    return (
      <div className="pt-36 min-h-screen min-w-screen z-10">
        <VideoHero />
        <div>
          
        </div>
        <div
          className="h-screen w-full bg-transparent dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
         absolute top-0 left-0 flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
           bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>
  
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* <TextGenerateEffect
              words="Welcome to Indiana Bones Dog Adventures"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
  
            <p className="text-center md:tracking-wider pt-20 mb-4 text-sm md:text-lg lg:text-2xl">
                When walking won't do the trick. | Dog Hiking | Vancouver
            </p> */}
            <HeroText highlightedText="When walking won't do the trick.">
              Indiana Bones Dog Adventures
            </HeroText>
  
            <a href="#about">
              
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;