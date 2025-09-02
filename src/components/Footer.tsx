import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const handleBookCall = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SDyHwKWYcg7mVvHFazxXAddXR_70D5KyLtIAWMJcT1l0WI08qT2y3idlF6UTipLpX2RBPorFS', '_blank');
  };

  return (
         <footer className="w-full py-10 mt-20 bg-gradient-to-br from-gray-900/50 to-black/50">
       <div className="container px-4">
         <div className="glass glass-hover rounded-2xl p-6 md:p-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
             {/* Company Info */}
             <div className="space-y-4">
               <Logo size="md" />
               <p className="text-gray-300 leading-relaxed max-w-md text-sm">
                 We help businesses generate 10x more qualified leads using AI-powered automation, voice agents, and proven growth strategies.
               </p>
               <Button 
                 size="sm" 
                 className="button-gradient w-full lg:w-auto"
                 onClick={handleBookCall}
               >
                 Book Free Strategy Call
                 <ArrowRight className="ml-2 w-3 h-3" />
               </Button>
             </div>

                                         {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-bold text-white">Contact Us</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium text-xs">Email</p>
                      <a href="mailto:miixedrealities@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-sm">
                        miixedrealities@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium text-xs">Address</p>
                      <p className="text-gray-400 text-sm">
                        279 Shadow Mountain Drive,<br />
                        Suite E, El Paso, TX, 79912, US
                      </p>
                    </div>
                  </div>
                </div>
              </div>
           </div>

           {/* Bottom Section */}
           <div className="mt-8 pt-6 border-t border-white/10">
             <div className="flex flex-col md:flex-row justify-between items-center gap-3">
               <p className="text-xs text-gray-400 text-center md:text-left">
                 © {new Date().getFullYear()} Miixed Realities. All rights reserved.
               </p>
               <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-primary transition-colors">
                 Privacy Policy
               </Link>
             </div>
           </div>
         </div>
       </div>
     </footer>
  );
};

export default Footer;