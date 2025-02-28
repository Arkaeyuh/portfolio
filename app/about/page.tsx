import Link from 'next/link';
import Image from 'next/image';
import ParticleBackground from '@/components/ParticleBackground';
import { SocialIcon } from 'react-social-icons';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-back text-white overflow-hidden scrollbar-hide">
      <ParticleBackground />
      <section className="relative flex flex-col items-center justify-center text-center pt-[10vh]">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-32">
          <div className="text-lg leading-loose max-w-xl rounded-xl shadow-md bg-gray-900 p-5 transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-3xl font-bold mb-4 text-violet-700">About Me</h1>
            <p>
              Hello, I&apos;m Alex Greene. I&apos;m a Computer Science Honors and Mathematics Minor student at Texas A&amp;M University, class of 2026.
              I&apos;ve currently worked on a few projects and I&apos;m interested in Full-Stack and Mobile Application development. 
              I currently specialize in React, Next.js, and Tailwind CSS, but I&apos;m always looking to learn more.
              You can check out some of my{' '}
              <Link href="/portfolio">
                <span className="font-bold text-violet-700 hover:text-violet-500 transition-colors duration-200">Projects</span>
              </Link>.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <SocialIcon url="https://github.com/Arkaeyuh" target="_blank" className="transition-transform duration-300 hover:scale-110" />
              <SocialIcon url="https://www.linkedin.com/in/alexanderngreene/" target="_blank" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <div className="mt-4">
              <Link href="https://drive.google.com/file/d/1vLQC64FFZsTg_xy0CK9At-IGVPkKQlBF/view?usp=sharing" target="_blank" download>
                <p className="bg-violet-700 text-white py-2 px-4 rounded-lg hover:bg-violet-500 transition-colors duration-200">Download Resume</p>
              </Link>
            </div>
          </div>
          <div />
          <div className="max-w-lg rounded-xl shadow-md bg-gray-900 p-5 transform transition-transform duration-300 hover:scale-105">
            <Image className="rounded-xl" src="/personal_image.jpg" alt="Profile Picture" width={500} height={0} style={{ height: 'auto' }} />
          </div>
        </div>
      </section>
    </div>
  );
}