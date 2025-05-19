import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Marketing, TechCorp",
    image: "/testimonials/sophie.jpg",
    content: "Leur expertise en développement web a transformé notre présence en ligne. Le site est non seulement magnifique mais aussi très performant."
  },
  {
    name: "Thomas Dubois",
    role: "CEO, StartUpX",
    image: "/testimonials/thomas.jpg",
    content: "La migration vers le cloud a été réalisée sans interruption de service. Une équipe professionnelle et réactive."
  },
  {
    name: "Marie Laurent",
    role: "CTO, InnovTech",
    image: "/testimonials/marie.jpg",
    content: "Leur approche en cybersécurité nous a permis de renforcer significativement notre protection contre les cybermenaces."
  },
  {
    name: "Pierre Bernard", 
    role: "Directeur Digital, RetailPlus",
    image: "/testimonials/pierre.jpg",
    content: "L'application mobile développée a dépassé nos attentes. L'expérience utilisateur est exceptionnelle."
  }
];

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 bg-gradient-to-b from-primary-50 to-primary-100"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-4xl font-bold text-center text-primary-900"
        >
          Témoignages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mb-16 text-center text-gray-700"
        >
          Découvrez ce que nos clients disent de notre travail et de notre collaboration.
          Leur satisfaction est notre meilleure récompense.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white shadow-lg rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800">{testimonial.name}</h3>
                  <p className="text-primary-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-600">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-8 text-center bg-white shadow-lg rounded-xl"
        >
          <h2 className="mb-4 text-2xl font-semibold text-primary-800">Devenez Notre Prochain Client Satisfait</h2>
          <p className="mb-6 text-gray-700">
            Rejoignez nos clients satisfaits et découvrez comment nous pouvons
            transformer votre projet en succès.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 font-medium text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700"
          >
            Discutons de Votre Projet
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials; 