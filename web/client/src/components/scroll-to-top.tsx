'use client';

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // Immediately hide the button to avoid visual lag
    setIsVisible(false);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-16 pointer-events-none invisible'
      } bg-primary hover:bg-primary/90 text-primary-foreground`}
      data-testid="button-scroll-to-top"
      aria-label="Scroll to top"
      title="Scroll to top"
      aria-hidden={!isVisible}
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
}
