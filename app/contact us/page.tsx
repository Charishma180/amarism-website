import { AmarismFooter } from "@/components/amarism-footer";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <AmarismFooter />
    </main>
  );
}
