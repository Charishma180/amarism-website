import { Navbar } from "@/components/navbar";
import { AmarismFooter } from "@/components/amarism-footer";
import { SocialBar } from "@/components/social-bar";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 px-6 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[#0d9488] text-sm font-bold tracking-[0.3em] uppercase">
            Gallery
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-[#081229] mt-4 mb-6">
            Amarism Gallery
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16">
            Photos and memories from Amarism initiatives will appear here soon.
          </p>

          <div className="bg-[#f8fbfb] border border-gray-200 rounded-[32px] p-12 md:p-20">
            <div className="text-7xl mb-6">📷</div>

            <h2 className="text-3xl font-bold text-[#081229] mb-4">
              No uploads yet
            </h2>

            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Once photos are uploaded, they will be displayed beautifully in
              this gallery section.
            </p>
          </div>
        </div>
      </section>

      <AmarismFooter />
      <SocialBar />
    </main>
  );
}