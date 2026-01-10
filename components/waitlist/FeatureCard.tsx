import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-800/40 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-gray-700 sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900/50 text-primary-400">
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
