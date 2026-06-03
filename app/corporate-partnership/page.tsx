import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-40 px-6 text-center">
        <p className="text-[#0d9488] font-bold tracking-[0.25em] uppercase mb-4">
          Corporate Partnership
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#081229] mb-6">
          Partnership Opportunities Opening Soon
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
          AMARISM welcomes socially responsible companies, CSR teams, and
          institutions to collaborate with us in education, hunger relief,
          legal awareness, mental well-being, and community development.
        </p>
      </section>
    </main>
  );
}