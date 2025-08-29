import CTA from '@/app/components/home/CTA';
import DemoScrrenshorts from '@/app/components/home/DemoScreenshots';
import Feature from '@/app/components/home/Feature';
import Hero from '@/app/components/home/Hero';
import HowItWorks from '@/app/components/home/HowItWorks';
import Testimonials from '@/app/components/home/Testimonials';
import WhyChooseUs from '@/app/components/home/WhyChooseUs';
import { Section } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="h-full">
      <Hero />
      <HowItWorks />
      <DemoScrrenshorts />
      <Feature />
      <Testimonials />
      <WhyChooseUs />

      <CTA />
    </section>
  );
}
