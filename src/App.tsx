import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Instagram, 
  ChevronRight, 
  Filter,
  Search,
  ArrowRight
} from 'lucide-react';
import { EVENTS, Event } from './constants';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-main/80 backdrop-blur-md border-b border-border-light">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative flex items-center justify-center">
          <div className="w-10 h-10 bg-black rounded-lg border border-border-light flex items-center justify-center overflow-hidden shadow-sm">
            <span className="text-xl font-black tracking-tighter bg-gradient-to-br from-accent-primary to-accent-light bg-clip-text text-transparent">
              ABC
            </span>
          </div>
        </div>
        <div className="flex flex-col leading-none hidden sm:flex">
          <span className="font-bold text-base tracking-tight text-text-main uppercase">
            Acropolis
          </span>
          <span className="text-[9px] font-medium text-accent-primary uppercase tracking-[0.2em]">
            Blockchain Club
          </span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors">Home</a>
        <a href="#events" className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors">Events</a>
        <a href="#" className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors">Team</a>
        <button className="bg-accent-primary text-bg-main px-5 py-2 rounded-full text-sm font-bold glow-teal hover:bg-accent-light transition-all hover:-translate-y-0.5 active:translate-y-0">
          Join Us
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-bg-gradient/20 blur-[120px] rounded-full" />
    </div>
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-text-main">
          Building the <span className="text-accent-primary">Future</span> of Blockchain
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Join the Acropolis Blockchain Club to explore, learn, and build decentralized solutions. 
          From workshops to hackathons, we've got it all.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#events" className="bg-accent-primary text-bg-main px-8 py-3 rounded-full font-bold glow-teal hover:bg-accent-light transition-all hover:-translate-y-0.5">
            Explore Events
          </a>
          <a href="#" className="bg-white/5 text-text-main border border-border-light px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all hover:-translate-y-0.5">
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      className="bg-card-bg rounded-2xl overflow-hidden border border-border-light card-shadow hover:border-accent-primary/30 transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-bg-main/80 backdrop-blur-md text-[10px] font-bold text-accent-primary uppercase tracking-wider border border-accent-primary/20">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-accent-primary text-xs font-bold mb-2">
          <Calendar className="w-3 h-3" />
          {event.date}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-accent-primary transition-colors line-clamp-1 text-text-main">{event.title}</h3>
        <p className="text-text-secondary text-sm mb-6 line-clamp-2 leading-relaxed">
          {event.description}
        </p>
        
        <div className="flex flex-col gap-3 pt-4 border-t border-border-light">
          <div className="flex items-center gap-2 text-text-secondary text-xs">
            <MapPin className="w-3 h-3 text-accent-primary" />
            {event.location}
          </div>
          <div className="flex items-center gap-2 text-text-secondary text-xs">
            <Clock className="w-3 h-3 text-accent-primary" />
            {event.time}
          </div>
        </div>
        
        <button className="mt-6 w-full py-2.5 rounded-lg border border-accent-primary text-accent-primary font-bold text-sm hover:bg-accent-primary hover:text-bg-main transition-all flex items-center justify-center gap-2 group/btn">
          View Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  const [search, setSearch] = useState('');

  const upcomingEvents = EVENTS
    .filter(event => event.status === 'Upcoming' && 
      (event.title.toLowerCase().includes(search.toLowerCase()) || 
       event.category.toLowerCase().includes(search.toLowerCase())))
    .sort((a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime());

  const pastEvents = EVENTS
    .filter(event => event.status === 'Past' && 
      (event.title.toLowerCase().includes(search.toLowerCase()) || 
       event.category.toLowerCase().includes(search.toLowerCase())))
    .sort((a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime());

  return (
    <section id="events" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-text-main">Our <span className="text-accent-primary">Events</span></h2>
          <div className="h-1.5 w-20 bg-accent-primary rounded-full" />
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input 
            type="text" 
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-card-bg border border-border-light rounded-full pl-11 pr-6 py-3 text-sm focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/10 w-full sm:w-80 transition-all text-text-main"
          />
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-bold text-text-main">Upcoming Events</h3>
          <div className="h-px flex-1 bg-border-light" />
        </div>
        
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16 bg-card-bg rounded-3xl border border-dashed border-border-light">
            <p className="text-text-secondary italic text-lg">New events are being planned. Check back soon!</p>
          </div>
        )}
      </div>

      {/* Past Events Section */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-bold text-text-main">Past Events</h3>
          <div className="h-px flex-1 bg-border-light" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </AnimatePresence>
        </div>
        
        {pastEvents.length === 0 && search && (
          <div className="text-center py-16 bg-card-bg rounded-3xl border border-dashed border-border-light">
            <p className="text-text-secondary">No past events found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 px-6 bg-card-bg border-t border-border-light">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-black rounded-lg border border-border-light flex items-center justify-center shadow-sm">
              <span className="text-sm font-black tracking-tighter bg-gradient-to-br from-accent-primary to-accent-light bg-clip-text text-transparent">
                ABC
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm tracking-tight text-text-main uppercase">
                Acropolis
              </span>
              <span className="text-[8px] font-medium text-accent-primary uppercase tracking-[0.2em]">
                Blockchain Club
              </span>
            </div>
          </div>
          <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
            Empowering students with blockchain knowledge and practical skills to build the decentralized web.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-text-main">Quick Links</h4>
            <a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">Home</a>
            <a href="#events" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">Events</a>
            <a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">Team</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-text-main">Community</h4>
            <a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">Discord</a>
            <a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">Twitter</a>
            <a href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
        <p>© 2026 Acropolis Blockchain Club. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-accent-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main selection:bg-accent-primary selection:text-bg-main">
      <Navbar />
      <main>
        <Hero />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}
