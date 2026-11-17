
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Certificates from "./components/Certificates";

function App() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "MySQL",
    "Git",
    "GitHub",
    "Artificial Intelligence",
    "Machine Learning",
  ];

  const projects = [
    {
      title: "EduPath AI",
      description:
        "An AI-powered coding education platform with learning dashboards, coding practice, assessments, and AI tutor support.",
      tech: "React • AI • Web Development",
    },
    {
      title: "AI Agriculture Assistance",
      description:
        "An application concept for AI-assisted crop disease identification, weather information, and agricultural support.",
      tech: "AI • Python • Application Development",
    },
    {
      title: "Daily Expense Tracker",
      description:
        "A budget management application to record expenses, manage daily budgets, and review spending reports.",
      tech: "Web Development • Database",
    },
    {
      title: "My Scheme Application",
      description:
        "A government schemes finder prototype with a responsive interface and search functionality.",
      tech: "HTML • CSS • JavaScript",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_og9nzwn",
        "template_rouv0vi",
        formRef.current,
        "i9A7C6Xq5xNtkLZOv"
      )
      .then(() => {
        setStatus("Message sent successfully! Thank you for contacting me.");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Message could not be sent. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#050510] text-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050510]/90 backdrop-blur-lg border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="text-2xl font-bold text-cyan-400">
            AJAY<span className="text-white">.DEV</span>
          </h1>

          <div className="hidden md:flex gap-7 text-sm">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#certificates" className="hover:text-cyan-400 transition">Certificates</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 pt-28 max-w-7xl mx-auto"
      >
        <div className="flex-1 text-center md:text-left animate-fade">

          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AJAY <span className="text-cyan-400">KUMAR</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            AI & ML Student | Developer | Tech Enthusiast
          </h2>

          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
            I am a B.Tech student specializing in Artificial Intelligence
            and Machine Learning. I enjoy building creative web applications,
            exploring AI technologies, and developing useful digital solutions.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">

            <a
              href="#projects"
              className="cyber-button bg-cyan-400 text-black px-7 py-3 rounded-lg font-bold"
            >
              View Projects
            </a>

            <a
              href="/my%20certificates/Ajay_Kumar_Bandi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button border border-cyan-400 px-7 py-3 rounded-lg"
            >
              View Resume
            </a>

          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-20"></div>

            <img
              src="/profile.jpg"
              alt="Ajay Kumar"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_35px_#00ffff55]"
            />

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            I am a B.Tech student at Malla Reddy University, specializing
            in Artificial Intelligence and Machine Learning. I have an
            interest in software development, frontend development,
            programming, and AI-powered applications.

            I enjoy learning new technologies, working with teams,
            participating in hackathons, and transforming ideas into
            practical projects.
          </p>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 bg-[#09091b]">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
            My Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="cyber-card border border-cyan-400/30 bg-[#111122] p-6 rounded-xl text-center hover:text-cyan-400"
              >
                <h3 className="font-semibold">{skill}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="cyber-card bg-[#101020] border border-cyan-400/20 p-8 rounded-xl hover:border-cyan-400"
              >

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7 mb-5">
                  {project.description}
                </p>

                <p className="text-sm text-cyan-300">
                  {project.tech}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates">
        <Certificates />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-[#09091b]">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-cyan-400 mb-4">
            Contact Me
          </h2>

          <p className="text-gray-300 mb-10">
            Have a project idea or an opportunity? Let's connect!
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap justify-center gap-5 mb-12">

            <a
              href="mailto:bandiajaykumar551@gmail.com"
              className="cyber-button border border-cyan-400 px-6 py-3 rounded-lg"
            >
              Email Me
            </a>

            <a
              href="https://github.com/ajaykumar-bandi"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button border border-cyan-400 px-6 py-3 rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ajay-kumar-bandi-3b1255379/"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button border border-cyan-400 px-6 py-3 rounded-lg"
            >
              LinkedIn
            </a>

          </div>

          {/* EMAILJS CONTACT FORM */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="max-w-xl mx-auto space-y-5 text-left"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-[#111122] border border-gray-700 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-[#111122] border border-gray-700 outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-lg bg-[#111122] border border-gray-700 outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              disabled={sending}
              className="cyber-button w-full bg-cyan-400 text-black font-bold py-4 rounded-lg disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                role="status"
                className="text-center text-cyan-400 mt-4"
              >
                {status}
              </p>
            )}

          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-cyan-400/20">

        <p className="text-gray-400">
          © {new Date().getFullYear()} Ajay Kumar. All Rights Reserved.
        </p>

        <p className="text-cyan-400 mt-2">
          Built with React and Tailwind CSS
        </p>

      </footer>

    </div>
  );
}

export default App;

