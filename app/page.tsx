import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { Expertise } from "@/components/Expertise";
import { Portfolio } from "@/components/Portfolio";
import { Offer } from "@/components/Offer";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogoMarquee />
        <Expertise />
        <Portfolio />
        <Offer />
        <ProcessSteps />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
