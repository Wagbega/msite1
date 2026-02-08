import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    details: string;
    benefits: string[];
    process: string[];
  } | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b bg-white">
          <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
            <p className="text-gray-700 leading-relaxed mt-3">{service.details}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
            <div className="space-y-3">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-gray-800 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
