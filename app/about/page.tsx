import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/about-section";
import { AmarismFooter } from "@/components/amarism-footer";
import { SocialBar } from "@/components/social-bar";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutSection />
      <AmarismFooter />
      <SocialBar />
    </main>
  );
}