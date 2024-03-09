import React, { ReactNode, useEffect, useRef, useState } from "react";
import MainContainer from "./components/main-comtainer/MainContainer";

import TaxReturn from "./components/organisms/tax-return/TaxReturn";
import Navbar from "./components/organisms/navbar/Navbar";
import ProsMilestone from "./components/organisms/pros-milestone/ProsMilestone";
import clx from "./components/utils/clx";
import ProgressBar from "./components/atoms/progress-bar/ProgressBar";
import PointIcon from "./components/icons/point-icon/PointIcon";
import { Area, AreaChart, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const App = () => {
  const [divWidth, setDivWidth] = useState<number | 0>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.offsetWidth);
      }
    };

    // Initial width on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainContainer>
      <div className="grid-row-10  grid grid-cols-1 gap-10   lg:grid-cols-12 ">
        <div className="col-span-full  rounded bg-white p-base">
          <Navbar />
        </div>
        <div className="col-span-9  row-span-2 rounded bg-white p-base ">
          <TaxReturn />
        </div>
        <div ref={divRef} className="col-span-3    rounded bg-white p-base ">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-title">Pros milestines</h1>
              <PointIcon />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-subtitle text-gray">Projects done</p>
                  <p>
                    <span>4</span>
                    <span className="text-sm">/</span>
                    <span className="text-sm text-gray">8</span>
                  </p>
                </div>
                <ProgressBar progress={33} />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-subtitle text-gray">Rating</p>
                  <p>
                    <span>5</span>
                    <span className="text-sm">.</span>
                    <span className="text-sm text-gray">0</span>
                  </p>
                </div>
                <ProgressBar progress={100} />
              </div>
            </div>
          </div>
          <div>
            <AreaChart
              width={divWidth}
              height={450}
              data={data}
              margin={{ top: 13, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>

              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </div>
        </div>
        <div className="col-span-4    border ">item4</div>
        <div className="col-span-5    border ">item5</div>
        <div className="col-span-full border ">item6</div>
        <div className="col-span-4 border ">item7</div>
        <div className="col-span-5 row-span-2  border ">item8</div>
        <div className="col-span-3  border ">item9</div>
        <div className="col-span-4  border ">item10</div>
        <div className="col-span-3  border">item11</div>
      </div>
    </MainContainer>
  );
};

export default App;
