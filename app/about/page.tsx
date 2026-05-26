import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/about-section";
import { AmarismFooter } from "@/components/amarism-footer";
import { SocialBar } from "@/components/social-bar";

export default function AboutPage() {
  return (
    <main id="about" className="bg-white overflow-x-hidden">
      <Navbar />

      <section id="about us">
        <AboutSection />
      </section>

      <section id="contact">
        <AmarismFooter />
      </section>

      <SocialBar />
    </main>
  );
}