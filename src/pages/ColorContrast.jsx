import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ColorContrast = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Color Contrast Error Example</h1>
      <p className="mb-4">This page demonstrates poor color contrast, which can make text difficult to read for some users:</p>
      
      {/* Bad example */}
      <div className="bg-yellow-200 p-4 mb-6">
        <p className="text-yellow-400">This text has poor contrast with its background, making it hard to read.</p>
      </div>

      {/* Good example */}
      <div className="bg-blue-100 p-4 mb-6">
        <p className="text-blue-800">This text has good contrast with its background, making it easy to read.</p>
      </div>

      <Link to="/">
        <Button>Back to Index</Button>
      </Link>
    </div>
  );
};

export default ColorContrast;