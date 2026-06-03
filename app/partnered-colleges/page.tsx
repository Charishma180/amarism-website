import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-36 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#0d9488] font-bold tracking-[0.25em] uppercase mb-4">
            Partnered Colleges
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#081229] mb-8">
            Our Academic Partners
          </h1>

          <div className="bg-white rounded-3xl shadow-lg p-8 border">
            <h2 className="text-3xl font-bold text-[#081229] mb-3">
              Sri Venkateswara University
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              Sri Venkateswara University is associated with Amarism for
              academic collaboration, student engagement, and community-oriented
              initiatives.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}