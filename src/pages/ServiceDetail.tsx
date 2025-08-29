import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { services } from "@/config/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ResultsShowcase } from "@/components/services/ResultsShowcase";
import { CaseStudiesSection } from "@/components/services/CaseStudiesSection";
import { TestimonialsGallery } from "@/components/services/TestimonialsGallery";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-foreground">
        <Navigation />
        <div className="container px-4 pt-32">
          <h1 className="text-4xl font-bold text-white text-center">
            Service not found
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        detailedDescription={service.detailedDescription}
        features={service.features}
        results={service.results}
        icon={service.icon}
      />

      <ResultsShowcase />
      
      <TestimonialsGallery />
      
      <CaseStudiesSection />

      <Footer />
    </div>
  );
};

export default ServiceDetail;