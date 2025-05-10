/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import im1 from '../assets/im1.jpg';

const services = [
  {
    title: "Maintenance Informatique",
    description: "Assistance technique complète pour vos équipements informatiques",
    icon: "🛠️"
  },
  {
    title: "Logiciels de Gestion d'École",
    description: "Solutions logicielles complètes pour la gestion de votre établissement",
    icon: "📚"
  },
  {
    title: "Réseaux Informatiques",
    description: "Solutions réseau complètes pour votre entreprise ou établissement",
    icon: "🌐"
  },
  {
    title: "Laboratoires de Sciences",
    description: "Installation et maintenance d'équipements scientifiques",
    icon: "🔬"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-50">
      {/* Section Hero */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-6xl px-8 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl text-primary-900">
                Solutions Technologiques pour l'Éducation
              </h1>
              <p className="mb-8 text-xl text-secondary-700">
                FEIDEU SERVICES vous accompagne dans la modernisation de votre établissement avec des solutions technologiques innovantes et fiables.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 font-medium text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700"
                >
                  <Link to="/contact">Contactez-nous</Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 font-medium transition-colors duration-300 bg-white border rounded-lg text-primary-600 hover:bg-secondary-50 border-primary-600"
                >
                  <Link to="/services">Nos Services</Link>
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md">
                <img
                  // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  src="src/assets/labo_sante1.jpg"
                  alt="Solutions technologiques pour l'éducation"
                  className="w-full h-auto shadow-xl rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16">
        <div className="max-w-6xl px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-primary-900">
              Nos Services
            </h2>
            <p className="text-xl text-secondary-700">
              Des solutions complètes pour répondre à tous vos besoins
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 text-center bg-white shadow-lg rounded-2xl"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-primary-900">
                  {service.title}
                </h3>
                <p className="text-secondary-700">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-6xl px-8 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-primary-900">
                À Propos de FEIDEU SERVICES
              </h2>
              <p className="mb-6 text-secondary-700">
                Fondée par Mr WOMGA ALBERT, FEIDEU SERVICES est une entreprise spécialisée dans les solutions technologiques pour l'éducation. Notre mission est de fournir des services de qualité pour améliorer l'efficacité des établissements éducatifs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-medium text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700"
              >
                <Link to="/about">En savoir plus</Link>
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md">
                <img
                  src={im1}
                  alt="Équipe FEIDEU SERVICES"
                  className="w-full h-auto shadow-xl rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16">
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
              <Link to="/contact">Contactez-nous</Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 