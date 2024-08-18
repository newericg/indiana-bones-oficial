import Hero from "@/components/Hero";
import { NavbarMenu } from "@/components/NavbarMenu";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto px-0 overflow-clip">
      <div className="w-full video-bg">
        <NavbarMenu/>
        <Hero />
      </div>
        <Services />
    </main>
  );
}
