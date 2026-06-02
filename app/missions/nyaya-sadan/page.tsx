import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8fbfb]">
      <Navbar />

      <section className="pt-40 px-6 text-center">
        <h1 className="text-5xl font-bold text-[#081229] mb-4">
          Launching Soon
        </h1>

        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Nyaya Sadan mission page is currently being prepared.
          Stay connected with AMARISM for updates.
        </p>
      </section>
    </main>
  );
}