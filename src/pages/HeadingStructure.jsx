import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeadingStructure = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Heading Structure Error Example</h1>
      <p className="mb-4">This page demonstrates the importance of proper heading structure:</p>
      
      {/* Bad example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Improper Heading Structure</h3>
        <h6 className="text-lg font-semibold mb-2">This is a main section</h6>
        <p className="mb-2">This structure is confusing for screen readers and doesn't convey the proper hierarchy of information.</p>
        <h2 className="text-2xl font-semibold mb-2">This is a subsection</h2>
        <p>The heading levels are out of order, which can be disorienting for users relying on assistive technologies.</p>
      </div>

      {/* Good example */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Proper Heading Structure</h2>
        <h3 className="text-xl font-semibold mb-2">This is a main section</h3>
        <p className="mb-2">This structure clearly conveys the hierarchy of information.</p>
        <h4 className="text-lg font-semibold mb-2">This is a subsection</h4>
        <p>The heading levels are in the correct order, making it easy for all users to understand the content structure.</p>
      </div>

      <Link to="/">
        <Button>Back to Index</Button>
      </Link>
    </div>
  );
};

export default HeadingStructure;