import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-40 px-6 text-center">
        <h1 className="text-5xl font-bold text-[#081229] mb-4">
          Mission Trupti
        </h1>

        <p className="text-2xl font-semibold text-[#1a2e5a]">
          Launching Soon
        </p>

        <p className="text-gray-600 text-lg">
          Mission Trupti page is currently under development.
          Stay connected as we launch this mission in June 2026.
        </p>
      </section>
    </main>
  );
}