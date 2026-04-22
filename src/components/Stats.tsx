import { Users, MapPin, Package, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10K+',
    label: 'Happy Clients',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: MapPin,
    value: '180+',
    label: 'Countries Served',
    gradient: 'from-cyan-500 to-teal-400',
  },
  {
    icon: Package,
    value: '5M+',
    label: 'Deliveries/Year',
    gradient: 'from-teal-500 to-emerald-400',
  },
  {
    icon: Award,
    value: '25+',
    label: 'Years Experience',
    gradient: 'from-emerald-500 to-green-400',
  },
];

export default function Stats() {
  return (
    <section className="relative py-32 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Numbers That Speak
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-400/20 rounded-3xl p-12 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Logistics?
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Join thousands of satisfied clients and experience the future of shipping and wholesale distribution.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Schedule a Call
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Share Your Requirements</div>
                  <div className="text-gray-400 text-sm">Tell us about your shipping needs</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Get Custom Quote</div>
                  <div className="text-gray-400 text-sm">Receive a tailored solution</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Start Shipping</div>
                  <div className="text-gray-400 text-sm">Begin your seamless logistics journey</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
