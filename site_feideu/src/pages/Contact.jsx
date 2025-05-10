import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const contactInfo = [
  {
    title: "Adresse",
    description: "Yaoundé, Cameroun",
    icon: <FaMapMarkerAlt className="text-xl text-primary-600" />
  },
  {
    title: "Téléphone",
    description: "+237 6 77 40 28 51",
    icon: <FaPhone className="text-xl text-primary-600" />
  },
  {
    title: "Email",
    description: "contact@feideuservices.com",
    icon: <FaEnvelope className="text-xl text-primary-600" />
  },
  {
    title: "Horaires",
    description: "Lun - Ven: 8h - 18h",
    icon: <FaClock className="text-xl text-primary-600" />
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/feideuservices",
    icon: <FaLinkedin className="text-xl text-primary-600" />
  },
  {
    name: "Twitter",
    url: "https://twitter.com/feideuservices",
    icon: <FaTwitter className="text-xl text-primary-600" />
  },
  {
    name: "Instagram",
    url: "https://instagram.com/feideuservices",
    icon: <FaInstagram className="text-xl text-primary-600" />
  },
  {
    name: "GitHub",
    url: "https://github.com/feideuservices",
    icon: <FaGithub className="text-xl text-primary-600" />
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-50">
      {/* Section Hero */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-6xl px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl text-primary-900">
              Contactez-nous
            </h1>
            <p className="text-xl text-secondary-700">
              Nous sommes là pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-16">
        <div className="max-w-6xl px-8 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="mb-6 text-2xl font-bold text-primary-900">
                Nos Coordonnées
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start p-6 space-x-4 bg-white shadow-lg rounded-2xl"
                  >
                    <div className="text-primary-600">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-primary-900">
                        {info.title}
                      </h3>
                      <p className="text-secondary-700">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-primary-900">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-white shadow-lg rounded-2xl"
            >
              <h2 className="mb-6 text-2xl font-bold text-primary-900">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium text-secondary-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg border-secondary-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-secondary-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg border-secondary-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1 text-sm font-medium text-secondary-700">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg border-secondary-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-secondary-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg border-secondary-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 font-medium text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700"
                >
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-6xl px-8 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-primary-900">
              Prêt à Démarrer ?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-secondary-700">
              Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-medium text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              <a href="tel:+237699999999">Appelez-nous</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 