import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { testimonialStats } from "@/config/services";

export const ResultsShowcase = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how we've transformed businesses across industries with our AI-powered
            lead generation and automation solutions.
          </p>
          

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonialStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="glass-hover p-8 text-center h-full">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
                  {stat.title}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.subtitle}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block glass rounded-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to see similar results for your business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of businesses that have transformed their lead generation 
              and sales processes with our AI-powered solutions.
            </p>
            <button 
              className="button-gradient px-8 py-3 rounded-full font-semibold"
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank')}
            >
              Book Your Strategy Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};