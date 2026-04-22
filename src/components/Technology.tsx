import { Cpu, Database, Shield, Smartphone, Workflow, BarChart3 } from 'lucide-react';

const technologies = [
  {
    icon: Cpu,
    title: 'AI-Powered Routing',
    description: 'Machine learning algorithms optimize delivery routes in real-time.',
  },
  {
    icon: Database,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions ensure 99.9% uptime and data reliability.',
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'End-to-end encryption and blockchain verification for all shipments.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Tracking',
    description: 'Track shipments on the go with our intuitive mobile applications.',
  },
  {
    icon: Workflow,
    title: 'Automated Processing',
    description: 'Smart automation reduces processing time by up to 70%.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights and reporting for data-driven decisions.',
  },
];

export default function Technology() {
  return (
    <section className="relative py-32 bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{tech.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-6">
              <span className="text-sm text-blue-300">Innovation & Technology</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Powered by
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Cutting-Edge Tech
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We leverage the latest technology to provide you with the most efficient, secure, and reliable logistics solutions in the industry.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Real-Time Visibility</h4>
                  <p className="text-gray-400">Track every shipment with GPS precision and live updates.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Predictive Analytics</h4>
                  <p className="text-gray-400">AI forecasts potential delays and suggests alternatives.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Seamless Integration</h4>
                  <p className="text-gray-400">API connectivity with major e-commerce and ERP platforms.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-blue-400/20 rounded-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-400 text-sm mb-1">API Response Time</div>
                  <div className="text-3xl font-bold text-white">{'<50ms'}</div>
                </div>
                <div className="h-16 w-px bg-white/10"></div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">System Uptime</div>
                  <div className="text-3xl font-bold text-white">99.9%</div>
                </div>
                <div className="h-16 w-px bg-white/10"></div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Data Centers</div>
                  <div className="text-3xl font-bold text-white">12+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
