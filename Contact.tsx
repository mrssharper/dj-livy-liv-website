import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    eventLocation: "",
    date: "",
    eventDescription: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "9f104855-5fca-4880-b530-00e7af635e53",
            name: formData.name,
            email: formData.email,
            subject: `New Booking Request - ${formData.eventType}`,
            message: `
EVENT BOOKING REQUEST
Name: ${formData.name}
Email: ${formData.email}
Phone: (Please respond to get their phone number)

EVENT DETAILS:
Event Type: ${formData.eventType}
Location Type: ${formData.eventLocation}
Event Date: ${formData.date}

Event Description:
${formData.eventDescription}

Additional Message:
${formData.message || "None"}
          `,
          }),
        },
      );

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          eventType: "",
          eventLocation: "",
          date: "",
          eventDescription: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to book or have questions? Reach out and let's
            make your event unforgettable!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-pink-500/30">
            <h3 className="mb-6">Send Me a Message</h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-xl">
                <p className="text-green-400">
                  🎉 Thanks for reaching out! I'll get back to
                  you soon!
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-xl">
                <p className="text-red-400">
                  ❌ Something went wrong. Please email me
                  directly at Livilondyn@gmail.com
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select an event type</option>
                  <option value="party">Party</option>
                  <option value="festival">Festival</option>
                  <option value="retail">Retail</option>
                  <option value="corporate">
                    Corporate Event
                  </option>
                  <option value="gala">Gala</option>
                  <option value="live">Live Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Indoor or Outdoor?
                </label>
                <select
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select location type</option>
                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Describe Your Event
                </label>
                <textarea
                  name="eventDescription"
                  value={formData.eventDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:border-pink-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your event - type, expected attendance, venue, special requests..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:border-pink-500 focus:outline-none transition-colors resize-none"
                  placeholder="Any other details or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 rounded-xl transition-all transform hover:scale-105 glow-pink disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="inline mr-2" size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-blue-500/30">
              <h3 className="mb-6">Get In Touch</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone
                    className="text-pink-500 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a
                      href="tel:4044688765"
                      className="hover:text-pink-500 transition-colors"
                    >
                      404-468-8765
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail
                    className="text-blue-500 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a
                      href="mailto:Livilondyn@gmail.com"
                      className="hover:text-blue-500 transition-colors"
                    >
                      Livilondyn@gmail.com
                    </a>
                    <br />
                    <a
                      href="mailto:charlessharper@gmail.com"
                      className="hover:text-blue-500 transition-colors"
                    >
                      charlessharper@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    className="text-pink-500 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p>Atlanta, GA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-8 bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-3xl border border-pink-500/30">
              <h3 className="mb-4">Why Choose Me?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>
                    Professional equipment & backup systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>
                    Extensive music library across all genres
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>
                    Customizable packages to fit your budget
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>
                    Reliable, punctual, and professional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>
                    Read the crowd & adapt to the energy
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}