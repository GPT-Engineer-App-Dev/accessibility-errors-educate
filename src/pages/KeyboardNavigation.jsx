import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const KeyboardNavigation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Keyboard Navigation Error Example</h1>
      <p className="mb-4">This page demonstrates issues with keyboard navigation:</p>
      
      {/* Bad example */}
      <div className="mb-6">
        <p>The following div is not focusable with a keyboard, making it inaccessible:</p>
        <div className="bg-gray-200 p-4 mt-2" onClick={() => alert('Clicked!')}>
          Click me (but you can't reach me with a keyboard)
        </div>
      </div>

      {/* Good example */}
      <div className="mb-6">
        <p>The following button is properly focusable with a keyboard:</p>
        <Button className="mt-2" onClick={() => alert('Clicked!')}>
          Click me (you can reach me with a keyboard)
        </Button>
      </div>

      <Link to="/">
        <Button>Back to Index</Button>
      </Link>
    </div>
  );
};

export default KeyboardNavigation;