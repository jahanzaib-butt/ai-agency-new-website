import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, DollarSign, Shield, Zap, BarChart3, Users, FileText, TrendingUp, Star, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MedicalBilling = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-blue-500/5 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-4 py-2 glass rounded-full border border-green-500/20">
              <span className="text-sm font-medium text-green-400">
                🏥 AI-Powered Medical Billing Automation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Streamline Your Medical
              <br />
              <span className="text-gradient">Billing Process</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your medical practice with our AI-powered billing automation. 
              Reduce errors, increase revenue, and save time with intelligent claim processing, 
              automated follow-ups, and real-time analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="button-gradient"
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank')}
              >
                Get Free Billing Analysis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-hover"
                onClick={() => window.location.href = '#results'}
              >
                View Results
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
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
              Why Choose Our Medical Billing Solution?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform delivers measurable results for medical practices of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8 text-green-400" />,
                title: "Increase Revenue by 25-40%",
                description: "AI identifies missed billing opportunities and optimizes claim submission for maximum reimbursement rates.",
                color: "border-green-500/30",
                bgColor: "bg-green-500/5"
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-400" />,
                title: "Reduce Processing Time by 80%",
                description: "Automated claim submission, follow-ups, and denial management save your staff hours of manual work.",
                color: "border-blue-500/30",
                bgColor: "bg-blue-500/5"
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: "99.7% Accuracy Rate",
                description: "AI-powered validation ensures claims are submitted correctly the first time, reducing denials and rejections.",
                color: "border-purple-500/30",
                bgColor: "bg-purple-500/5"
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: "Real-Time Analytics",
                description: "Track performance metrics, identify trends, and make data-driven decisions with our comprehensive dashboard.",
                color: "border-yellow-500/30",
                bgColor: "bg-yellow-500/5"
              },
              {
                icon: <FileText className="w-8 h-8 text-red-400" />,
                title: "Automated Denial Management",
                description: "Intelligent system automatically identifies and resubmits denied claims with proper corrections.",
                color: "border-red-500/30",
                bgColor: "bg-red-500/5"
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-400" />,
                title: "Dedicated Support Team",
                description: "24/7 support from certified medical billing specialists who understand your practice's unique needs.",
                color: "border-indigo-500/30",
                bgColor: "bg-indigo-500/5"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className={`glass-hover p-8 h-full border-l-4 ${benefit.color} ${benefit.bgColor}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass rounded-lg flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-green-500/5 to-transparent"></div>
        
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
                🔄 Our Automated Billing Process
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              How We Transform Your{" "}
              <span className="text-gradient">Billing Operations</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Our 4-step automated process ensures maximum efficiency and accuracy in your medical billing operations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Data Integration & Analysis",
                  description: "Seamlessly integrate with your EHR/EMR system. Our AI analyzes your billing patterns, identifies inefficiencies, and creates a customized optimization plan.",
                  icon: "📊",
                  color: "border-blue-500/30",
                  bgColor: "bg-blue-500/5"
                },
                {
                  step: "02",
                  title: "Intelligent Claim Processing",
                  description: "AI automatically generates, validates, and submits claims with proper coding. Real-time validation ensures compliance with payer requirements.",
                  icon: "🤖",
                  color: "border-green-500/30",
                  bgColor: "bg-green-500/5"
                },
                {
                  step: "03",
                  title: "Automated Follow-up & Denial Management",
                  description: "Smart system tracks claim status, automatically follows up on pending claims, and intelligently handles denials with appropriate corrections.",
                  icon: "⚡",
                  color: "border-purple-500/30",
                  bgColor: "bg-purple-500/5"
                },
                {
                  step: "04",
                  title: "Performance Analytics & Optimization",
                  description: "Comprehensive reporting and analytics help you track revenue, identify trends, and continuously optimize your billing performance.",
                  icon: "📈",
                  color: "border-yellow-500/30",
                  bgColor: "bg-yellow-500/5"
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-black">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Proven Results for Medical Practices
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our clients consistently achieve remarkable improvements in their billing operations
            </p>
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "35%", label: "Average Revenue Increase", icon: <TrendingUp className="w-8 h-8 text-green-400" />, color: "text-green-400" },
              { number: "85%", label: "Reduction in Denials", icon: <Shield className="w-8 h-8 text-blue-400" />, color: "text-blue-400" },
              { number: "60%", label: "Faster Payment Processing", icon: <Clock className="w-8 h-8 text-purple-400" />, color: "text-purple-400" },
              { number: "99.7%", label: "Claim Accuracy Rate", icon: <Award className="w-8 h-8 text-yellow-400" />, color: "text-yellow-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 max-w-6xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Success Stories from Our Clients
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  practice: "Metro Cardiology Group",
                  specialty: "Cardiology Practice",
                  results: "Increased revenue by 42% and reduced claim processing time by 75%",
                  quote: "The AI system has revolutionized our billing process. We're seeing faster payments and significantly fewer denials.",
                  author: "Dr. Sarah Johnson, Practice Administrator"
                },
                {
                  practice: "Family Health Center",
                  specialty: "Multi-Specialty Clinic",
                  results: "Achieved 98% first-pass claim acceptance rate and 30% revenue growth",
                  quote: "Our billing efficiency has improved dramatically. The automated follow-up system ensures we never miss a payment opportunity.",
                  author: "Michael Chen, Billing Manager"
                }
              ].map((story, index) => (
                <Card key={index} className="glass p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">{story.practice}</h4>
                  <p className="text-sm text-blue-400 mb-3">{story.specialty}</p>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                    <p className="text-sm text-green-400 font-medium">{story.results}</p>
                  </div>
                  
                  <blockquote className="text-gray-300 italic mb-4">
                    "{story.quote}"
                  </blockquote>
                  
                  <p className="text-sm text-gray-400">— {story.author}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Our Solution Stands Out
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Compare our AI-powered platform with traditional billing methods
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 text-green-400 font-semibold">Our AI Solution</th>
                      <th className="text-center py-4 px-4 text-gray-400 font-semibold">Traditional Billing</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-4">
                    {[
                      { feature: "Claim Accuracy", ai: "99.7%", traditional: "85-90%" },
                      { feature: "Processing Time", ai: "2-4 hours", traditional: "2-3 days" },
                      { feature: "Denial Rate", ai: "2-3%", traditional: "15-20%" },
                      { feature: "Revenue Recovery", ai: "95%+", traditional: "70-80%" },
                      { feature: "Automated Follow-up", ai: "✓", traditional: "✗" },
                      { feature: "24/7 Monitoring", ai: "✓", traditional: "✗" }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-800">
                        <td className="py-4 px-4 text-white">{row.feature}</td>
                        <td className="py-4 px-4 text-center text-green-400 font-medium">{row.ai}</td>
                        <td className="py-4 px-4 text-center text-gray-400">{row.traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
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
                Ready to Transform Your Medical Billing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free billing analysis and discover how much revenue you're missing. 
                Our experts will identify opportunities to increase your practice's profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="button-gradient"
                  onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank')}
                >
                  Get Free Billing Analysis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass-hover"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Our Team
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>30-Day Guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalBilling;
