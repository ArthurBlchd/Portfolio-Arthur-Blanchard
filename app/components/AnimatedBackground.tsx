"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Area, AreaChart, YAxis, XAxis, CartesianGrid } from "recharts";

export const AnimatedBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [data, setData] = useState(() => {
    // Generate initial data with slow growth
    return Array.from({ length: 12 }, (_, i) => ({
      value: Math.pow(i, 1.5) * 10 + Math.random() * 20,
      month: `Month ${i + 1}`
    }));
  });

  useEffect(() => {
    // Set dimensions after component mounts
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    const animate = () => {
      setData(prevData => {
        const newData = [...prevData];
        // Shift all values left
        newData.shift();
        // Add new value with accelerated growth
        const lastValue = newData[newData.length - 1].value;
        const growth = Math.random() * 30 + 20; // Accelerated growth
        newData.push({ 
          value: lastValue + growth,
          month: `Month ${parseInt(newData[newData.length - 1].month.split(' ')[1]) + 1}`
        });
        return newData;
      });
    };

    const interval = setInterval(animate, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-gray-900 overflow-hidden">
      <div className="w-full h-full flex items-center justify-center opacity-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-full"
        >
          <AreaChart
            width={dimensions.width}
            height={dimensions.height}
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1dce52" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#1dce52" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.2} />
            <XAxis 
              dataKey="month" 
              stroke="#666"
              tick={{ fill: '#666' }}
              axisLine={{ stroke: '#666' }}
            />
            <YAxis 
              stroke="#666"
              tick={{ fill: '#666' }}
              axisLine={{ stroke: '#666' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#1dce52"
              fillOpacity={1}
              fill="url(#colorValue)"
              isAnimationActive={true}
              animationDuration={2000}
            />
          </AreaChart>
        </motion.div>
      </div>
    </div>
  );
}