import React from 'react';

interface WaitlistLogoProps {
  className?: string;
}

export function WaitlistLogo({ className = '' }: WaitlistLogoProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-gray-900 shadow-lg ${className}`}
      style={{
        width: '90px',
        height: '90px',
      }}
    >
      <div className="relative flex items-center justify-center">
        <div className="text-5xl font-bold text-white">Ø</div>
      </div>
    </div>
  );
}
