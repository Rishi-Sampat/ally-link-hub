import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AllyConnect
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting alumni and students to build a stronger community and brighter futures.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center transition-smooth hover:bg-primary hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center transition-smooth hover:bg-primary hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center transition-smooth hover:bg-primary hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center transition-smooth hover:bg-primary hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/alumni" className="transition-colors hover:text-primary">
                  Alumni Directory
                </Link>
              </li>
              <li>
                <Link to="/events" className="transition-colors hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="transition-colors hover:text-primary">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="transition-colors hover:text-primary">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-semibold mb-4">For Students</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/doubts" className="transition-colors hover:text-primary">
                  Ask a Doubt
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="transition-colors hover:text-primary">
                  Find a Mentor
                </Link>
              </li>
              <li>
                <Link to="/resources" className="transition-colors hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors hover:text-primary">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>contact@allyconnect.edu</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 University Ave, College Town, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AllyConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};