import { BarChart3, Users, Bot, Receipt, Settings, GraduationCap, Workflow, Phone } from "lucide-react";

export const services = [
  {
    id: "ai-lead-generation",
    title: "AI-Powered Lead Generation",
    subtitle: "Meta Ads",
    description: "We design and run targeted Meta ad campaigns to consistently deliver high-quality inbound leads.",
    icon: <BarChart3 className="w-6 h-6" />,
    detailedDescription: "Our AI-powered lead generation system leverages advanced targeting algorithms and machine learning to identify and attract your ideal customers. We create compelling ad creatives, optimize campaigns in real-time, and ensure consistent delivery of high-quality leads that convert.",
    features: [
      "Advanced audience targeting using AI algorithms",
      "Real-time campaign optimization and A/B testing",
      "Custom landing pages designed for maximum conversion",
      "Detailed analytics and performance tracking",
      "Cross-platform campaign management (Facebook, Instagram)"
    ],
    results: {
      leadIncrease: "500%",
      costReduction: "60%",
      conversionRate: "25%"
    }
  },
  {
    id: "linkedin-lead-sourcing",
    title: "LinkedIn Lead Sourcing & Scraping",
    subtitle: "Targeted Prospecting",
    description: "We scrape LinkedIn to deliver highly targeted leads based on industry, company size, and job position — giving your team ready-to-contact prospects.",
    icon: <Users className="w-6 h-6" />,
    detailedDescription: "Our sophisticated LinkedIn scraping system identifies and extracts high-value prospects based on your ideal customer profile. We use advanced filtering criteria and data enrichment to provide you with complete contact information and company insights.",
    features: [
      "Industry-specific targeting and filtering",
      "Company size and revenue-based prospecting",
      "Job title and seniority level targeting",
      "Contact information enrichment",
      "CRM-ready data export and integration"
    ],
    results: {
      leadIncrease: "300%",
      qualityScore: "95%",
      contactRate: "85%"
    }
  },
  {
    id: "lead-qualification",
    title: "Lead Qualification & Nurturing",
    subtitle: "AI-Powered Qualification",
    description: "Our AI qualifies and nurtures leads in real-time, ensuring your sales team focuses only on prospects with the highest intent to buy.",
    icon: <Bot className="w-6 h-6" />,
    detailedDescription: "Using advanced AI and natural language processing, we automatically qualify incoming leads through intelligent conversations, scoring systems, and behavioral analysis. This ensures your sales team only engages with high-intent prospects.",
    features: [
      "Real-time lead scoring and qualification",
      "Automated follow-up sequences",
      "Intent-based conversation flows",
      "Integration with popular CRM systems",
      "Customizable qualification criteria"
    ],
    results: {
      qualificationRate: "400%",
      salesEfficiency: "250%",
      closeRate: "180%"
    }
  },
  {
    id: "invoice-automation",
    title: "Automated Invoice Follow-Ups",
    subtitle: "Cash Flow Optimization",
    description: "We automate invoice reminders and follow-ups, reducing overdue payments and improving your business cash flow.",
    icon: <Receipt className="w-6 h-6" />,
    detailedDescription: "Our automated invoice management system handles the entire follow-up process, from gentle reminders to escalated collections. We integrate with your accounting software to provide seamless, professional payment collection.",
    features: [
      "Automated payment reminders and escalation",
      "Integration with QuickBooks and accounting software",
      "Customizable reminder sequences",
      "Payment tracking and reporting",
      "Professional communication templates"
    ],
    results: {
      paymentTime: "70% faster",
      collectionRate: "95%",
      overdueReduction: "80%"
    }
  },
  {
    id: "lead-management",
    title: "End-to-End Lead Management",
    subtitle: "Complete Lead Lifecycle",
    description: "From first contact to booked sales calls, our AI ensures every lead is followed up with — so nothing slips through the cracks.",
    icon: <Settings className="w-6 h-6" />,
    detailedDescription: "Our comprehensive lead management system tracks every interaction, automates follow-ups, and ensures no opportunity is missed. We provide complete visibility into your sales pipeline with advanced analytics and reporting.",
    features: [
      "Complete lead lifecycle tracking",
      "Automated follow-up workflows",
      "Pipeline management and forecasting",
      "Multi-channel communication tracking",
      "Advanced reporting and analytics"
    ],
    results: {
      followUpRate: "100%",
      pipelineGrowth: "400%",
      conversionIncrease: "320%"
    }
  },
  {
    id: "sales-training",
    title: "AI Sales Team Training",
    subtitle: "Performance Enhancement",
    description: "We train sales teams with AI-driven tools, helping them close more deals, handle objections better, and boost performance.",
    icon: <GraduationCap className="w-6 h-6" />,
    detailedDescription: "Our AI-powered sales training platform provides personalized coaching, objection handling practice, and performance analytics to help your team excel. We use role-playing scenarios and real-time feedback to accelerate learning.",
    features: [
      "Personalized sales coaching and feedback",
      "Objection handling simulation and practice",
      "Performance tracking and improvement plans",
      "Sales script optimization",
      "Team collaboration and knowledge sharing"
    ],
    results: {
      salesIncrease: "275%",
      closeRate: "190%",
      objectionHandling: "85% improved"
    }
  },
  {
    id: "workflow-automation",
    title: "Custom Workflow Automations",
    subtitle: "Operations Streamlining",
    description: "We build custom automations (CRM integrations, QuickBooks, Google Sheets, n8n, Zapier, etc.) to streamline backend operations.",
    icon: <Workflow className="w-6 h-6" />,
    detailedDescription: "Our custom automation solutions eliminate manual tasks and connect your business systems seamlessly. We create sophisticated workflows that handle everything from data entry to complex business processes.",
    features: [
      "Custom workflow design and implementation",
      "Multi-platform integrations and connections",
      "Data synchronization and management",
      "Process automation and optimization",
      "Ongoing maintenance and support"
    ],
    results: {
      timeReduction: "70%",
      errorReduction: "95%",
      efficiency: "300% increase"
    }
  },
  {
    id: "voice-ai-appointments",
    title: "Voice AI Appointment Setting",
    subtitle: "Automated Scheduling",
    description: "Our human-like AI voice bot calls and books appointments directly with your leads, freeing up your team to focus on closing.",
    icon: <Phone className="w-6 h-6" />,
    detailedDescription: "Our advanced voice AI technology conducts natural conversations with your prospects, handles objections, and books qualified appointments directly into your calendar. The AI sounds completely human and follows your custom scripts.",
    features: [
      "Human-like voice AI conversations",
      "Intelligent objection handling",
      "Direct calendar integration and booking",
      "Custom script and conversation flows",
      "Real-time appointment confirmation"
    ],
    results: {
      bookingRate: "85%",
      timesSaved: "48hr per week",
      showUpRate: "75%"
    }
  }
];

export const testimonialStats = [
  {
    title: "500%",
    subtitle: "Average Lead Increase",
    description: "Clients see dramatic lead generation improvements within 30 days",
    image: "/lovable-uploads/8b9c3e02-ce80-486a-acda-d6a5b7e5cf05.png"
  },
  {
    title: "$50M+",
    subtitle: "Revenue Generated", 
    description: "Total revenue generated for our clients through AI-powered campaigns"
  },
  {
    title: "100+",
    subtitle: "Successful Campaigns",
    description: "Proven track record of high-converting automation workflows"
  },
  {
    title: "95%",
    subtitle: "Client Retention Rate",
    description: "Industry-leading client satisfaction and long-term partnerships"
  },
  {
    title: "24/7",
    subtitle: "AI Automation",
    description: "Round-the-clock intelligent lead nurturing and conversion"
  },
  {
    title: "48hr",
    subtitle: "Setup Time",
    description: "Lightning-fast deployment to start seeing results immediately"
  }
];

export const caseStudies = [
  {
    industry: "SaaS Startup",
    challenge: "Low qualified lead generation",
    solution: "AI-powered Meta ads with automated qualification", 
    results: [
      "300% increase in qualified leads",
      "60% reduction in cost per acquisition",
      "View Full Case Study"
    ],
    image: "/lovable-uploads/c74292d2-1085-4460-862a-809b6a937dfa.png",
    stats: "300% increase in qualified leads, 60% reduction in cost per acquisition"
  },
  {
    industry: "E-commerce Brand", 
    challenge: "Poor conversion rates from ads",
    solution: "LinkedIn sourcing + AI voice appointment setting",
    results: [
      "250% boost in conversion rates",
      "$2M additional revenue in 6 months", 
      "View Full Case Study"
    ],
    image: "/lovable-uploads/c74292d2-1085-4460-862a-809b6a937dfa.png",
    stats: "250% boost in conversion rates, $2M additional revenue in 6 months"
  },
  {
    industry: "Professional Services",
    challenge: "Manual lead qualification process", 
    solution: "End-to-end AI automation workflow",
    results: [
      "400% growth in pipeline",
      "50% faster sales cycle",
      "View Full Case Study"
    ],
    image: "/lovable-uploads/c74292d2-1085-4460-862a-809b6a937dfa.png",
    stats: "400% growth in pipeline, 50% faster sales cycle"
  },
  {
    industry: "Manufacturing",
    challenge: "Low B2B lead generation",
    solution: "Custom automation + voice AI follow-ups",
    results: [
      "180% increase in B2B leads", 
      "70% of qualification process automated",
      "View Full Case Study"
    ],
    image: "/lovable-uploads/c74292d2-1085-4460-862a-809b6a937dfa.png",
    stats: "180% increase in B2B leads, 70% of qualification process automated"
  }
];

export const performanceImages = [
  "/lovable-uploads/b2523c62-4cf8-47f2-a4a1-829b8ac2c352.png",
  "/lovable-uploads/6f334de1-78e9-44e9-a751-6d091ccb68ae.png", 
  "/lovable-uploads/eff87813-0349-499f-b845-9b249837bc83.png",
  "/lovable-uploads/ce0a05fa-818e-47c8-bf90-ef6b1cad2356.png"
];