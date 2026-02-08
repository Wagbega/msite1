import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Services for Modern Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From renewable energy systems to amusement park rides, CCTV installations, and industrial automation—we deliver professional-grade solutions with expert installation, maintenance, and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Explore Services
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl h-96 flex items-center justify-center text-white text-center p-8">
              <div>
                <p className="text-2xl font-bold mb-4">Professional Grade Solutions</p>
                <p className="text-lg opacity-90">Procurement • Installation • Repair • Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
