import { ArrowRight, Package, Truck, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <nav className="relative z-10 px-6 py-6 lg:px-16">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center transform rotate-12">
              <Package className="w-7 h-7 text-white -rotate-12" />
            </div>
            <span className="text-2xl font-bold text-white">GlobalShip</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
            Get Quote
          </button>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Worldwide Logistics Solutions</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Ship Smarter,
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Deliver Faster
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Your trusted partner in global shipping and wholesale logistics. We move your business forward with cutting-edge technology and unmatched reliability.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Start Shipping</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Global Partners</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold text-white">150K+</div>
                <div className="text-sm text-gray-400">Shipments/Year</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">On-Time Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-3xl blur-3xl"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              }}
            ></div>

            <div className="relative perspective-1000">
              <div
                className="relative transform-gpu transition-transform duration-200"
                style={{
                  transform: `rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg) rotateX(${-(mousePosition.y - window.innerHeight / 2) * 0.01}deg)`,
                }}
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div
                      className="floating-card bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 shadow-xl"
                      style={{ animationDelay: '0s' }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Truck className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400">Active Shipments</div>
                          <div className="text-2xl font-bold text-white">2,847</div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-xs text-gray-400">Real-time tracking</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="text-xs text-green-400">Live</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="floating-card bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 shadow-xl"
                      style={{ animationDelay: '0.5s' }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                          <Globe className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400">Global Reach</div>
                          <div className="text-2xl font-bold text-white">180+ Countries</div>
                        </div>
                      </div>
                      <div className="mt-4 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" style={{ width: '95%' }}></div>
                      </div>
                    </div>

                    <div
                      className="floating-card bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 shadow-xl"
                      style={{ animationDelay: '1s' }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <Package className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400">Warehouse Capacity</div>
                          <div className="text-2xl font-bold text-white">5M+ sq ft</div>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <div className="flex-1 h-1.5 bg-emerald-500 rounded-full"></div>
                        <div className="flex-1 h-1.5 bg-emerald-500 rounded-full"></div>
                        <div className="flex-1 h-1.5 bg-emerald-500/50 rounded-full"></div>
                        <div className="flex-1 h-1.5 bg-slate-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-400/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-blue-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </div>
  );
}
