"use client";

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced-motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Store the element that had focus before modal opened
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      // Return focus to the previous element when modal closes
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    }
  }, [isOpen]);

  // Focus trap: keep focus inside the modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes modal
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Trap focus inside modal
      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab: if on first element, move to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: if on last element, move to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Detect if URL is YouTube or Vimeo
  const isYouTubeOrVimeo = (url: string): boolean => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)/,
      /(?:vimeo\.com\/)(\d+)/,
    ];
    return patterns.some((pattern) => pattern.test(url));
  };

  // Extract video ID from YouTube or Vimeo URL
  const getEmbedUrl = (url: string): string | null => {
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
    }
    const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    }
    return null;
  };

  const isEmbed = isYouTubeOrVimeo(videoUrl);
  const embedUrl = isEmbed ? getEmbedUrl(videoUrl) : null;

  // Conditional classes based on reduced-motion preference
  const overlayClasses = prefersReducedMotion
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
    : 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4';

  const modalClasses = prefersReducedMotion
    ? 'relative w-full max-w-4xl bg-near-black rounded-lg overflow-hidden shadow-2xl'
    : 'relative w-full max-w-4xl bg-near-black rounded-lg overflow-hidden shadow-2xl';

  return (
    <div
      className={overlayClasses}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        ref={modalRef}
        className={modalClasses}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-black/50 text-cream hover:text-gold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Video title */}
        <div className="px-4 pt-4 pb-2">
          <h3 id="video-modal-title" className="text-cream font-semibold text-lg">
            {title}
          </h3>
        </div>

        {/* Video player */}
        <div className="aspect-video w-full bg-black">
          {isEmbed && embedUrl ? (
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          ) : (
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-contain"
              controls
              preload="metadata"
              playsInline
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23191919'/%3E%3C/svg%3E"
            >
              <p className="text-cream/60 text-sm text-center p-4">
                Your browser does not support HTML5 video. Please use a modern browser.
              </p>
            </video>
          )}
        </div>
      </div>
    </div>
  );
}