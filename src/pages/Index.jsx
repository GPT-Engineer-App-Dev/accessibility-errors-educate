import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  const accessibilityErrors = [
    { name: 'Color Contrast', path: '/color-contrast' },
    { name: 'Missing Alt Text', path: '/missing-alt-text' },
    { name: 'Keyboard Navigation', path: '/keyboard-navigation' },
    { name: 'Form Labels', path: '/form-labels' },
    { name: 'Heading Structure', path: '/heading-structure' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Accessibility Errors Examples</h1>
      <p className="mb-6">Click on the buttons below to see examples of common accessibility errors:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accessibilityErrors.map((error) => (
          <Link key={error.path} to={error.path}>
            <Button className="w-full">{error.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;