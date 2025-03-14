// src/app/privacy-policy/page.tsx
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="mt-16 prose prose-blue prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
            <p className="text-gray-700">
              This website collects anonymous usage data through Google Analytics, including:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>Pages visited and time spent on each page</li>
              <li>Referring websites and search terms</li>
              <li>Device information (type, operating system, browser)</li>
              <li>Geographic location (country and city level)</li>
              <li>Connection information and IP address (which is anonymized)</li>
            </ul>


            <h2 className="text-3xl font-bold text-gray-900 mt-10">2. How We Use Your Information</h2>
            <p className="text-gray-700">
                The collected data is used solely for statistical analysis to help improve website performance, content, and user experience. This information helps understand:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>Which pages are most popular</li>
              <li>How users navigate through the site</li>
              <li>Which devices and browsers are commonly used to access the site</li>
              <li>Geographic distribution of visitors</li>
            </ul>
            <p className="text-gray-700 mt-4">
              This data is processed by Google Analytics on our behalf and is subject to Google&apos;s privacy policy. No personally identifiable information is intentionally collected or shared with third parties.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700">
              This website uses cookies through Google Analytics to track user interactions and collect anonymous usage data. Google Analytics places cookies on visitors&apos; devices to gather information about their browsing behavior on our site.
            </p>
            <p className="text-gray-700 mt-4">
              These cookies collect information such as:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>How you reached the site</li>
              <li>Which pages you visit</li>
              <li>How long you spend on each page</li>
              <li>Technical information about your browser and device</li>
            </ul>
            <p className="text-gray-700 mt-4">
              The underlying Next.js framework may also use essential cookies for core functionality such as maintaining session state or preventing cross-site request forgery. These temporary cookies are strictly necessary for the website to function properly.
            </p>
            <p className="text-gray-700 mt-4">
              You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when websites try to place cookies on your device.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}