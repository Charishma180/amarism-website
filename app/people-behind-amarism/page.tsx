import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="relative h-[78vh] md:h-[92vh] overflow-hidden">
  <img
    src="/about-hero.jpeg"
    alt="Governing Body"
    className="w-full h-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-[#061322]/55"></div>

  <div className="absolute inset-0 flex items-center">
    <div className="px-6 md:px-16 max-w-5xl">
      <div className="bg-[#0d9488]/20 border border-[#14b89a]/30 backdrop-blur-md text-[#7fffd4] px-5 py-2 rounded-full text-xs font-bold tracking-[0.35em] inline-block mb-8">
        LEADERSHIP
      </div>

      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-none">
        The Governing Body
      </h1>

      <div className="flex items-start gap-4 max-w-3xl">
        <div className="w-1 h-16 bg-[#14b89a] rounded-full mt-1"></div>

        <p className="text-white text-xl md:text-3xl leading-relaxed">
          Visionary Leadership Driving Grassroots Changes.
        </p>
      </div>
    </div>
  </div>
</div>

      <section className="bg-[#f8fafc] pt-32 py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-7xl font-bold text-[#081229] mb-6">
              The Governing Body
            </h1>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl">
              Led by professionals and students from elite institutions, our
              governing body combines academic excellence with a deep commitment
              to social impact and community transformation.
            </p>
          </div>

          <div className="bg-white rounded-[40px] shadow-xl p-8 md:p-16 mb-16">
            <p className="text-[#12b886] tracking-[8px] text-sm font-bold mb-8">
              LEADERSHIP PROFILE
            </p>

            <h2 className="text-4xl md:text-6xl italic font-bold text-[#081229] mb-5">
              Vadimgadu Ramu
            </h2>

            <p className="text-gray-400 tracking-[5px] font-bold text-sm mb-10">
              PRESIDENT
            </p>

            <div className="w-20 h-20 rounded-3xl bg-[#081229] flex items-center justify-center text-4xl text-white mb-10">
              🛡️
            </div>

            <p className="text-lg md:text-2xl leading-relaxed text-gray-800 mb-8">
              Vadimgadu Ramu, a Medical Professional Dropout from SV Medical
              College and a Political Science Graduate from Acharya Nagarjuna
              University, brings multidisciplinary academic exposure and strong
              leadership values into Amarism.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
              His journey reflects resilience, adaptability, and a deep
              commitment toward youth empowerment, governance, and long-term
              social impact.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Through grassroots mobilisation, civic awareness, and educational
              initiatives, he continues to guide Amarism toward building
              stronger and more compassionate communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {[
              ["📜", "V. Anil Kumar", "GENERAL SECRETARY"],
              ["🏛️", "Pillapalem Charishma", "VICE PRESIDENT"],
              ["🏦", "V. Tharun", "TREASURER"],
              ["🤝", "V. Charan Kumar", "ADDL. GENERAL SECRETARY"],
            ].map(([icon, name, role]) => (
              <div
                key={name}
                className="bg-white rounded-[30px] p-8 shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#eef6ff] flex items-center justify-center text-3xl mb-6">
                  {icon}
                </div>

                <h3 className="text-2xl font-bold text-[#081229] mb-3">
                  {name}
                </h3>

                <p className="text-[#12b886] tracking-[3px] font-semibold text-sm">
                  {role}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "T. Jeevana Sri",
              "V. Hari Krishna",
              "Duggu Tejaswini",
              "V. Karthik",
            ].map((name) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-5"
              >
                <div className="text-3xl">👤</div>

                <div>
                  <h4 className="text-xl font-bold text-[#081229]">{name}</h4>

                  <p className="text-gray-500 text-sm tracking-wide">
                    EXECUTIVE MEMBER
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}