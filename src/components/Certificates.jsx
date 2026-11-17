
import React from "react";

const certificates = [
  {
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    file: "AIFundamentalsFoundationsforUnderstandingAI_Badge20260725-21-1pkz0o.pdf",
  },
  {
    title: "Language and Vision in AI",
    issuer: "IBM SkillsBuild",
    file: "AIFundamentalsLanguageandVisioninAI_Badge20260725-21-w825wl.pdf",
  },
  {
    title: "AI Literacy",
    issuer: "IBM SkillsBuild",
    file: "AILiteracy_Badge20260725-21-wj20hd.pdf",
  },
  {
    title: "Generative AI",
    issuer: "IBM SkillsBuild",
    file: "GettingStartedwithGenerativeAI_Badge20260725-21-mtjdtv.pdf",
  },
  {
    title: "Learn Java",
    issuer: "CodeChef",
    file: "ajay_kumar_08-Learn Java.pdf",
  },
  {
    title: "Learn Python Programming",
    issuer: "CodeChef",
    file: "ajay_kumar_08-Learn Python Programming.pdf",
  },
  {
    title: "Learn SQL",
    issuer: "CodeChef",
    file: "ajay_kumar_08-Learn SQL.pdf",
  },
  {
    title: "Practice Java",
    issuer: "CodeChef",
    file: "ajay_kumar_08-Practice Java.pdf",
  },
  {
    title: "Getting Started with AI",
    issuer: "AI Training",
    file: "getting started with ai.pdf",
  },
  {
    title: "Cyber Security",
    issuer: "Cyber Security",
    file: "getting strated with cyber security.pdf",
  },
  {
    title: "Exploratory Data Analysis",
    issuer: "Data Analytics",
    file: "exploratory data analysis.pdf",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "Project Management",
    file: "project fundamentals.pdf",
  },
  {
    title: "Cisco Modern AI",
    issuer: "Cisco",
    file: "cisco-modern ai.pdf",
  },
  {
    title: "Gradify tech",
    issuer: "Webinar",
    file: "Participation Certificate B. AJAY KUMAR .pdf",
  },
  {
    title: "Masquerade Hackathon",
    issuer: "Hackathon",
    file: "masquareade hackathon.jpeg",
    image: true,
  },
  {
    title: "Intellipaat Certificate",
    issuer: "Intellipaat",
    file: "intellipat.jpeg",
    image: true,
  },
  {
    title: "Venture Capital",
    issuer: "Venture Capital",
    file: "venture capital.png",
    image: true,
  },
];

export default function Certificates() {
  const folder = "/my%20certificates/";

  return (
    <section
      id="certificates"
      className="px-8 md:px-24 py-24 bg-[#080816] border-t border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 text-center tracking-[5px] uppercase text-sm">
          My Achievements
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mt-4 mb-5">
          CERTIFICATE <span className="text-fuchsia-500">GALLERY</span>
        </h2>

        <p className="text-gray-400 text-center mb-14">
          Learning, building and growing with every achievement.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {certificates.map((certificate, index) => {
            const fileUrl =
              folder + encodeURIComponent(certificate.file);

            return (
              <div
                key={index}
                className="cyber-card bg-[#101020] border border-cyan-500/20 rounded-2xl p-7"
              >
                <div className="text-4xl mb-5">
                  {certificate.image ? "🏆" : "📜"}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {certificate.title}
                </h3>

                <p className="text-cyan-400 text-sm mb-7">
                  {certificate.issuer}
                </p>

                <div className="flex gap-3 flex-wrap">

                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cyber-button px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400"
                  >
                    Preview
                  </a>

                  <a
                    href={fileUrl}
                    download={certificate.file}
                    className="cyber-button px-5 py-2 rounded-lg bg-cyan-400 text-black font-bold"
                  >
                    Download
                  </a>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
