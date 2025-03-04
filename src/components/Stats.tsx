"use client";

import CountUp from "react-countup";
import stats from '@/data/stats.json'

const Stats = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className="flex justify-between items-center w-full">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-4">
          {/* CountUp Animation */}
          <CountUp
            end={stat.value}
            duration={3} // Adjust duration for animation speed
            delay={0.5} // Delay before animation starts
          >
            {({ countUpRef }) => (
              <span
                ref={countUpRef}
                className={`text-6xl font-extrabold transition duration-300 
                  ${darkMode ? "text-white" : "text-black"}`}
              />
            )}
          </CountUp>

          {/* Label */}
          <p
            className={`text-lg font-medium leading-tight max-w-[120px] transition duration-300 
              ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
