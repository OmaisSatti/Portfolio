"use client";

import CountUp from "react-countup";
import stats from "@/data/stats.json";

const Stats = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-between items-center w-full">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 flex items-center justify-center gap-4 xl:justify-start">
            {/* CountUp Animation */}
            <span
              className={"text-4xl xl:text-6xl font-extrabold transition duration-300 text-foreground"}
            >
              <CountUp end={stat.value} duration={3} delay={0.5} />
              {stat.value >= 10 && "+"}
            </span>

            {/* Label */}
            <p
              className="max-w-[150px] leading-snug text-foreground/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

