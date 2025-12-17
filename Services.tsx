import { Music, PartyPopper, Heart, Building2, Wine, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <PartyPopper size={40} />,
      title: "Parties",
      description: "From intimate gatherings to massive celebrations - I bring the beats that turn every party into an unforgettable experience!",
      color: "pink"
    },
    {
      icon: <Music size={40} />,
      title: "Festivals",
      description: "Music festivals, cultural celebrations, and outdoor events - delivering high-energy performances for crowds of all sizes!",
      color: "blue"
    },
    {
      icon: <Building2 size={40} />,
      title: "Retail",
      description: "Grand openings, product launches, and in-store events - creating the perfect ambiance to engage your customers!",
      color: "pink"
    },
    {
      icon: <Building2 size={40} />,
      title: "Corporate Events",
      description: "Company parties, team building events, and professional gatherings - sophisticated entertainment for the workplace!",
      color: "blue"
    },
    {
      icon: <Wine size={40} />,
      title: "Galas",
      description: "Elegant fundraisers, award ceremonies, and formal events - providing refined music and MC services!",
      color: "pink"
    },
    {
      icon: <Calendar size={40} />,
      title: "Live Events",
      description: "Concerts, showcases, and special performances - bringing professional DJ skills to any live setting!",
      color: "blue"
    },
    {
      icon: <Heart size={40} />,
      title: "Any Occasion",
      description: "No matter the event, I've got you covered! Custom services tailored to make your vision come to life!",
      color: "pink"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From intimate gatherings to major events, I've got you covered with professional DJ services that bring the party!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border ${
                service.color === 'pink' ? 'border-pink-500/30 hover:border-pink-500' : 'border-blue-500/30 hover:border-blue-500'
              } transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                service.color === 'pink' ? 'hover:glow-pink' : 'hover:glow-blue'
              }`}
            >
              <div className={`${service.color === 'pink' ? 'text-pink-500' : 'text-blue-500'} mb-4`}>
                {service.icon}
              </div>
              <h3 className="mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="mt-16 p-8 bg-gradient-to-r from-pink-600/10 to-blue-600/10 rounded-3xl border border-pink-500/30">
          <h3 className="text-center mb-8">Equipment:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🎵</div>
              <p>Professional Equipment</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔊</div>
              <p>Speakers</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎤</div>
              <p>Microphone & Sound</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✨</div>
              <p>Custom Playlists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
