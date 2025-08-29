'use client';

import { Card } from '@/components/ui/card';
import {
  BarChart3,
  Bell,
  Bot,
  CheckCircle,
  Lock,
  LucideProps,
  Smile,
} from 'lucide-react';
import React from 'react';

interface iFeature {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  color: string; // icon color
  bg: string; // background gradient
}

const features: iFeature[] = [
  {
    title: 'Smart Habit Tracking',
    description:
      'Set daily routines and track them with streaks that keep you motivated.',
    icon: CheckCircle,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-green-400 to-emerald-600',
  },
  {
    title: 'Mood Journaling',
    description:
      'Log your mood in seconds with emojis or colors and spot hidden patterns.',
    icon: Smile,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
  },
  {
    title: 'Visual Insights',
    description:
      'Beautiful charts reveal how your habits and moods connect over time.',
    icon: BarChart3,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-indigo-400 to-violet-600',
  },
  {
    title: 'Reminders & Nudges',
    description:
      'Stay consistent with gentle notifications that push you toward progress.',
    icon: Bell,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-orange-400 to-red-500',
  },
  {
    title: 'AI-Powered Insights',
    description:
      'Get personalized tips on improving habits and balancing your mood.',
    icon: Bot,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-blue-400 to-cyan-600',
  },
  {
    title: 'Privacy First',
    description:
      'Your data is safe with Appwrite — fully open-source and under your control.',
    icon: Lock,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-900',
  },
];

export default function Feature() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-300  md:text-5xl">
        ✨ Features
      </h1>
      <p className="text-gray-600 mb-12">Powerful tools to grow every day </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
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
