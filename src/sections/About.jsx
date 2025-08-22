import { useRef } from "react";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/FrameWorks";
import Certifications from "../components/Certifications";
import { Particles } from "../components/Particles";

const About = () => {
  const grid2Container = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="c-space section-spacing relative scroll-mt-20" id="about">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#5908dbff"}
        refresh
      />
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/bg-img.png"
            className=" absolute inset-0 object-cover w-full h-full opacity-60"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Kunal Sharma</p>
            <p className="subtext">
              A developer passionate about combining creativity and technology
              to build scalable web apps and explore AI/ML solutions.Bryond
              Problem-Solvings, I enjoy turning ideas into practical digital
              experiences, solving real-world problems, and continuously
              learning to grow as a developer.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2 relative overflow-visible">
          <p className="headtext flex justify-center">Certifications</p>
          <Certifications />
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className=" w-[60%]">
            <p className="headtext">Open To Work</p>
            <p className="subtext">
              <ul className="list-disc list-inside text-neutral-200 space-y-2 ">
                <li>
                  Opportunities in Software{" "}
                  <span className="pl-[9%]">Development</span>
                </li>
                <li>Internships & Full-time</li>
                <li>Remote work</li>
              </ul>
            </p>
          </div>
          <figure className="absolute left-[40%] top-[1%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4 scroll-mt-20" id="education">
          <p className="headtext">Education</p>
          <p className="subtext">
            <p className="font-semibold">
              B.Tech in Computer Engineering (Honours in AIML)
            </p>
            <p className="text-md text-gray-100 pt-2">
              Shah & Anchor Kutchhi Engineering College | 2022 – 2026
            </p>
            <p className="text-md text-gray-100">CGPA: 8.5</p>
          </p>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative">
          <div className="z-10 w-[50%]">
            {/* Heading + Button Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
              <p className="headtext">Tech Stack</p>

              {/* Explore All Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="mb-3 md:mr-20 mr-8 cursor-pointer px-3 py-2 md:mt-0 mt-2 bg-indigo-800 text-white shadow-md shadow-blue-200 rounded-full hover:bg-blue-500 transition hover:scale-105 duration-300 text-sm"
              >
                Explore All <ArrowRight className="inline-block ml-2" />
              </button>
            </div>
            <p className="hidden md:block text-lg text-gray-200">
              A versatile set of technologies spanning frontend, backend,
              databases, cloud, and machine learning—with Python as my core
              programming language. This allows me to design, develop, and
              deploy applications with efficiency.
            </p>
          </div>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[42%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white rounded-2xl p-6 w-[90%] max-w-4xl relative shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white cursor-pointer transition duration-300"
            >
              <X size={25} />
            </button>

            <h2 className="text-3xl font-bold mb-6 text-center underline">
              My Tech Stack
            </h2>

            {/* Grid Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
              <div className="p-4 rounded-xl bg-gradient-to-tr from-blue-400 to-blue-200 shadow-lg shadow-blue-200">
                <h3 className="font-semibold text-xl mb-2">Frontend</h3>
                <p className="text-lg">React, TailwindCSS, HTML, JavaScript</p>
              </div>
              <div className="p-4 rounded-xl shadow-lg shadow-blue-200 bg-gradient-to-tr from-orange-400 to-red-200">
                <h3 className="font-semibold text-xl mb-2">Backend</h3>
                <p className="text-lg">Node.js, Express, Django, Flask</p>
              </div>
              <div className="p-4 rounded-xl shadow-lg shadow-blue-200 bg-gradient-to-tr from-green-400 to-teal-200">
                <h3 className="font-semibold text-xl mb-2">Databases</h3>
                <p className="text-lg">MongoDB, MySQL, PostgreSQL</p>
              </div>
              <div className="p-4 rounded-xl shadow-lg shadow-blue-200 bg-gradient-to-tr from-yellow-400 to-red-200">
                <h3 className="font-semibold text-xl mb-2">AI / ML</h3>
                <p className="text-lg">
                  TensorFlow, PyTorch, Scikit-learn, OpenCV
                </p>
              </div>
              <div className="p-4 rounded-xl shadow-lg shadow-blue-200 bg-gradient-to-tr from-purple-400 to-pink-200">
                <h3 className="font-semibold text-xl mb-2">Cloud & DevOps</h3>
                <p className="text-lg">AWS, Docker, GitHub Control</p>
              </div>
              <div className="p-4 rounded-xl shadow-lg shadow-blue-200 bg-gradient-to-tr from-gray-400 to-gray-200">
                <h3 className="font-semibold text-xl mb-2">Languages</h3>
                <p className="text-lg">Python, C, Java</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
