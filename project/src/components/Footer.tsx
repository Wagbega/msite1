import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={24} className="text-blue-400" />
              <span className="text-xl font-bold">ProServices</span>
            </div>
            <p className="text-gray-400">Professional-grade solutions across multiple industries.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition">Solar & Renewable</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Amusement Rides</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">CCTV Systems</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@proservices.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Worldwide Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ProServices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
