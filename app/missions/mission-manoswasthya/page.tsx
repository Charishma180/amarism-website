import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-40 px-6 text-center">
        <h1 className="text-5xl font-bold text-[#081229] mb-4">
          Mission Manoswasthya
        </h1>

        <p className="text-2xl font-semibold text-[#1a2e5a]">
          Launching Soon
        </p>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A mission focused on mental well-being, emotional support,
          awareness, and access to guidance for those in need.
        </p>
      </section>
    </main>
  );
}