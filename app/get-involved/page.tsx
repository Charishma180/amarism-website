import { Navbar } from "@/components/navbar";
import { AmarismFooter } from "@/components/amarism-footer";
import { GetInvolvedOverview } from "@/components/get-involved-overview";

export default function GetInvolvedPage() {
  return (
    <main>
      <Navbar />

      <div className="pt-24">
        <GetInvolvedOverview />
      </div>

      <AmarismFooter />
    </main>
  );
}