import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const MissingAltText = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Missing Alt Text Error Example</h1>
      <p className="mb-4">This page demonstrates the importance of alt text for images:</p>
      
      {/* Bad example */}
      <div className="mb-6">
        <img src="https://via.placeholder.com/150" className="mb-2" />
        <p>The image above is missing alt text, making it inaccessible to screen readers.</p>
      </div>

      {/* Good example */}
      <div className="mb-6">
        <img src="https://via.placeholder.com/150" alt="A 150x150 placeholder image" className="mb-2" />
        <p>The image above has proper alt text, describing its content for screen readers.</p>
      </div>

      <Link to="/">
        <Button>Back to Index</Button>
      </Link>
    </div>
  );
};

export default MissingAltText;