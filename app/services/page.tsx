"use client"

import { useState, useEffect } from "react"
import { MapPin, Camera, Utensils, Hotel, Car, Users } from "lucide-react"

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    {
      icon: MapPin,
      title: "Guided Tours",
      description: "Expert-led tours to all major attractions with in-depth historical and cultural insights",
      features: ["Professional guides", "Flexible schedules", "Small group sizes", "Personalized routes"],
    },
    {
      icon: Hotel,
      title: "Accommodation",
      description: "Handpicked hotels and resorts ranging from luxury to budget-friendly options",
      features: ["Verified partners", "Best rates", "Flexible booking", "All locations"],
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Comfortable and reliable transportation with experienced drivers",
      features: ["Modern vehicles", "Air-conditioned", "Professional drivers", "Flexible routes"],
    },
    {
      icon: Utensils,
      title: "Culinary Tours",
      description: "Taste authentic Sri Lankan cuisine with visits to local markets and cooking classes",
      features: ["Local restaurants", "Cooking classes", "Market tours", "Food tastings"],
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Specialized tours for photography enthusiasts with expert tips and prime locations",
      features: ["Golden hour tours", "Expert tips", "Unique locations", "Post-processing help"],
    },
    {
      icon: Users,
      title: "Group Tours",
      description: "Organized group tours with like-minded travelers and shared experiences",
      features: ["Social events", "Group discounts", "Scheduled tours", "Team building"],
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary/10 to-background flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Comprehensive travel solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground/60 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Our Services Stand Out</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Personalized Attention",
                description:
                  "Every traveler is unique. We customize our services to match your preferences, pace, and interests.",
              },
              {
                title: "24/7 Support",
                description:
                  "Our dedicated support team is available round the clock to assist you during your journey.",
              },
              {
                title: "Local Expertise",
                description: "Our guides are locals with deep knowledge of hidden gems and authentic experiences.",
              },
              {
                title: "Competitive Pricing",
                description: "We offer the best value for money without compromising on quality and service.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
