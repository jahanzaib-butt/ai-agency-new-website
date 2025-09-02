import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonialImages = [
  {
    image: "/lovable-uploads/original-6e6ebec1684e7535a9564d4c955f934a.png",
    title: "Key Performance Metrics",
    description: "Real results from our AI-powered campaigns showing 500% lead increases and $50M+ revenue generated"
  },
  {
    image: "/lovable-uploads/b2b2.jpg", 
    title: "Industry Success Stories",
    description: "Proven results across SaaS, E-commerce, Professional Services, and Manufacturing sectors"
  }
];

const performanceScreenshots = [
  {
    image: "/lovable-uploads/b2523c62-4cf8-47f2-a4a1-829b8ac2c352.png",
    title: "Facebook Ads Performance",
    description: "Real campaign data showing consistent lead generation and cost optimization"
  },
  {
    image: "/lovable-uploads/6f334de1-78e9-44e9-a751-6d091ccb68ae.png",
    title: "Campaign Analytics Dashboard", 
    description: "Live performance tracking with detailed cost per result metrics"
  },
  {
    image: "/lovable-uploads/eff87813-0349-499f-b845-9b249837bc83.png",
    title: "Pipeline & Conversion Tracking",
    description: "Complete sales funnel overview with 20% conversion rates and $130K pipeline value"
  },
  {
    image: "/lovable-uploads/CaseStudy5.png",
    title: "Detailed Results Breakdown",
    description: "Cost analysis showing optimized spend and high-quality lead generation"
  }
];

export const TestimonialsGallery = () => {
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
            Real Performance Data
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See actual campaign results and performance metrics from our client success stories
          </p>
        </motion.div>

        {/* Main Results Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonialImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glass-hover p-6 h-full">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Performance Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performanceScreenshots.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="glass-hover p-6 h-full">
                <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-gray-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};