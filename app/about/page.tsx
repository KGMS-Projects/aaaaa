"use client"

import { useState, useEffect } from "react"
import { Award, Users, Globe, Heart } from "lucide-react"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const stats = [
    { label: "Happy Travelers", value: "5000+", icon: Users },
    { label: "Years Experience", value: "15+", icon: Award },
    { label: "Destinations", value: "50+", icon: Globe },
    { label: "Satisfaction Rate", value: "98%", icon: Heart },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Guide",
      image: "/professional-guide-sri-lanka.jpg",
    },
    {
      name: "Priya Silva",
      role: "Cultural Expert",
      image: "/cultural-guide-woman.jpg",
    },
    {
      name: "Anil Perera",
      role: "Adventure Specialist",
      image: "/adventure-guide-hiking.jpg",
    },
    {
      name: "Lakshmi Jayawardena",
      role: "Heritage Historian",
      image: "/historian-guide-temple.jpg",
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary/10 to-background flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">About Ceylon Trails</h1>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Crafting unforgettable experiences in Sri Lanka since 2010
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className={`${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
              <img src="/sri-lanka-tour-guide-group.jpg" alt="Our team" className="rounded-2xl shadow-2xl" />
            </div>
            <div className={`${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Ceylon Trails was founded with a simple mission: to share the authentic beauty and rich cultural
                heritage of Sri Lanka with travelers from around the world. What started as a small family business has
                grown into one of the most trusted tour operators in the country.
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Our team of experienced guides are not just experts in tourism—they are passionate storytellers who
                bring Sri Lanka's history, culture, and natural wonders to life. We believe in sustainable tourism that
                benefits local communities and preserves our island's pristine environment.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Every journey with us is personalized, thoughtfully planned, and executed with meticulous attention to
                detail. We don't just show you Sri Lanka; we help you fall in love with it.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-card rounded-xl border border-border animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="text-primary mx-auto mb-4" size={32} />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-foreground/60">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert Guides</h2>
            <p className="text-lg text-foreground/60">Passionate professionals dedicated to your experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                <p className="text-foreground/60 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We provide genuine, unfiltered experiences that showcase the real Sri Lanka",
              },
              {
                title: "Sustainability",
                description: "We are committed to preserving Sri Lanka's natural and cultural heritage",
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in every aspect of our service",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
