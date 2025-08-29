'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function DemoScreenshots() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: 1.2,
      }}
      className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
        <Image
          src="https://assets.aceternity.com/pro/aceternity-landing.webp"
          alt="Landing page preview"
          className="aspect-[16/9] h-auto w-full object-cover"
          height={1000}
          width={1000}
        />
      </div>
    </motion.div>
  );
}
