import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { services } from "@/config/services";
import { ResultsShowcase } from "@/components/services/ResultsShowcase";
import { CaseStudiesSection } from "@/components/services/CaseStudiesSection";
import { TestimonialsGallery } from "@/components/services/TestimonialsGallery";

const Services = () => {
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
                AI-Powered Business Growth
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Scale Your Business with
              <br />
              <span className="text-gradient">AI Automation</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We help businesses like yours generate more leads, qualify prospects automatically, 
              and scale their sales operations using cutting-edge AI technology and proven strategies.
            </p>
            
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank')}
            >
              Book Your Strategy Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end solutions to transform your lead generation and sales process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link to={`/services/${service.id}`}>
                  <Card className="glass-hover p-8 h-full cursor-pointer group">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-3">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-primary group-hover:text-white transition-colors">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Growth Process */}
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
                🚀 AI-Powered Business Growth Process
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              How We Transform Your{" "}
              <span className="text-gradient">Business Growth</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Our proven 4-step process has helped 500+ businesses achieve exponential growth 
              through AI automation and intelligent lead generation.
            </p>
          </motion.div>

          {/* Growth Process Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "We analyze your current lead generation, identify bottlenecks, and map your ideal customer journey",
                  icon: "🔍",
                  color: "border-blue-500/30",
                  bgColor: "bg-blue-500/5"
                },
                {
                  step: "02",
                  title: "AI System Design",
                  description: "Custom AI automation systems built specifically for your business model and target audience",
                  icon: "🤖",
                  color: "border-purple-500/30",
                  bgColor: "bg-purple-500/5"
                },
                {
                  step: "03",
                  title: "Implementation & Testing",
                  description: "Deploy your AI systems with rigorous testing to ensure optimal performance and results",
                  icon: "⚡",
                  color: "border-blue-500/30",
                  bgColor: "bg-blue-500/5"
                },
                {
                  step: "04",
                  title: "Scale & Optimize",
                  description: "Continuous monitoring, optimization, and scaling to maximize your growth potential",
                  icon: "📈",
                  color: "border-purple-500/30",
                  bgColor: "bg-purple-500/5"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-6 p-6 rounded-2xl border-l-4 ${process.color} ${process.bgColor} glass`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 glass rounded-full flex items-center justify-center">
                      <span className="text-2xl">{process.icon}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-bold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                        STEP {process.step}
                      </span>
                      <h3 className="text-xl font-bold text-white">{process.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{process.description}</p>
                  </div>
                  
                  {/* Connecting Arrow */}
                  {index < 3 && (
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-20">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1 mt-1"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 glass rounded-3xl p-12 max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                The Results Speak for Themselves
              </h3>
              <p className="text-gray-300">
                Our clients consistently achieve remarkable growth within the first 90 days
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500%", label: "Average Lead Increase", color: "text-blue-400", icon: "📈" },
                { number: "$2M+", label: "Revenue Generated", color: "text-purple-400", icon: "💰" },
                { number: "95%", label: "Client Retention", color: "text-blue-500", icon: "🤝" },
                { number: "48hr", label: "Setup Time", color: "text-purple-500", icon: "⚡" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Showcase */}
      <ResultsShowcase />

      {/* Performance Gallery */}
      <TestimonialsGallery />

      {/* Case Studies */}
      <CaseStudiesSection />

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
                  onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank')}
                >
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass-hover"
                  onClick={() => window.location.href = '/case-studies'}
                >
                  View Case Studies
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

export default Services;