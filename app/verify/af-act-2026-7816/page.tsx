import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vadimgadu Ramu | Internship Completion Record | Amarism",
  description: "Mission Manisha internship completion record for Vadimgadu Ramu.",
  robots: { index: false, follow: false },
}

export default function InternshipCompletionRecord() {
  return (
    <main className="certificate-page">
      <section className="certificate-card" aria-labelledby="certificate-heading">
        <h1 id="certificate-heading"><span className="check" aria-hidden="true">✓</span> Internship Completion Record</h1>
        <p className="name">Vadimgadu Ramu</p>
        <p className="completed">successfully completed</p>
        <p className="mission">MISSION MANISHA</p>
        <p className="subtitle">To Educate Rural Students</p>
        <p className="dates">25 May – 16 June 2026</p>
      </section>
      <div className="details">
        <p><strong>AMARISM</strong></p>
        <p>Madras Christian College (Autonomous) · History Department</p>
        <p>Register No. 2401711020045</p>
        <p>Certificate Ref. AF/ACT/2026/7816 · Issued 28 June 2026</p>
      </div>
      <style>{`
        .certificate-page{box-sizing:border-box;max-width:760px;margin:0 auto;padding:64px 16px 36px;font-family:Arial,Helvetica,sans-serif;color:#08602e;text-align:center}
        .certificate-page *{box-sizing:border-box}
        .certificate-card{background:#ffffeb;border:3px solid #18ad56;border-radius:18px;padding:clamp(30px,6vw,60px) clamp(16px,5vw,42px)}
        .certificate-card h1{font-size:clamp(26px,5vw,42px);line-height:1.2;margin:0 0 18px;font-weight:700}
        .check{display:inline-grid;place-items:center;width:1em;height:1em;background:#56a929;color:white;border-radius:5px;vertical-align:-.05em}
        .name{font-size:clamp(29px,5.5vw,46px);font-weight:700;line-height:1.18;margin:0 0 20px}
        .completed{font-size:clamp(26px,4.8vw,40px);font-weight:700;line-height:1.2;margin:0 0 18px}
        .mission{font-size:clamp(27px,5vw,41px);font-weight:700;line-height:1.2;margin:0 0 5px}
        .subtitle{font-size:clamp(20px,3.6vw,29px);font-weight:700;line-height:1.25;margin:0 0 22px}
        .dates{font-size:clamp(20px,3.5vw,28px);font-weight:700;line-height:1.3;margin:0}
        .details{color:#385944;font-size:15px;line-height:1.5;margin:26px 0 0}
        .details p{margin:4px 0}
        .details strong{color:#08602e}
        @media(max-width:480px){.certificate-page{padding-top:48px}.certificate-card{min-height:355px;display:flex;flex-direction:column;justify-content:center;align-items:center}}
      `}</style>
    </main>
  )
}
