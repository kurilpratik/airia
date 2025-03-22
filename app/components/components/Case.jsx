import React from "react";

const Case = () => {
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto py-8">
        {/* Header with green background */}
        <div className="mb-6">
          <span className="bg-lime-300 px-4 py-2 text-xl font-bold rounded-md">
            Case Studies
          </span>
        </div>

        {/* Case studies container */}
        <div className="bg-gray-900 text-white rounded-3xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="flex flex-col justify-between h-full border-r border-gray-700 pr-6">
              <p className="mb-4">
                A national retail chain saw a 25% boost in engagement after
                implementing AiRIA's accessibility enhancements.
              </p>
              <div>
                <a href="#" className="text-lime-400 flex items-center group">
                  Learn more{" "}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="flex flex-col justify-between h-full border-r border-gray-700 pr-6">
              <p className="mb-4">
                A SaaS company improved its WCAG compliance by 80%, expanding
                its user base.
              </p>
              <div>
                <a href="#" className="text-lime-400 flex items-center group">
                  Learn more{" "}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="flex flex-col justify-between h-full">
              <p className="mb-4">
                A government website reduced accessibility violations by 67%
                using our AI-powered fixes.
              </p>
              <div>
                <a href="#" className="text-lime-400 flex items-center group">
                  Learn more{" "}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
