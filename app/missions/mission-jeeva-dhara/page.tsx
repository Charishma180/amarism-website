import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-40 px-6 text-center">
        <h1 className="text-5xl font-bold text-[#081229] mb-4">
          Mission Jeeva Dhara
        </h1>

        <p className="text-2xl font-semibold text-[#1a2e5a]">
          Launching Soon
        </p>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A mission dedicated to creating sustainable impact through
          environmental and community-driven initiatives.
        </p>
      </section>
    </main>
  );
}