"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, MapPin, Users, Award, Zap, Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const features = [
    {
      icon: MapPin,
      title: "Expert Routes",
      description: "Carefully curated tours covering all major attractions and hidden gems",
    },
    {
      icon: Users,
      title: "Local Guides",
      description: "Experienced guides with deep knowledge of Sri Lankan culture and history",
    },
    {
      icon: Award,
      title: "Premium Service",
      description: "Award-winning service with personalized attention to every traveler",
    },
    {
      icon: Zap,
      title: "Flexible Plans",
      description: "Customizable packages to match your interests and schedule",
    },
  ]

  const destinations = [
    {
      name: "Sigiriya Rock",
      image: "/sigiriya-rock-fortress-sri-lanka.jpg",
      description: "Ancient fortress with breathtaking views",
    },
    {
      name: "Ella Tea Plantations",
      image: "/ella-tea-plantations-sri-lanka.jpg",
      description: "Lush green tea gardens and scenic railways",
    },
    {
      name: "Mirissa Beach",
      image: "/mirissa-beach-sri-lanka.jpg",
      description: "Pristine beaches and whale watching",
    },
    {
      name: "Kandy Temple",
      image: "/kandy-temple-of-tooth-sri-lanka.jpg",
      description: "Sacred Buddhist temple and cultural hub",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United States",
      rating: 5,
      text: "Ceylon Trails made our Sri Lankan adventure absolutely unforgettable! The guides were knowledgeable, friendly, and went above and beyond to make our experience special. Highly recommended!",
      image: "/traveler-woman-usa.jpg",
    },
    {
      name: "Marco Rossi",
      location: "Italy",
      rating: 5,
      text: "The best tour company I've ever worked with. Every detail was perfectly planned, and the local insights from our guide were invaluable. We felt like we were traveling with a friend!",
      image: "/traveler-man-italy.jpg",
    },
    {
      name: "Priya Patel",
      location: "United Kingdom",
      rating: 5,
      text: "From the moment we arrived, Ceylon Trails took care of everything. The cultural experiences were authentic, the accommodations were excellent, and the food was incredible!",
      image: "/traveler-woman-uk.jpg",
    },
    {
      name: "James Chen",
      location: "Australia",
      rating: 5,
      text: "I've traveled to many countries, but this trip to Sri Lanka with Ceylon Trails was truly special. The combination of adventure, culture, and natural beauty was perfect.",
      image: "/traveler-man-australia.jpg",
    },
  ]

  const gallery = [
    {
      image: "/gallery-sigiriya-sunset.jpg",
      title: "Sigiriya Sunset",
    },
    {
      image: "/gallery-tea-plantation-workers.jpg",
      title: "Tea Plantation",
    },
    {
      image: "/gallery-beach-paradise.jpg",
      title: "Paradise Beach",
    },
    {
      image: "/gallery-temple-ceremony.jpg",
      title: "Temple Ceremony",
    },
    {
      image: "/gallery-jungle-trek.jpg",
      title: "Jungle Trek",
    },
    {
      image: "/gallery-local-market.jpg",
      title: "Local Market",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
                <span className="text-accent font-semibold text-sm">Welcome to Paradise</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Discover the <span className="text-primary">Magic</span> of Sri Lanka
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Embark on unforgettable journeys through ancient temples, pristine beaches, and lush tea plantations.
                Experience the warmth of Sri Lankan hospitality with our expert guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/packages"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Explore Packages
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className={`${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                <img
                  src="/sri-lanka-landscape-mountains-tea-plantations.jpg"
                  alt="Sri Lanka landscape"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Ceylon Trails?</h2>
            <p className="text-lg text-foreground/60">Experience the best of Sri Lanka with our premium services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Destinations</h2>
            <p className="text-lg text-foreground/60">Explore the most beautiful places in Sri Lanka</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-sm">{destination.description}</p>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-foreground/60">Real experiences from real adventurers</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 bg-card rounded-xl border border-border animate-fade-in-up">
              {/* Testimonial Content */}
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {`"${testimonials[currentTestimonial].text}"`}
                </p>
              </div>

              {/* Testimonial Author */}
              <div className="flex items-center gap-4 pb-6 border-b border-border mb-6">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-foreground/60">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTestimonial ? "bg-primary w-8" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={prevTestimonial} className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <ChevronLeft size={20} className="text-foreground" />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <ChevronRight size={20} className="text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Gallery</h2>
            <p className="text-lg text-foreground/60">Visual moments from our travelers' adventures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl h-64 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Sri Lankan Adventure?</h2>
          <p className="text-lg opacity-90 mb-8">Let us create the perfect itinerary for your dream vacation</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Start Planning Today
          </Link>
        </div>
      </section>
    </main>
  )
}
