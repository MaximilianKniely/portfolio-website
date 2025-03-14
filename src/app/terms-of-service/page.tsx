// src/app/terms-of-service/page.tsx
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="mt-16 prose prose-blue prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using this website, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10">2. User Conduct</h2>
            <p className="text-gray-700">
              You agree to use this website for lawful purposes only and in a manner that does not
              infringe the rights of any third party.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10">3. Intellectual Property</h2>
            <p className="text-gray-700">
              All content included on this website, such as text, graphics, logos, images, and software,
              is the property of the website owner or its content suppliers and protected by copyright laws.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}