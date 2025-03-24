import { motion, useScroll, useTransform } from "framer-motion";

export default function JourneyCard({ data, isLeft }) {
    const { scrollYProgress } = useScroll();
    const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]); // Speed-up effect

    return (
        <motion.div
            style={{ y: translateY }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`relative flex items-center justify-between max-w-4xl mx-auto p-6 rounded-lg shadow-xl bg-white/10 backdrop-blur-lg 
      ${isLeft ? "flex-row" : "flex-row-reverse"}`}
        >
            <img src={data.image} alt={data.title} className="w-32 h-32 rounded-full border-4 border-blue-500" />
            <div className="text-white text-center px-6">
                <h3 className="text-2xl font-semibold">{data.title}</h3>
                <span className="text-sm text-gray-400">{data.year}</span>
                <p className="text-gray-300">{data.description}</p>
            </div>
        </motion.div>
    );
}
