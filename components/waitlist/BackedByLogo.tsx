import React from 'react';
import { Zap, BarChart3 } from 'lucide-react';

interface BackedByLogoProps {
  logo: {
    id: number;
    name: string;
    type: 'letter' | 'text' | 'icon';
    letter?: string;
    text?: string;
    icon?: string;
  };
}

export function BackedByLogo({ logo }: BackedByLogoProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      {logo.type === 'letter' && logo.letter && (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 text-2xl font-bold text-gray-300">
          {logo.letter}
        </div>
      )}

      {logo.type === 'icon' && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-gray-800/50 text-gray-300">
          {logo.icon === 'lightning' && <Zap className="h-6 w-6" />}
          {logo.icon === 'bars' && <BarChart3 className="h-6 w-6" />}
        </div>
      )}

      <span className="text-xs text-gray-400">{logo.name}</span>
    </div>
  );
}
