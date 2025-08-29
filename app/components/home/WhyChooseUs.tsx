import { Layers, LucideProps, Server, Sparkles, Zap } from 'lucide-react';
import React from 'react';

interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  color: string;
  bg: string;
}

const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: 'More Than a Checklist',
    description:
      'Not just habits — we connect your mood, routines, and productivity for a full picture.',
    icon: Layers,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-indigo-400 to-purple-600',
  },
  {
    title: 'AI-Powered Clarity',
    description:
      'Our smart insights highlight patterns you’d normally miss and suggest small improvements.',
    icon: Sparkles,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-pink-400 to-rose-600',
  },
  {
    title: 'Built on Appwrite',
    description:
      'Secure, scalable, and open-source backend — your data stays safe and under your control.',
    icon: Server,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-green-500 to-emerald-700',
  },
  {
    title: 'Designed for Consistency',
    description:
      'Simple, fast, and motivating — so tracking habits feels effortless, not like another task.',
    icon: Zap,
    color: 'text-white',
    bg: 'bg-gradient-to-tr from-yellow-400 to-orange-500',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-300  md:text-5xl">
        💡 WHY CHOOSE US?
      </h1>
      <p className="text-gray-600 mb-12">
        More than tracking — a complete growth tool
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item) => (
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
