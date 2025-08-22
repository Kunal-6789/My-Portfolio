import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "python",
    "mongodb",
    "tensorflow",
    "aws",
    "docker",
    "cplusplus",
    "css3",
    "dotnet",
    "git",
    "html5",
    "node",
    "javascript",
    "react",
    "mysql",
    "tailwindcss",
    "github",
    "vitejs",
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      {/* Desktop View (hidden on small screens) */}
      <div className="hidden md:flex relative h-[19rem] w-full items-center justify-center">
        <OrbitingCircles iconSize={48} radius={270}>
          {skills.map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>

        <OrbitingCircles iconSize={34} radius={180}>
          {skills.map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>

        <OrbitingCircles iconSize={25} radius={100}>
          {skills.reverse().map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>
      </div>

      {/* Mobile View (only one circle, hidden on desktop) */}
      <div className="flex md:hidden relative h-[15rem] w-full items-center justify-center">
        <OrbitingCircles iconSize={37} radius={160}>
          {skills.map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>
                <OrbitingCircles iconSize={28} radius={90}>
          {skills.map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    className="duration-200 rounded-md hover:scale-120"
    alt="tech-icon"
  />
);
