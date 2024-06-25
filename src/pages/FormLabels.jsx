import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormLabels = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Form Labels Error Example</h1>
      <p className="mb-4">This page demonstrates the importance of proper form labels:</p>
      
      {/* Bad example */}
      <div className="mb-6">
        <p className="mb-2">Form without proper labels:</p>
        <form className="space-y-2">
          <Input type="text" placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your email" />
          <Button type="submit">Submit</Button>
        </form>
      </div>

      {/* Good example */}
      <div className="mb-6">
        <p className="mb-2">Form with proper labels:</p>
        <form className="space-y-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>

      <Link to="/">
        <Button>Back to Index</Button>
      </Link>
    </div>
  );
};

export default FormLabels;