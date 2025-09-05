import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/config/services";
import Navigation from "@/components/Navigation";

const CaseStudyDetail = () => {
  const { industry } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the case study based on the industry parameter
  const caseStudy = caseStudies.find(
    (study) => study.industry.toLowerCase().replace(/\s+/g, '-') === industry
  );

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  // Video mapping based on industry
  const getVideoForIndustry = (industry: string) => {
    const videoMap = {
      'chiropractor': '/lovable-uploads/WhatsApp Video 2025-08-27 at 11.27.43 PM.mp4?v=1',
      'urban-balance-clinic': '/lovable-uploads/ecommerace 1 for testimonial.mp4?v=2',
      'professional-services': '/lovable-uploads/WhatsApp Video 2025-08-27 at 11.27.43 PM (2).mp4?v=3',
      'chiro-spot': '/lovable-uploads/WhatsApp Video 2025-08-27 at 11.27.43 PM (3).mp4?v=4'
    };
    return videoMap[industry.toLowerCase().replace(/\s+/g, '-') as keyof typeof videoMap] || videoMap['chiropractor'];
  };

  const videoSrc = getVideoForIndustry(caseStudy.industry);

  // Testimonial images (using existing images from lovable-uploads)
  const testimonialImages = (caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic")
    ? [
        caseStudy.industry === "Chiropractor" ? '/lovable-uploads/b2b1.jpg' : 
        caseStudy.industry === "Chiro Spot" ? '/lovable-uploads/b2b2.jpg' :
        caseStudy.industry === "Urban Balance Clinic" ? '/lovable-uploads/maintainRoas.jpeg' :
        '/lovable-uploads/CaseStudy5.png'
      ]
    : [
        '/lovable-uploads/b2b2.jpg',
        '/lovable-uploads/b2523c62-4cf8-47f2-a4a1-829b8ac2c352.png',
        '/lovable-uploads/6f334de1-78e9-44e9-a751-6d091ccb68ae.png',
        '/lovable-uploads/eff87813-0349-499f-b845-9b249837bc83.png'
      ];

  const handleVideoToggle = () => {
    const video = document.getElementById('case-study-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = document.getElementById('case-study-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    const video = document.getElementById('case-study-video') as HTMLVideoElement;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      {/* Header */}
      <div className="container mx-auto px-4 pt-24 pb-8">
                 <Button
           variant="ghost"
           onClick={() => navigate(-1)}
           className="text-white hover:text-primary mb-8"
         >
           <ArrowLeft className="w-4 h-4 mr-2" />
           Go Back
         </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Case Study
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {caseStudy.industry}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how we transformed {caseStudy.industry.toLowerCase()} with our AI-powered solutions
            </p>
          </div>
        </motion.div>

                 {/* Video Section - Mobile Optimized */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mb-16"
         >
           <Card className="glass-hover p-4 md:p-8">
             <div className="text-center mb-6 md:mb-8">
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Case Study Video</h2>
               <p className="text-gray-400 text-base md:text-lg">
                 Watch how we transformed {caseStudy.industry.toLowerCase()} with our AI-powered solutions
               </p>
             </div>
             
             <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
               <div className="aspect-video bg-black flex items-center justify-center">
                 <video
                   id="case-study-video"
                   src={videoSrc}
                   className="w-full h-full object-contain"
                   onPlay={() => setIsPlaying(true)}
                   onPause={() => setIsPlaying(false)}
                   controls={true}
                   playsInline
                   preload="metadata"
                 />
               </div>
            </div>
            
            <div className="mt-4 md:mt-6 text-center">
              <p className="text-gray-400 text-xs md:text-sm">
                Use the video controls to play, pause, and adjust volume
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Challenge & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <Card className="glass-hover p-8">
            <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {caseStudy.challenge}
            </p>
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 font-medium">Problem Areas:</p>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>• Low conversion rates</li>
                <li>• High customer acquisition costs</li>
                <li>• Manual processes slowing growth</li>
                <li>• Inconsistent lead quality</li>
              </ul>
            </div>
          </Card>

          <Card className="glass-hover p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {caseStudy.solution}
            </p>
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-400 font-medium">Key Implementations:</p>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>• AI-powered lead Booking</li>
                <li>• Automated follow-up reminders</li>
                <li>• Data-driven optimization</li>
                <li>• 24/7 intelligent automation</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <Card className="glass-hover p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.results.slice(0, -1).map((result, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {caseStudy.industry === "Chiropractor" 
                      ? (index === 0 ? '100%' : index === 1 ? '60%' : '50%')
                      : (index === 0 ? '300%' : index === 1 ? '60%' : '250%')
                    }
                  </div>
                  <p className="text-gray-300">{result}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

                 {/* Testimonials Gallery */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="mb-16"
         >
           <Card className="glass-hover p-4 md:p-8">
             <div className="text-center mb-6 md:mb-8">
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Client Testimonials & Results</h3>
               <p className="text-gray-400 text-base md:text-lg">
                 Visual proof of our success with {caseStudy.industry.toLowerCase()}
               </p>
             </div>
             
             <div className={(caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic") ? "flex justify-center" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"}>
                {testimonialImages.map((image, index) => (
                  <div key={index} className={(caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic") ? "w-full max-w-2xl" : "group cursor-pointer"}>
                    <div className={`relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 ${(caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic") ? "shadow-2xl border border-primary/20" : ""}`}>
                      <img
                        src={image}
                        alt={`Testimonial ${index + 1}`}
                        className={`w-full object-cover transition-all duration-700 ${(caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic") ? "h-64 md:h-96 hover:scale-105" : "h-40 sm:h-48 group-hover:scale-110"}`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${(caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic") ? "opacity-0 hover:opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`} />
                      
                      {/* Enhanced overlay for Chiropractor, Chiro Spot, Professional Services, and Urban Balance Clinic */}
                      {(caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic") && (
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                      )}
                    </div>
                    <div className={`mt-4 md:mt-6 text-center ${(caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic") ? "px-2 md:px-4" : ""}`}>
                      <p className={`font-semibold ${(caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic") ? "text-lg md:text-xl text-white mb-2" : "text-white font-medium text-sm"}`}>
                        {caseStudy.industry === "Chiropractor" ? "Practice Transformation Results" : 
                         caseStudy.industry === "Chiro Spot" ? "Business Transformation Results" :
                         caseStudy.industry === "Professional Services" ? "Service Transformation Results" :
                         caseStudy.industry === "Urban Balance Clinic" ? "Clinic Transformation Results" :
                          (index === 0 && "Lead Generation Results") ||
                          (index === 1 && "Revenue Growth Chart") ||
                          (index === 2 && "Automation Dashboard") ||
                          (index === 3 && "Client Satisfaction")
                        }
                      </p>
                      
                      {/* Additional details for Chiropractor, Chiro Spot, Professional Services, and Urban Balance Clinic */}
                      {(caseStudy.industry === "Chiropractor" || caseStudy.industry === "Chiro Spot" || caseStudy.industry === "Professional Services" || caseStudy.industry === "Urban Balance Clinic") && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg md:rounded-xl border border-primary/20">
                          <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                            <div>
                              <div className="text-lg md:text-2xl font-bold text-primary">
                                {caseStudy.industry === "Chiropractor" ? "100%" : 
                                 caseStudy.industry === "Chiro Spot" ? "100%" :
                                 caseStudy.industry === "Urban Balance Clinic" ? "100%" :
                                 "400%"}
                              </div>
                              <div className="text-xs text-gray-400">
                                {caseStudy.industry === "Chiropractor" ? "Scheduling Accuracy" : 
                                 caseStudy.industry === "Chiro Spot" ? "Operations Automation" :
                                 caseStudy.industry === "Urban Balance Clinic" ? "Appointment Automation" :
                                 "Pipeline Growth"}
                              </div>
                            </div>
                            <div>
                              <div className="text-lg md:text-2xl font-bold text-primary">
                                {caseStudy.industry === "Chiropractor" ? "60%" : 
                                 caseStudy.industry === "Chiro Spot" ? "60%" :
                                 caseStudy.industry === "Urban Balance Clinic" ? "80%" :
                                 "50%"}
                              </div>
                              <div className="text-xs text-gray-400">
                                {caseStudy.industry === "Chiropractor" ? "Patient Retention" : 
                                 caseStudy.industry === "Chiro Spot" ? "Business Efficiency" :
                                 caseStudy.industry === "Urban Balance Clinic" ? "No-Show Reduction" :
                                 "Faster Sales Cycle"}
                              </div>
                            </div>
                            <div>
                              <div className="text-lg md:text-2xl font-bold text-primary">
                                {caseStudy.industry === "Chiropractor" ? "50%" : 
                                 caseStudy.industry === "Chiro Spot" ? "50%" :
                                 caseStudy.industry === "Urban Balance Clinic" ? "70%" :
                                 "250%"}
                              </div>
                              <div className="text-xs text-gray-400">
                                {caseStudy.industry === "Chiropractor" ? "Workload Reduction" : 
                                 caseStudy.industry === "Chiro Spot" ? "Workload Reduction" :
                                 caseStudy.industry === "Urban Balance Clinic" ? "Time Savings" :
                                 "Conversion Increase"}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
             
             <div className="mt-8 text-center">
               <p className="text-gray-400 text-sm">
                 
               </p>
             </div>
           </Card>
         </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Card className="glass-hover p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can implement similar results for your company
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank')}
                className="button-gradient"
                size="lg"
              >
                Book a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/services')}
                size="lg"
              >
                View Our Services
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
