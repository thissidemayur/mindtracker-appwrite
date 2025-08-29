'use client';

import { Card } from '@/components/ui/card';
import {
  BarChart3,
  CheckCircle,
  Flame,
  Pencil,
  LucideProps,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';
import React from 'react';

interface iHowItWorks {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  color: string;
  bg: string;
}

const howItWorks: iHowItWorks[] = [
  {
    title: 'Create Your Habits & Goals',
    description:
      'Set daily or weekly habits tailored to your lifestyle — start small, grow big.',
    icon: Pencil,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-yellow-400 to-orange-500',
  },
  {
    title: 'Track Your Progress',
    description:
      'Check off habits and log moods quickly — stay aware and accountable every day.',
    icon: CheckCircle,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-green-400 to-emerald-600',
  },
  {
    title: 'Visualize Your Growth',
    description:
      'See streaks, charts, and mood trends — understand what drives your success.',
    icon: BarChart3,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
  },
  {
    title: 'Stay Consistent & Motivated',
    description:
      'Get reminders and smart nudges — build lasting habits with positive momentum.',
    icon: Flame,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-pink-500 to-rose-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-300  md:text-5xl">
        🌱 How It Works
      </h1>
      <p className="text-gray-600 mb-12">Simple steps to build better habits</p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorks.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 hover:border-gray-300"
          >
            <div className={`p-4 rounded-full shadow-md mb-4 ${item.bg}`}>
              <item.icon className={`w-8 h-8 ${item.color}`} />
            </div>
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
