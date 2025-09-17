import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Target, TrendingUp, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const handleBookCall = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank');
  };

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "100+", label: "Businesses Scaled" },
    { icon: <Target className="w-8 h-8" />, number: "10M+", label: "Leads Generated" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "500%", label: "Average Growth" },
    { icon: <Award className="w-8 h-8" />, number: "98%", label: "Client Satisfaction" },
  ];

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
                About Miixed Realities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              We're Not Just Another
              <br />
              <span className="text-gradient">Marketing Agency</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're AI automation specialists who help businesses scale by implementing 
              cutting-edge technology that generates leads, qualifies prospects, and 
              closes deals automatically.
            </p>
            
            <Button size="lg" className="button-gradient" onClick={handleBookCall}>
              Book Strategy Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass p-6 text-center">
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Mission:
                <br />
                <span className="text-gradient">Scale Businesses with AI</span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Founded in 2023, Miixed Realities was born from a simple observation: 
                  businesses were drowning in manual processes while AI technology 
                  was advancing at lightning speed.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We saw an opportunity to bridge this gap by creating AI-powered 
                  automation systems that don't just generate leads, but qualify them, 
                  nurture them, and convert them into paying customers.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Today, we've helped over 500 businesses automate their growth, 
                  generating millions of dollars in additional revenue through our 
                  AI-driven approach.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* AI Innovation Timeline */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Our Innovation Journey
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      year: "2023",
                      title: "Company Founded",
                      description: "Started with a vision to democratize AI automation",
                      icon: "🚀",
                      color: "border-blue-500/30"
                    },
                    {
                      year: "2023",
                      title: "First AI System",
                      description: "Built our proprietary lead generation automation",
                      icon: "🤖",
                      color: "border-purple-500/30"
                    },
                    {
                      year: "2024",
                      title: "100+ Clients",
                      description: "Reached milestone of 100 successful implementations",
                      icon: "📈",
                      color: "border-blue-500/30"
                    },
                    {
                      year: "2024",
                      title: "$50M+ Generated",
                      description: "Helped clients generate over $50M in additional revenue",
                      icon: "💰",
                      color: "border-purple-500/30"
                    }
                  ].map((milestone, index) => (
                    <div key={index} className={`flex items-start gap-4 p-4 rounded-xl border-l-4 ${milestone.color} bg-white/5`}>
                      <div className="text-2xl flex-shrink-0">{milestone.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
                            {milestone.year}
                          </span>
                          <h4 className="text-lg font-bold text-white">{milestone.title}</h4>
                        </div>
                        <p className="text-gray-300 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We don't just promise results—we deliver them through proven 
              AI automation strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="glass p-8 h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Results-Driven
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Every campaign, every automation, every strategy is designed 
                  with one goal: measurable business growth and ROI.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass p-8 h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Cutting-Edge AI
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We leverage the latest AI technology to create automation 
                  systems that work 24/7 to grow your business.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="glass p-8 h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Partnership Approach
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We don't just work for you—we work with you as strategic 
                  partners invested in your long-term success.
                </p>
              </Card>
            </motion.div>
          </div>
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
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI automation can 10x your lead generation 
                and transform your business growth.
              </p>
              <Button size="lg" className="button-gradient" onClick={handleBookCall}>
                Book Free Strategy Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
