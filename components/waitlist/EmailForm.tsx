'use client';

import React, { useState } from 'react';

interface EmailFormProps {
  onSubmit?: (email: string) => void;
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit?.(email);
      // Reset form
      setEmail('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="h-12 flex-1 rounded-lg border border-gray-700 bg-gray-800/60 px-4 text-base text-white placeholder-gray-500 backdrop-blur-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
      />
      <button
        type="submit"
        className="flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-gray-100 px-8 text-base font-medium text-gray-900 transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        Оставить заявку
      </button>
    </form>
  );
}
