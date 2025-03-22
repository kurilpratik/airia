import React from "react";

const Service = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center border-t-2 border-b-2 border-blue-400 mb-8">
        <div className="bg-lime-300 px-4 py-2">
          <h2 className="text-2xl font-bold">Services</h2>
        </div>
        <p className="ml-4 text-sm">
          We provide AI-driven web accessibility solutions, including:
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service 1 */}
        <div className="rounded-3xl border border-gray-300 p-6 bg-gray-100 relative">
          <div className="bg-lime-300 inline-block px-3 py-1 rounded-md mb-4">
            <h3 className="text-xl font-bold">
              Automated ARIA
              <br />
              Code Analysis
            </h3>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex mt-16">
              <button className="bg-black rounded-full p-2 flex items-center">
                <span className="text-white text-sm mr-2">Learn more</span>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </button>
            </div>

            <div className="text-gray-400">
              {/* Simple illustration */}
              <svg viewBox="0 0 100 100" width="100" height="100">
                <circle
                  cx="50"
                  cy="50"
                  r="15"
                  stroke="gray"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="50"
                  y1="20"
                  x2="50"
                  y2="35"
                  stroke="gray"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="65"
                  x2="50"
                  y2="80"
                  stroke="gray"
                  strokeWidth="2"
                />
                <line
                  x1="20"
                  y1="50"
                  x2="35"
                  y2="50"
                  stroke="gray"
                  strokeWidth="2"
                />
                <line
                  x1="65"
                  y1="50"
                  x2="80"
                  y2="50"
                  stroke="gray"
                  strokeWidth="2"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="5"
                  stroke="gray"
                  strokeWidth="1"
                  fill="none"
                />
                <circle
                  cx="20"
                  cy="80"
                  r="10"
                  stroke="gray"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M80,25 L85,20 L80,15"
                  stroke="gray"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M25,25 L20,20 L25,15"
                  stroke="gray"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="rounded-3xl border border-gray-300 p-6 bg-lime-300 relative">
          <div className="bg-white inline-block px-3 py-1 rounded-md mb-4">
            <h3 className="text-xl font-bold">
              Real-Time AI Fixes &<br />
              Best Practice Suggestions
            </h3>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex mt-16">
              <button className="bg-black rounded-full p-2 flex items-center">
                <span className="text-white text-sm mr-2">Learn more</span>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </button>
            </div>

            <div>
              {/* Browser window illustration */}
              <svg viewBox="0 0 120 80" width="120" height="80">
                <rect
                  x="10"
                  y="10"
                  width="100"
                  height="70"
                  rx="3"
                  ry="3"
                  fill="white"
                  stroke="gray"
                  strokeWidth="1"
                />
                <rect
                  x="10"
                  y="10"
                  width="100"
                  height="15"
                  rx="3"
                  ry="3"
                  fill="#f0f0f0"
                  stroke="gray"
                  strokeWidth="1"
                />
                <circle cx="20" cy="17" r="3" fill="#ff6b6b" />
                <circle cx="30" cy="17" r="3" fill="#ffd93d" />
                <circle cx="40" cy="17" r="3" fill="#6bff6b" />
                <path
                  d="M65,50 L75,40 L85,50"
                  stroke="black"
                  strokeWidth="1"
                  fill="none"
                />
                <path d="M75,40 L75,60" stroke="black" strokeWidth="1" />
                <circle cx="75" cy="65" r="3" fill="black" />
              </svg>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="rounded-3xl border border-gray-300 p-6 bg-gray-900 relative">
          <div className="bg-white inline-block px-3 py-1 rounded-md mb-4">
            <h3 className="text-xl font-bold">
              Compliance Reporting &<br />
              Monitoring
            </h3>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex mt-16">
              <button className="bg-white rounded-full p-2 flex items-center">
                <span className="text-black text-sm mr-2">Learn more</span>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="black">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </button>
            </div>

            <div className="text-white">
              {/* Monitoring illustration */}
              <svg viewBox="0 0 100 100" width="100" height="100">
                <rect
                  x="40"
                  y="40"
                  width="30"
                  height="30"
                  rx="2"
                  fill="white"
                />
                <circle
                  cx="55"
                  cy="55"
                  r="8"
                  stroke="black"
                  strokeWidth="1"
                  fill="none"
                />
                <path d="M53,53 L57,57" stroke="black" strokeWidth="1" />
                <path d="M57,53 L53,57" stroke="black" strokeWidth="1" />
                <rect
                  x="70"
                  y="20"
                  width="20"
                  height="15"
                  rx="2"
                  fill="white"
                />
                <path d="M75,25 L80,25 L77.5,30 Z" fill="black" />
                <rect
                  x="20"
                  y="30"
                  width="20"
                  height="15"
                  rx="2"
                  fill="white"
                />
                <path d="M25,35 L30,35 L27.5,40 Z" fill="black" />
                <rect
                  x="80"
                  y="60"
                  width="20"
                  height="15"
                  rx="2"
                  fill="white"
                />
                <path d="M85,65 L90,65 L87.5,70 Z" fill="black" />
                <rect
                  x="35"
                  y="85"
                  width="40"
                  height="10"
                  rx="2"
                  fill="white"
                />
                <text x="40" y="93" fontSize="6" fill="black">
                  ★★★★★
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="rounded-3xl border border-gray-300 p-6 bg-gray-100 relative">
          <div className="bg-lime-300 inline-block px-3 py-1 rounded-md mb-4">
            <h3 className="text-xl font-bold">
              Seamless IDE Integration
              <br />
              for Developers
            </h3>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex mt-16">
              <button className="bg-black rounded-full p-2 flex items-center">
                <span className="text-white text-sm mr-2">Learn more</span>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </button>
            </div>

            <div className="text-gray-500">
              {/* IDE integration illustration */}
              <svg viewBox="0 0 100 80" width="100" height="80">
                <ellipse
                  cx="20"
                  cy="40"
                  rx="15"
                  ry="20"
                  fill="black"
                  opacity="0.2"
                />
                <ellipse
                  cx="80"
                  cy="40"
                  rx="15"
                  ry="20"
                  fill="black"
                  opacity="0.2"
                />
                <path
                  d="M30,30 L70,30"
                  stroke="gray"
                  strokeWidth="1"
                  strokeDasharray="5,3"
                />
                <path
                  d="M30,40 L70,40"
                  stroke="gray"
                  strokeWidth="1"
                  strokeDasharray="5,3"
                />
                <path
                  d="M30,50 L70,50"
                  stroke="gray"
                  strokeWidth="1"
                  strokeDasharray="5,3"
                />
                <path
                  d="M45,25 L55,25 L55,55 L45,55 Z"
                  stroke="gray"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M35,30 L40,35 L35,40"
                  stroke="gray"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M65,30 L60,35 L65,40"
                  stroke="gray"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
