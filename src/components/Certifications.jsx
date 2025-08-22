
import CertificateCard from "./CertificateCard";

const certificates = [
  {
    icon: "/assets/mern.png",
    certImage: "/assets/udemy_webdev.png",
    title: "Web Development Bootcamp",
    subtitle: "Udemy",
  },
    {
    icon: "/assets/ibm.png",
    certImage: "/assets/ibm_ai.png",
    title: "Artificial Intelligence Fundamentals",
    subtitle: "IBM",
  },
  {
    icon: "/assets/logos/python.svg",
    certImage: "/assets/udemy_python.jpg",
    title: "Complete Python Bootcamp",
    subtitle: "Udemy",
  },
  {
    icon: "/assets/cloud.png",
    certImage: "/assets/aws_cloud.png",
    title: "AWS Cloud Practitioner Essentials",
    subtitle: "Amazon Web Services",
  },
];

export default function Certifications() {
  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:flex gap-8 justify-center">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            icon={cert.icon}
            certImage={cert.certImage}
            title={cert.title}
            subtitle={cert.subtitle}
          />
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden gap-6 overflow-x-auto p-2">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            icon={cert.icon}
            certImage={cert.certImage}
            title={cert.title}
            subtitle={cert.subtitle}
          />
        ))}
      </div>
    </div>
  );
}
