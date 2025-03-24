import ParticlesBg from "./ParticlesBg";
import JourneyCard from "./JourneyCard";
import { journeyData } from "./JourneyData";

export default function JourneyParallax() {
  return (
    <div className="relative min-h-screen bg-gray-900 py-20">
      <ParticlesBg /> {/* Cosmic Background Particles */}

      <h2 className="text-center text-4xl font-bold text-white mb-12">
        My Journey 🚀
      </h2>
      
      <div className="relative space-y-32">
        {journeyData.map((item, index) => (
          <JourneyCard key={index} data={item} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
}
