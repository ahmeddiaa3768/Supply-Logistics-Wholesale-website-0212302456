import { Ship, Plane, Warehouse, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'Cost-effective shipping solutions for large-scale cargo across global trade routes.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast, reliable air cargo services for time-sensitive shipments worldwide.',
    gradient: 'from-cyan-500 to-teal-400',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'Secure storage facilities with advanced inventory management systems.',
    gradient: 'from-teal-500 to-emerald-400',
  },
  {
    icon: TrendingUp,
    title: 'Wholesale Distribution',
    description: 'Streamlined distribution networks connecting manufacturers to retailers.',
    gradient: 'from-emerald-500 to-green-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-6">
            <span className="text-sm text-blue-300">What We Offer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Logistics Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/10 group-hover:to-cyan-400/10 rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>

                  <div className="mt-6 text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                    Learn more →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
