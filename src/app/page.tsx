import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'Maximilian Kniely',
            'jobTitle': 'Fullstack Developer',
            'url': 'https://maximilian-kniely.at',
            'sameAs': [
              'https://github.com/MaximilianKniely',
              // Add other social profiles if available
            ]
          })
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}