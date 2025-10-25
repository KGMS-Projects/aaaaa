import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ceylon Trails</h3>
            <p className="text-sm opacity-90">
              Your gateway to discovering the natural beauty and cultural richness of Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-80 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:opacity-80 transition-opacity">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+94 (0) 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@ceylontrails.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Ceylon Trails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
