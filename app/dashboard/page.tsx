'use client';

import React from 'react';
import {
  WaitlistLogo,
  EmailForm,
  FeatureCard,
  BackedByLogo,
} from '@/components/waitlist';
import { features, backedByLogos } from '@/data/waitlistData';

export default function DashboardPage() {
  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    alert(`Thank you! ${email} has been added to the waitlist.`);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0f0d]">
      {/* Background Gradient Overlay */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 20% 30%,
              rgba(13, 79, 74, 0.6) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at 80% 40%,
              rgba(26, 71, 42, 0.5) 0%,
              transparent 50%
            )
          `,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Hero Section */}
        <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="mb-12 sm:mb-16">
            <WaitlistLogo />
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Попробуйте первыми
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-md text-base leading-relaxed text-gray-400 sm:mb-16 sm:text-lg">
            Оставьте почту — пришлём доступ к бета-версии ИИ-ассистента, который ускорит работу с договорами, исками и судебной практикой
          </p>

          {/* Email Form */}
          <div className="w-full max-w-2xl">
            <EmailForm onSubmit={handleEmailSubmit} />
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="mb-16 mt-24 sm:mb-20 sm:mt-32">
          {/* Divider */}
          <div className="mx-auto mb-8 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-gray-700/30 to-transparent" />

          {/* Backed By Label */}
          <div className="mb-8 text-center text-sm uppercase tracking-wider text-gray-500">
            Партнёры
          </div>

          {/* Logos */}
          <div className="flex items-center justify-center gap-12 sm:gap-16">
            {backedByLogos.map((logo) => (
              <div key={logo.id} className="opacity-70 transition-opacity hover:opacity-100">
                <BackedByLogo logo={logo} />
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="pb-16 pt-8 sm:pb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
