import { useState } from "react";

export default function CertificateCard({ icon, certImage, title , subtitle }) {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="relative flex flex-col items-center group">
      {/* Certificate Icon */}
      <img
        src={icon}
        alt={title}
        className="w-18 h-18 cursor-pointer"
        onClick={() => setShowMobile((prev) => !prev)} // For mobile tap
      />

      {/* Title (Desktop only) */}
      <p className="mt-2 text-md text-center">{title}</p>
        {/* Subtitle (Desktop only) */}
      <p className="text-sm text-gray-300 hidden md:block text-center pt-2">{subtitle}</p>

      {/* Desktop Hover Preview */}
      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-70 p-2 rounded-lg bg-white shadow-lg opacity-0 group-hover:opacity-100 transition duration-500 hidden md:block z-50 cursor-pointer">
        <img src={certImage} alt={title} className="rounded-md" />
      </div>

      {/* Mobile Tap Preview */}
      {showMobile && (
        <div className="mt-2 w-40 p-2 rounded-lg bg-white shadow-lg md:hidden z-50">
          <img src={certImage} alt={title} className="rounded-md" />
        </div>
      )}
    </div>
  );
}
