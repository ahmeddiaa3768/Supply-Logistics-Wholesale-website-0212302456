import { Shield, Zap, Clock, Headphones as HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Insured',
    description: 'Full insurance coverage and advanced security protocols for every shipment.',
  },
  {
    icon: Zap,
    title: 'Real-Time Tracking',
    description: 'Monitor your shipments 24/7 with our advanced GPS tracking system.',
  },
  {
    icon: Clock,
    title: '98% On-Time Delivery',
    description: 'Industry-leading delivery success rate with guaranteed time windows.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Dedicated support team available around the clock for your peace of mind.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-6">
              <span className="text-sm text-blue-300">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Built for Modern Business
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Experience the difference with our technology-driven approach to logistics. We combine decades of industry expertise with cutting-edge innovation.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Delivery Success Rate</span>
                    <span className="text-2xl font-bold text-white">98.5%</span>
                  </div>
                  <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '98.5%' }}></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-400/20 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-white">4.9/5</span>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex-1 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-400/20 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Average Transit Time</span>
                    <span className="text-2xl font-bold text-white">2.3 days</span>
                  </div>
                  <div className="text-sm text-gray-400">45% faster than industry average</div>
                </div>

                <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-400/20 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Cost Savings</span>
                    <span className="text-2xl font-bold text-white">32%</span>
                  </div>
                  <div className="text-sm text-gray-400">Average client cost reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
