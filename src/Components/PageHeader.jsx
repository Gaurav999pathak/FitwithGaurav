import React from "react";

const PageHeader = ({ title, subtitle, gradient }) => {
  return (
    <div className={`w-full py-16 ${gradient}`}>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-sm text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
