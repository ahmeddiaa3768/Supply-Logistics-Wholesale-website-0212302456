import { Building2, Award, TrendingUp, Globe as Globe2 } from 'lucide-react';

const partnerStats = [
  {
    icon: Building2,
    label: 'Enterprise Partners',
    value: '500+',
  },
  {
    icon: Award,
    label: 'Industry Awards',
    value: '45+',
  },
  {
    icon: TrendingUp,
    label: 'Growth Rate',
    value: '156%',
  },
  {
    icon: Globe2,
    label: 'Global Presence',
    value: '180+',
  },
];

const industries = [
  'E-Commerce',
  'Manufacturing',
  'Retail',
  'Technology',
  'Healthcare',
  'Automotive',
  'Fashion',
  'Food & Beverage',
];

export default function Partners() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-6">
            <span className="text-sm text-blue-300">Global Network</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Global Brands
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Partnering with industry leaders across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnerStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/10 group-hover:to-cyan-400/10 rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Industries We Serve
            </h3>
            <p className="text-gray-400">
              Delivering excellence across diverse market sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-white font-semibold">{industry}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Enterprise Solutions</h4>
              <p className="text-gray-400 text-sm">
                Customized logistics programs for Fortune 500 companies with complex supply chain needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-400/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Growing Businesses</h4>
              <p className="text-gray-400 text-sm">
                Scalable solutions that grow with your business, from startup to enterprise level.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-400/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Global Reach</h4>
              <p className="text-gray-400 text-sm">
                Seamless international shipping with local expertise in 180+ countries worldwide.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
