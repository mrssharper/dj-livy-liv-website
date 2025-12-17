import { Music2, Heart } from 'lucide-react';
import djImage from 'figma:asset/e7eb314ddf8378c1754bc58b395d1b752f1dc069.png';
import healthyYouthLogo from 'figma:asset/b7862cbe1ea8a77b7adbd732657a7b63990abc2a.png';
import williamsLogo from 'figma:asset/9ea37c8318e981d6443662fa65d626e5ab20bb52.png';
import kidneyWalkLogo from 'figma:asset/c44f1ca1c3c0820f8af31f451b708ced278e1cda.png';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-blue-600 flex items-center justify-center">
                <Music2 size={20} className="text-white" />
              </div>
              <span className="gradient-text">DJ LIVY LIV</span>
            </div>
            <p className="text-gray-400">
              Making every event unforgettable with beats, energy, and professional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-pink-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <p className="text-sm text-gray-400 mb-3">Just a few of brands I've worked with</p>
            <div className="flex flex-col gap-4">
              <img src={healthyYouthLogo} alt="Healthy Youth USA" className="h-16 w-auto object-contain" />
              <img src={williamsLogo} alt="Williams Syndrome Foundation" className="h-14 w-auto object-contain" />
              <img src={kidneyWalkLogo} alt="Kidney Walk" className="h-14 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* DJ Image */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-2xl overflow-hidden border-2 border-pink-500/30">
            <img src={djImage} alt="DJ Livy Liv at work" className="w-48 h-auto" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-pink-500 fill-pink-500" /> by DJ Livy Liv
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 DJ Livy Liv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}