import { Particles } from "../components/Particles";
import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full relative">
            <Particles
              className="absolute inset-0 -z-50"
              quantity={100}
              ease={80}
              color={"#5908dbff"}
              refresh
            />
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
