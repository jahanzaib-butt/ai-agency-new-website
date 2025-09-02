import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Play, CheckCircle, X, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { services } from "@/config/services";
import { useState, useRef, useEffect } from "react";

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleBookCall = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank');
  };

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    setIsPlaying(false);
    setIsMuted(false);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeVideoModal();
      }
    };

    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-white">
                Trusted by 500+ businesses
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Scale Your Business With
              <br />
              <span className="text-gradient"> AI Automation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We help businesses generate <span className="text-white font-semibold">10x more qualified leads</span> using AI-powered 
              automation, voice agents, and proven growth strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="button-gradient text-lg px-8 py-4 h-auto"
                onClick={handleBookCall}
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
              
              <button 
                className="flex items-center gap-3 text-white hover:text-primary transition-colors"
                onClick={openVideoModal}
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="text-lg font-medium">Watch Case Study</span>
              </button>
            </div>

            {/* Results Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500%</div>
                <div className="text-gray-300">Average Lead Increase</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10x</div>
                <div className="text-gray-300">ROI for Clients</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-gray-300">Automation Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              How We Scale Your Business
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end AI automation solutions that generate leads, qualify prospects, 
              and close deals while you focus on growing your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link to={`/services/${service.id}`}>
                  <Card className="glass-hover p-6 h-full cursor-pointer group">
                    <div className="w-12 h-12 glass rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.subtitle}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" size="lg" className="glass-hover">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div>


      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* AI Revolution Section */}
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
                🚀 The AI Revolution is Here
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Why Businesses Choose{" "}
              <span className="text-gradient">AI Over Traditional</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              While others struggle with outdated methods, our clients are already 
              experiencing the future of business automation.
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Traditional Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl p-8 border border-red-500/20"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-2">Traditional Methods</h3>
                <p className="text-gray-400">The old way of doing business</p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Manual lead generation (2-5 leads/day)",
                  "Human-dependent follow-ups",
                  "Limited working hours (9-5)",
                  "High cost per acquisition",
                  "Inconsistent results",
                  "Slow response times"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI-Powered Approach */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl p-8 border border-blue-500/20"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">AI-Powered Approach</h3>
                <p className="text-gray-400">The future of business automation</p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Automated lead generation (50-200 leads/day)",
                  "AI-powered nurturing sequences",
                  "24/7 intelligent automation",
                  "90% lower cost per acquisition",
                  "Consistent, predictable results",
                  "Instant response times"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Transformation Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                The Transformation is Real
              </h3>
              <p className="text-gray-300">
                See the dramatic difference AI automation makes in just 30 days
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10x", label: "More Leads", color: "text-blue-400", icon: "📈" },
                { number: "90%", label: "Cost Reduction", color: "text-purple-400", icon: "💰" },
                { number: "24/7", label: "Automation", color: "text-blue-500", icon: "⚡" },
                { number: "500%", label: "ROI Increase", color: "text-purple-500", icon: "🎯" }
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
                Ready to 10x Your Lead Generation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses who have transformed their growth with our AI-powered solutions.
              </p>
              <Button 
                size="lg" 
                className="button-gradient"
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank')}
              >
                Book Strategy Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Player */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800">
                <video
                  ref={videoRef}
                  src="/lovable-uploads/ecommerace 1 for testimonial.mp4"
                  className="w-full h-full object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  controls={false}
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-4">
                    <Button
                      size="lg"
                      variant="ghost"
                      onClick={handleVideoToggle}
                      className="text-white hover:text-primary hover:bg-white/10 transition-all duration-300"
                    >
                      {isPlaying ? (
                        <div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center">
                          <div className="w-1 h-3 bg-white rounded-sm"></div>
                          <div className="w-1 h-3 bg-white rounded-sm ml-1"></div>
                        </div>
                      ) : (
                        <Play className="w-6 h-6 ml-1" />
                      )}
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      onClick={handleMuteToggle}
                      className="text-white hover:text-primary hover:bg-white/10 transition-all duration-300"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    variant="ghost"
                    onClick={handleFullscreen}
                    className="text-white hover:text-primary hover:bg-white/10 transition-all duration-300"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </Button>
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md rounded-lg p-3 border border-white/10">
                  <div className="text-white text-sm font-medium">
                    Urban Balance Clinic Case Study
                  </div>
                  <div className="text-gray-300 text-xs">
                    Duration: ~1 minute
                  </div>
                </div>
              </div>
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeVideoModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-md text-white hover:text-primary hover:bg-white/10 transition-all duration-300 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
