import React from 'react';

const ResponsiveContainer = ({ children, className = '' }) => {
  return (
    <div className={`responsive-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;