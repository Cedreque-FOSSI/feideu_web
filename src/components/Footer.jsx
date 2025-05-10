import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl" />,
      url: "#"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-xl" />,
      url: "#"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-xl" />,
      url: "#"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl" />,
      url: "#"
    }
  ];

  const footerLinks = [
    {
      title: "Entreprise",
      links: [
        { name: "À Propos", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Projets", url: "/projects" },
        { name: "Contact", url: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Développement Web", url: "/services#web" },
        { name: "Applications Mobiles", url: "/services#mobile" },
        { name: "UI/UX Design", url: "/services#design" },
        { name: "Consulting", url: "/services#consulting" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { name: "Blog", url: "/blog" },
        { name: "Documentation", url: "/docs" },
        { name: "Support", url: "/support" },
        { name: "FAQ", url: "/faq" }
      ]
    }
  ];

  return (
    <footer className="bg-white text-secondary-900">
      <div className="max-w-6xl px-8 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo et Description */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/src/assets/LOGO2.jpg"
                alt="FEIDEU SERVICES"
                className="w-auto h-16 mb-4"
              />
              <p className="text-secondary-600">
                Solutions technologiques innovantes pour les établissements éducatifs.
              </p>
            </motion.div>
          </div>

          {/* Liens Rapides */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-secondary-900">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="transition-colors text-secondary-600 hover:text-primary-600">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="/about" className="transition-colors text-secondary-600 hover:text-primary-600">
                    À Propos
                  </a>
                </li>
                <li>
                  <a href="/services" className="transition-colors text-secondary-600 hover:text-primary-600">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/offers" className="transition-colors text-secondary-600 hover:text-primary-600">
                    Offres
                  </a>
                </li>
                <li>
                  <a href="/contact" className="transition-colors text-secondary-600 hover:text-primary-600">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-secondary-900">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="transition-colors text-secondary-600 hover:text-primary-600">
                    Maintenance Informatique
                  </a>
                </li>
                <li>
                  <a href="/services" className="transition-colors text-secondary-600 hover:text-primary-600">
                    Logiciels de Gestion d'École
                  </a>
                </li>
                <li>
                  <a href="/services" className="transition-colors text-secondary-600 hover:text-primary-600">
                    Réseaux Informatiques
                  </a>
                </li>
                <li>
                  <a href="/services" className="transition-colors text-secondary-600 hover:text-primary-600">
                    Laboratoires de Sciences
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-secondary-900">Contact</h3>
              <ul className="space-y-2">
                <li className="text-secondary-600">
                  Yaoundé, Cameroun
                </li>
                <li className="text-secondary-600">
                  <FaPhone className="inline-block mr-2" /> +237 6 77 40 28 51
                </li>
                <li className="text-secondary-600">
                  contact@feideuservices.com
                </li>
                <li className="text-secondary-600">
                  Lun - Ven: 8h - 18h
                </li>
              </ul>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="transition-colors text-secondary-600 hover:text-primary-600">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="transition-colors text-secondary-600 hover:text-primary-600">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="transition-colors text-secondary-600 hover:text-primary-600">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="transition-colors text-secondary-600 hover:text-primary-600">
                  <FaGithub size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-secondary-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-secondary-600"
          >
            <p>&copy; {currentYear} FEIDEU SERVICES. Tous droits réservés.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 