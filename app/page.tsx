import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { MissionsSection } from "@/components/missions-section";
import { GetInvolvedSection } from "@/components/get-involved-section";
import { ContactSection } from "@/components/contact-section";
import { AmarismFooter } from "@/components/amarism-footer";
import { SocialBar } from "@/components/social-bar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MissionsSection />
      <GetInvolvedSection />
      <ContactSection />
      <AmarismFooter />
      <SocialBar />
    </main>
  );
}