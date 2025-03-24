import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic"; // Correct import for v3+

export default function ParticlesBg() {
    const particlesInit = useCallback(async (engine) => {
        await loadBasic(engine); // Updated function
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "#0d1117" },
                particles: {
                    number: { value: 80 },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 2 },
                    move: { enable: true, speed: 1 },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                    },
                },
            }}
            className="absolute top-0 left-0 w-full h-full -z-10"
        />
    );
}
