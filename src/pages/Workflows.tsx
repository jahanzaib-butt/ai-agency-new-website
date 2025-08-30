import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Bot, Target, BarChart3, Settings, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Workflows = () => {
  const handleBookCall = () => {
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1M8zrqNjNMBr7Hv3rBLPZ2Q3xE', '_blank');
  };

  const workflows = [
    {
      title: "Lead Generation Automation",
      description: "Complete Meta Ads → Lead Capture → AI Qualification → CRM Integration workflow",
      icon: <Target className="w-8 h-8" />,
      steps: [
        "Launch targeted Meta ad campaigns",
        "Capture leads with optimized landing pages",
        "AI qualifies leads instantly via chat/voice",
        "Hot leads automatically added to CRM",
        "Follow-up sequences triggered automatically"
      ],
      results: "500% increase in qualified leads, 90% reduction in manual work"
    },
    {
      title: "AI Voice Appointment Setting",
      description: "Human-like AI voice agents that call leads and book appointments automatically",
      icon: <Bot className="w-8 h-8" />,
      steps: [
        "AI voice agent receives lead information",
        "Calls prospect with natural conversation",
        "Handles objections and qualification",
        "Books meeting in calendar automatically",
        "Sends confirmation and reminders"
      ],
      results: "80% contact rate, 35% booking rate, 24/7 operation"
    },
    {
      title: "Invoice Automation System",
      description: "Automated invoice generation, sending, and follow-up system",
      icon: <BarChart3 className="w-8 h-8" />,
      steps: [
        "Project completion triggers invoice",
        "Invoice generated and sent automatically",
        "Payment reminders sent at intervals",
        "AI follows up with personalized messages",
        "Overdue notifications to collections"
      ],
      results: "90% faster payments, 50% reduction in overdue invoices"
    },
    {
      title: "CRM Integration Hub",
      description: "Connect all your tools with intelligent automation workflows",
      icon: <Settings className="w-8 h-8" />,
      steps: [
        "Integrate existing CRM and tools",
        "Map data flow and touchpoints",
        "Create automated task assignments",
        "Set up reporting and analytics",
        "Monitor and optimize performance"
      ],
      results: "100% data accuracy, 80% time savings on admin tasks"
    },
    {
      title: "Sales Team AI Training",
      description: "AI-powered roleplay and training system for sales teams",
      icon: <Users className="w-8 h-8" />,
      steps: [
        "AI analyzes current sales performance",
        "Creates personalized training scenarios",
        "Conducts roleplay sessions with feedback",
        "Tracks improvement metrics",
        "Provides ongoing coaching"
      ],
      results: "40% increase in close rate, 60% faster onboarding"
    },
    {
      title: "LinkedIn Outreach Automation",
      description: "Intelligent LinkedIn prospecting and outreach automation",
      icon: <Zap className="w-8 h-8" />,
      steps: [
        "AI scrapes LinkedIn for target prospects",
        "Analyzes profiles for personalization",
        "Sends personalized connection requests",
        "Follows up with intelligent messaging",
        "Books meetings with interested prospects"
      ],
      results: "300% more prospects reached, 25% response rate"
    }
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
                AI-Powered Workflows
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Proven Automation
              <br />
              <span className="text-gradient">Workflows That Scale</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See the exact automation workflows we've built for 500+ businesses. 
              Each workflow is designed to generate leads, qualify prospects, 
              and drive revenue on autopilot.
            </p>
            
            <Button size="lg" className="button-gradient" onClick={handleBookCall}>
              Get Custom Workflow Built
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Workflows Grid */}
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
              Battle-Tested Workflows
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Each workflow has been refined through hundreds of implementations 
              and delivers consistent, measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass p-8 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {workflow.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {workflow.title}
                      </h3>
                      <p className="text-gray-400">
                        {workflow.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Workflow Steps:</h4>
                    <ol className="space-y-2">
                      {workflow.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3 text-gray-300">
                          <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-white">Results:</span>
                    </div>
                    <p className="text-sm text-primary font-medium">{workflow.results}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Showcase */}
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
              See Our Workflows in Action
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real screenshots and performance data from live client workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-xl overflow-hidden"
            >
              <img
                src="/lovable-uploads/a31acf57-fd8b-4eb6-b5f6-dcf3f37ad243.png"
                alt="Lead Generation Dashboard"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-white mb-2">Lead Gen Dashboard</h3>
                <p className="text-gray-400 text-sm">Real-time lead tracking and AI qualification results</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass rounded-xl overflow-hidden"
            >
              <img
                src="/lovable-uploads/175ea417-654b-40cb-a710-2cc348b97b38.png"
                alt="Voice AI Performance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-white mb-2">Voice AI Stats</h3>
                <p className="text-gray-400 text-sm">AI voice agent call performance and booking rates</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-xl overflow-hidden"
            >
              <img
                src="/lovable-uploads/94d792af-5be9-47d7-a286-226f6ed57c6b.png"
                alt="Automation Analytics"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-white mb-2">Automation ROI</h3>
                <p className="text-gray-400 text-sm">Complete workflow performance and revenue impact</p>
              </div>
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
                Get Your Custom Workflow Built
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's design and implement a custom AI automation workflow 
                that fits your specific business needs and growth goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="button-gradient" onClick={handleBookCall}>
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="glass-hover">
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

export default Workflows;