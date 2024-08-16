import Hero from "@/components/Hero";
import { NavbarMenu } from "@/components/NavbarMenu";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="relative bg-white-100 flex justify-center items-center flex-col mx-auto sm:px-0 px-5 overflow-clip">
      <div className="w-full video-bg">
        <NavbarMenu/>
        <Hero />
      </div>
        <Services />
    </main>
  );
}
