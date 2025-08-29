"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "SaaS Founder",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "The AI lead generation system increased our qualified leads by 300% in just 30 days. The automated qualification process saves our sales team hours every day."
  },
  {
    name: "Marcus Johnson",
    role: "E-commerce CEO",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "We went from 20 leads per month to 250+ qualified prospects. The voice AI appointment setting is incredible - it sounds completely human and books meetings 24/7."
  },
  {
    name: "Lisa Rodriguez", 
    role: "Marketing Director",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "The LinkedIn lead sourcing delivered exactly the prospects we needed. Our B2B pipeline grew by 400% and the lead quality is outstanding."
  },
  {
    name: "David Kim",
    role: "Agency Owner",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Their custom automation workflows eliminated 70% of our manual tasks. The CRM integrations and follow-up sequences run flawlessly without any intervention."
  },
  {
    name: "Amanda Foster",
    role: "Sales Manager",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "The AI sales training improved our team's close rate by 180%. The objection handling practice and real-time coaching made a massive difference."
  },
  {
    name: "Robert Wilson",
    role: "Professional Services",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Invoice follow-ups are completely automated now - we collect payments 70% faster and our cash flow improved dramatically. No more chasing overdue invoices."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Growing Businesses</h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of businesses scaling with AI automation
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;