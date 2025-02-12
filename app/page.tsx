import Link from 'next/link';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-back text-white overflow-hidden scrollbar-hide">
      <ParticleBackground />

      <section className="relative flex flex-col items-center justify-start h-screen pt-[25vh]">
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-violet-700 leading-loose">Alexander Greene</h1>
          <div className="text-2xl leading-loose">
            <p>Software Engineer</p>
            <p>Based in College Station, Texas</p>
            <p>Front End | Back End | Full Stack | Mobile Applications</p>
            <p>
              Check out my{' '}
              <Link href="/portfolio">
                <span className="font-bold text-violet-700 hover:text-violet-500 transition-colors duration-200">Projects</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
