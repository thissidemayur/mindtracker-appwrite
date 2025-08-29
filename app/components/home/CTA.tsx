import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Side - Text */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-300  md:text-5xl">
              🌟 Ready to Build Better Habits? 🌟
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join hundreds of users already improving their daily routines and
              mental wellbeing.
              <br />
              Start your journey today — free, simple, and effective.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="relative flex h-14 w-full sm:w-auto items-center justify-center px-10 before:absolute before:inset-0 before:rounded-full before:bg-teal-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <span className="relative text-lg font-semibold text-white">
                  Start Tracking Now
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Illustration / Mockup Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/illustration.png" // 👉 replace with your image in /public
              alt="Habit Tracking Illustration"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
