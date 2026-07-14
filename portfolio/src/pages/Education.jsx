import React from 'react';
import Timeline from '../components/Timeline';

export default function Education() {
  return (
    <div className="pt-6 pb-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-2">
        <span className="text-xs font-semibold tracking-wider text-accent-purple uppercase">Journey</span>
        <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight my-0">Education &amp; Experience</h2>
      </div>

      <Timeline />
    </div>
  );
}
