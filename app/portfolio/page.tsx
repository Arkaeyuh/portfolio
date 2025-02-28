import Link from 'next/link';
import Image from 'next/image';
import ParticleBackground from '@/components/ParticleBackground';
import { SocialIcon } from 'react-social-icons';

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-back text-white scrollbar-hide">
      <ParticleBackground />

      <section className="relative flex flex-col items-center justify-start pt-[15vh] space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-5 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-center text-violet-700">codeAIde</h2>
            <Image className="rounded-xl shadow-md mb-4" src="/codeAIde.png" alt="codeAIde" width={700} height={500} />
            <p className="mb-4 text-center">codeAIde is an AI-Based Leetcode platform that aims to help you get better at solving Leetcode style questions. It is built using Next.js, TailwindCSS, React, Prisma with PostgreSql, and uses the openAI API for the code analysis.</p>
            <SocialIcon url="https://github.com/Arkaeyuh/codeAIde" target="_blank" className="transition-transform duration-300 hover:scale-110" />
          </div>
          <div className="bg-gray-900 p-5 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-center text-violet-700">Shadows of Lumina</h2>
            <Image className="rounded-xl shadow-md mb-4" src="/sol2.png" alt="Shadows of Lumina" width={700} height={500} />
            <p className="mb-4 text-center">Shadows Of Lumina is a Binding of Isaac inspired dungeon crawler game built entirely in the pyGame library. It was built in 36 hours for the HackRice 14 event, where it won 1st place in the First Timers&apos; Game Development Track</p>
            <SocialIcon url="https://github.com/Arkaeyuh/Shadows-Of-Lumina" target="_blank" className="transition-transform duration-300 hover:scale-110" />
          </div>
          <div className="bg-gray-900 p-5 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-center text-violet-700">Bobapos</h2>
            <Image className="rounded-xl shadow-md mb-4" src="/bobapos.png" alt="Bobapos" width={700} height={500} />
            <p className="mb-4 text-center">Bobapos is a fully fledged Point-Of-Sales system designed for a boba shop. Implemented using Java Swing and PostgreSQL, it allows for employee authentication, sales analysis, and much more.</p>
            <SocialIcon url="https://github.com/CSCE331-Spring2025/project2-team43" target="_blank" className="transition-transform duration-300 hover:scale-110" />
          </div>
        </div>

        <div className="mt-8">
          <Link href="https://github.com/Arkaeyuh/" target="_blank">
            <p className="bg-violet-700 text-white py-2 px-4 rounded-lg hover:bg-violet-500 transition-colors duration-200">View More Projects</p>
          </Link>
        </div>
      </section>
    </div>
  );
}