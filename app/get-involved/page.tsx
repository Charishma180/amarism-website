import { Navbar } from "@/components/navbar";
import { AmarismFooter } from "@/components/amarism-footer";
import { GetInvolvedSection } from "@/components/get-involved-section";

export default function GetInvolvedPage() {
  return (
    <main>
      <Navbar />

      <div className="pt-24">
        <GetInvolvedSection />
      </div>

      <AmarismFooter />
    </main>
  );
}
