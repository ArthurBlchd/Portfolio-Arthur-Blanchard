"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const services = [
  "Search Engine Optimization",
  "Google Ads",
  "Lead Generations",
  "Emailing"
];

export const ScrollingBanner = () => {
  // Double the services array to ensure smooth infinite loop
  const repeatedServices = [...services, ...services, ...services];

  return (
    <div className="bg-primary overflow-hidden py-4 w-full">
      <motion.div
        animate={{
          x: [0, -50 * services.length], // Adjust based on content width
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex space-x-4 whitespace-nowrap"
      >
        {repeatedServices.map((service, index) => (
          <span key={index} className="inline-flex items-center">
            <span className="text-black font-bold text-lg">{service}</span>
            <Circle className="mx-4 w-2 h-2 text-black" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}