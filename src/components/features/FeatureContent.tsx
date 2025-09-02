import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

interface FeatureContentProps {
  image: string;
  title: string;
}

export const FeatureContent = ({ image, title }: FeatureContentProps) => {
  // Define different content for each feature
  const getFeatureContent = (title: string) => {
    switch (title) {
      case "AI-Powered Lead Generation":
        return {
          steps: [
            { icon: "🎯", text: "Advanced targeting algorithms identify your ideal customers" },
            { icon: "📊", text: "Real-time campaign optimization for maximum ROI" },
            { icon: "🚀", text: "Automated A/B testing for continuous improvement" },
            { icon: "💰", text: "Cost-effective lead acquisition at scale" }
          ],
          color: "blue"
        };
      case "Lead Qualification & Nurturing":
        return {
          steps: [
            { icon: "🤖", text: "AI analyzes lead behavior and intent signals" },
            { icon: "📧", text: "Personalized nurturing sequences based on engagement" },
            { icon: "⭐", text: "Lead scoring to prioritize high-value prospects" },
            { icon: "🎯", text: "Automated follow-ups until conversion" }
          ],
          color: "purple"
        };
      case "Voice AI Appointment Setting":
        return {
          steps: [
            { icon: "🎙️", text: "Human-like AI voice calls your leads directly" },
            { icon: "📅", text: "Intelligent scheduling based on availability" },
            { icon: "💬", text: "Natural conversation handling objections" },
            { icon: "✅", text: "Confirmed appointments synced to your calendar" }
          ],
          color: "blue"
        };
      case "Custom Workflow Automation":
        return {
          steps: [
            { icon: "🔗", text: "Seamless integration with your existing tools" },
            { icon: "⚡", text: "Automated data flow between systems" },
            { icon: "📈", text: "Real-time reporting and analytics" },
            { icon: "🛠️", text: "Custom workflows tailored to your business" }
          ],
          color: "purple"
        };
      default:
        return { steps: [], color: "blue" };
    }
  };

  const content = getFeatureContent(title);
  const colorClasses = {
    blue: {
      border: "border-blue-500/30",
      bg: "bg-blue-500/5",
      text: "text-blue-400",
      accent: "bg-blue-500/20"
    },
    purple: {
      border: "border-purple-500/30",
      bg: "bg-purple-500/5",
      text: "text-purple-400",
      accent: "bg-purple-500/20"
    }
  };

  const colors = colorClasses[content.color as keyof typeof colorClasses];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex items-center justify-center"
    >
      <div className="glass rounded-2xl p-6 w-4/5 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            How It Works
          </h3>
          
          <div className="space-y-4">
            {content.steps.map((step, index) => {
              // Create gradient border colors that transition from blue to purple
              const gradientColors = [
                "border-blue-500/30",
                "border-blue-500/20",
                "border-purple-500/20", 
                "border-purple-500/30"
              ];
              
              const bgColors = [
                "bg-blue-500/5",
                "bg-blue-500/3",
                "bg-purple-500/3",
                "bg-purple-500/5"
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-3 p-3 rounded-lg border-l-4 ${gradientColors[index]} ${bgColors[index]} glass`}
                >
                  <div className="flex-shrink-0">
                    <div className="text-xl">{step.icon}</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
                        STEP {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-center"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-2 ${colors.accent} rounded-full`}>
              <span className={`text-xs font-medium ${colors.text}`}>
                Ready to get started?
              </span>
              <ArrowRight className={`w-3 h-3 ${colors.text}`} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};