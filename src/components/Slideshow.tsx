'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Project } from '../types';

type SlideshowProps = {
  projects: Project[];
};

export default function Slideshow({ projects }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoAdvanceTimeout = useRef<NodeJS.Timeout | null>(null);

  const autoAdvanceInterval = 8000; // Increased from 5000ms to 8000ms

  // Function to reset auto-advance timer
  const resetAutoAdvance = () => {
    if (autoAdvanceTimeout.current) {
      clearTimeout(autoAdvanceTimeout.current);
    }

    autoAdvanceTimeout.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
      resetAutoAdvance();
    }, autoAdvanceInterval);
  };

  // Initialize auto-advance on mount
  useEffect(() => {
    resetAutoAdvance();

    return () => {
      if (autoAdvanceTimeout.current) {
        clearTimeout(autoAdvanceTimeout.current);
      }
    };
  }, [projects.length]);

  // Handle scroll wheel events with debounce
  const handleWheel = (e: WheelEvent) => {
    // Prevent rapid firing by implementing a simple debounce
    if (wheelTimeout.current) return;

    wheelTimeout.current = setTimeout(() => {
      wheelTimeout.current = null;
    }, 1500); // Increased to 1500ms

    if (e.deltaY > 0) {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }

    resetAutoAdvance(); // Reset auto-advance when user scrolls
    e.preventDefault();
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    // Only process if we have both start and end positions
    if (touchStartX.current === 0) return;

    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 40; // Slightly reduced threshold

    if (Math.abs(swipeDistance) >= minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      } else {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }

      resetAutoAdvance(); // Reset auto-advance when user swipes
    }

    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Set up scroll event listener
  useEffect(() => {
    const slideshow = slideshowRef.current;
    if (slideshow) {
      slideshow.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        slideshow.removeEventListener('wheel', handleWheel);
      };
    }
  }, [projects.length]);

  return (
    <div
      className="relative w-full h-[450px] sm:h-[600px] md:h-[650px] overflow-hidden rounded-lg shadow-lg"
      ref={slideshowRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-white/80 mt-2">{project.description}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              resetAutoAdvance(); // Reset timer when user clicks button
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}