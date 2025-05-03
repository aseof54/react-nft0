import React from "react";

const Heading = ({ className, bubbleColor, children }) => {
  return (
    <h2
      className={`heading ${className}`}
      style={{
        "--bubbleColor": bubbleColor,
      }}
    >
      {children}
    </h2>
  );
};

export default Heading;
