import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { caseStudies } from "@/config/services";
import { useNavigate } from "react-router-dom";

export const CaseStudiesSection = () => {
  const navigate = useNavigate();

  const handleCaseStudyClick = (industry: string) => {
    const formattedIndustry = industry.toLowerCase().replace(/\s+/g, '-');
    navigate(`/case-study/${formattedIndustry}`);
  };

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
            Real Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how we've transformed businesses across different industries with 
            our tailored AI automation and lead generation solutions.
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
                    <span className="text-blue-400 font-bold text-lg">
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
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
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
  );
};