import { Music2, Calendar } from 'lucide-react';
import logoImage from 'figma:asset/4068a77192516ffce572d5e3a16ca2318c818140.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo Image */}
        <div className="mb-8 flex justify-center">
          <img src={logoImage} alt="DJ Livy Liv Logo" className="w-64 h-auto" />
        </div>

        {/* Main heading */}
        <h1 className="mb-4">
          <span className="gradient-text">DJ LIVY LIV</span>
        </h1>

        {/* Elevator Pitch */}
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Turning every event into an unforgettable experience! 🎧 Young, energetic, and ready to bring the beats that keep your party alive. From festivals to any occasion, I create the perfect vibe for your event.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="px-8 py-4 bg-pink-600 hover:bg-pink-700 rounded-full transition-all transform hover:scale-105 glow-pink">
            <Calendar className="inline mr-2" size={20} />
            Book Now
          </a>
          <a href="#services" className="px-8 py-4 bg-transparent border-2 border-blue-500 hover:bg-blue-500/20 rounded-full transition-all">
            View Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-pink-500/30">
            <div className="text-4xl mb-2 gradient-text">✓</div>
            <p className="text-gray-400">Experienced</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/30">
            <div className="text-4xl mb-2 gradient-text">100%</div>
            <p className="text-gray-400">Party Satisfaction</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-pink-500/30">
            <div className="text-4xl mb-2 gradient-text">1000+</div>
            <p className="text-gray-400">Tracks Ready</p>
          </div>
        </div>
      </div>
    </section>
  );
}