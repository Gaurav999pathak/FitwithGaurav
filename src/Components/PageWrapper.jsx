import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="pt-20">
      {" "}
      {/* navbar height space */}
      {children}
    </div>
  );
};

export default PageWrapper;
