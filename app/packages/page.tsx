"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Check, Star } from "lucide-react"

export default function Packages() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const packages = [
    {
      name: "Classic Sri Lanka",
      duration: "7 Days",
      price: "$899",
      rating: 4.8,
      reviews: 245,
      description: "Perfect introduction to Sri Lanka",
      highlights: [
        "Sigiriya Rock Fortress",
        "Kandy Temple of the Tooth",
        "Tea Plantations in Ella",
        "Mirissa Beach & Whale Watching",
        "Colombo City Tour",
        "Professional guide included",
        "All meals included",
      ],
      popular: false,
    },
    {
      name: "Premium Explorer",
      duration: "10 Days",
      price: "$1,499",
      rating: 4.9,
      reviews: 389,
      description: "Comprehensive island experience",
      highlights: [
        "All Classic highlights",
        "Nuwara Eliya Hill Station",
        "Horton Plains Trek",
        "Galle Fort & Old Town",
        "Unawatuna Beach",
        "Luxury accommodations",
        "Private transportation",
        "Cooking class included",
      ],
      popular: true,
    },
    {
      name: "Adventure Seeker",
      duration: "8 Days",
      price: "$1,199",
      rating: 4.7,
      reviews: 156,
      description: "For the thrill-seeking traveler",
      highlights: [
        "Rock climbing at Sigiriya",
        "Jungle trekking",
        "White water rafting",
        "Surfing lessons",
        "Hiking in Horton Plains",
        "Adventure guide",
        "Equipment provided",
        "Travel insurance included",
      ],
      popular: false,
    },
    {
      name: "Cultural Immersion",
      duration: "12 Days",
      price: "$1,799",
      rating: 5.0,
      reviews: 98,
      description: "Deep dive into Sri Lankan culture",
      highlights: [
        "Temple stays",
        "Local village visits",
        "Traditional craft workshops",
        "Ayurveda spa treatments",
        "Cultural performances",
        "Expert historian guide",
        "Exclusive experiences",
        "Personalized itinerary",
      ],
      popular: false,
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary/10 to-background flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Packages</h1>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Choose the perfect package for your Sri Lankan adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 bg-card rounded-xl border transition-all hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up ${
                  pkg.popular ? "border-primary lg:scale-105 lg:shadow-xl" : "border-border"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={16} fill="currentColor" />
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(pkg.rating) ? "fill-accent text-accent" : "text-muted"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-foreground/60">({pkg.reviews} reviews)</span>
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                  <div className="text-foreground/60 text-sm">{pkg.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all text-center block ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-2 border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-6">Custom Packages</h2>
          <p className="text-lg text-foreground/60 mb-8">
            Don't see what you're looking for? We can create a completely customized package tailored to your specific
            needs, interests, and budget.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Create Custom Package
          </Link>
        </div>
      </section>
    </main>
  )
}
