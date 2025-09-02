import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Header */}
      <div className="container mx-auto px-4 pt-32 pb-8">
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: May 6, 2025
            </p>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
            <section>
              <p className="text-gray-300 leading-relaxed text-sm">
                This Privacy Policy describes how Miixed Realities collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from miixedrealities.com. By using our Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Direct Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm ml-4">
                    <li>Contact details (name, address, phone, email)</li>
                    <li>Order and payment information</li>
                    <li>Account credentials and security data</li>
                    <li>Customer support communications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Usage Data</h3>
                  <p className="text-gray-300 text-sm">
                    We automatically collect information about your interaction with our Services using cookies and similar technologies, including device information, browser data, and IP address.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm ml-4">
                <li><strong>Service Provision:</strong> Process payments, fulfill orders, manage accounts</li>
                <li><strong>Marketing:</strong> Send promotional communications and show relevant ads</li>
                <li><strong>Security:</strong> Detect and prevent fraudulent or malicious activity</li>
                <li><strong>Support:</strong> Provide customer service and improve our Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Your Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm"><strong>Access:</strong> Request information we hold about you</p>
                  <p className="text-gray-300 text-sm"><strong>Delete:</strong> Request deletion of your data</p>
                  <p className="text-gray-300 text-sm"><strong>Correct:</strong> Update inaccurate information</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm"><strong>Portability:</strong> Receive a copy of your data</p>
                  <p className="text-gray-300 text-sm"><strong>Restrict:</strong> Limit how we process your data</p>
                  <p className="text-gray-300 text-sm"><strong>Withdraw:</strong> Remove consent for processing</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
              <p className="text-gray-300 text-sm">
                For questions about this Privacy Policy or to exercise your rights, contact us at{" "}
                <a href="mailto:miixedrealities@gmail.com" className="text-primary hover:underline">
                  miixedrealities@gmail.com
                </a>{" "}
                or 279 Shadow Mountain Drive, Suite E, El Paso, TX, 79912, US.
              </p>
            </section>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
