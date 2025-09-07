import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { caseStudies } from "@/config/services";

const CaseStudies = () => {
  const handleBookCall = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank');
  };

  const handleCaseStudyClick = (industry: string) => {
    const formattedIndustry = industry.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/case-study/${formattedIndustry}`;
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-4 py-2 glass rounded-full">
              <span className="text-sm font-medium text-primary">
                Proven Results That Speak for Themselves
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Real Success Stories
              <br />
              <span className="text-gradient">Across Industries</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See how we've transformed businesses across industries with our AI-powered lead generation and automation solutions.
            </p>
            
            <Button size="lg" className="button-gradient" onClick={handleBookCall}>
              Book Your Strategy Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Overview */}
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
              See how we've transformed businesses across industries with 
              our AI-powered lead generation and automation solutions.
            </p>
            

          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="glass-hover p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 glass rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {study.industry.split(' ')[0][0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {study.industry}
                      </h3>
                      <p className="text-gray-400 text-sm">Case Study</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 mb-6">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Results:</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full glass-hover"
                    onClick={() => handleCaseStudyClick(study.industry)}
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Journey Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/5 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-6 py-3 glass rounded-full border border-blue-500/20">
              <span className="text-sm font-medium text-blue-400">
                ✨ The AI Transformation Journey
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              From <span className="text-gray-400">Struggling</span> to{" "}
              <span className="text-gradient">Dominating</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Every successful business transformation starts with a single decision. 
              See the journey our clients take from challenge to breakthrough.
            </p>
          </motion.div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "The Challenge",
                description: "Struggling with low lead quality, manual processes, and missed opportunities",
                icon: "🎯",
                color: "text-blue-400"
              },
              {
                step: "02", 
                title: "The Discovery",
                description: "Understanding how AI automation can revolutionize your entire sales funnel",
                icon: "💡",
                color: "text-purple-400"
              },
              {
                step: "03",
                title: "The Breakthrough",
                description: "Witnessing 300-500% increases in qualified leads and revenue growth",
                icon: "🚀",
                color: "text-blue-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-hover p-8 rounded-2xl h-full text-center relative overflow-hidden">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-800/20">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">{item.icon}</div>
                  
                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Connecting Line (except for last item) */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                The Numbers Don't Lie
              </h3>
              <p className="text-gray-300">
                Our clients consistently achieve remarkable results within the first 90 days
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500%", label: "Average Lead Increase", color: "text-blue-400" },
                { number: "$2M+", label: "Revenue Generated", color: "text-purple-400" },
                { number: "95%", label: "Client Retention", color: "text-blue-500" },
                { number: "48hr", label: "Setup Time", color: "text-purple-500" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${metric.color}`}>
                    {metric.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a strategy call with our experts and discover how AI automation 
                can 10x your lead generation and sales performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="button-gradient"
                  onClick={handleBookCall}
                >
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="glass-hover">
                  View Our Services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
