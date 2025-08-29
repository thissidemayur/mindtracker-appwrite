'use client';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import React from 'react';
interface iTestimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
const testimonials: iTestimonial[] = [
  {
    quote:
      'This app changed how I approach my day — I’m finally consistent with my habits!',
    name: 'Aarav Sharma',
    designation: 'Software Engineer',
    src: '/images/testimonials/aarav.jpg',
  },
  {
    quote:
      'I love the mood tracker — it’s so simple, yet it helped me understand myself better.',
    name: 'Saanvi Kapoor',
    designation: 'Student',
    src: '/images/testimonials/saanvi.jpg',
  },
  {
    quote:
      'The insights are eye-opening. It feels like having a personal coach in my pocket.',
    name: 'Rohan Verma',
    designation: 'Entrepreneur',
    src: '/images/testimonials/rohan.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-300  md:text-5xl">
        💬 What Our Users Say
      </h1>
      <p className="text-gray-600 mb-12">
        Real stories of growth, balance, and clarity
      </p>

      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
