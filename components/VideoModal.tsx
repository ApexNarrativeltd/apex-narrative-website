"use client";

import { useEffect, useRef } from 'react';
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
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

  // Prevent scroll and handle video playback when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-play video if it's a direct file
      if (videoRef.current && !isYouTubeOrVimeo(videoUrl)) {
        setTimeout(() => {
          videoRef.current?.play().catch(() => {
            // Autoplay may be blocked by browser – user can click play manually
          });
        }, 500);
      }
    } else {
      document.body.style.overflow = 'unset';
      // Pause video when modal closes
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, videoUrl]);

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
    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
    }
    // Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    }
    return null;
  };

  const isEmbed = isYouTubeOrVimeo(videoUrl);
  const embedUrl = isEmbed ? getEmbedUrl(videoUrl) : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-near-black rounded-lg overflow-hidden shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-black/50 text-cream hover:text-gold rounded-full transition-colors"
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
            // YouTube / Vimeo embed
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          ) : (
            // Direct video file (Cloudinary, .mp4, etc.)
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