/**
 * MessageModal — ThiagoFlix
 * Design: Dark UI Cinematográfico estilo Netflix
 * Layout: Overlay com backdrop blur, foto + mensagem, botão de vídeo
 * Animação: slide-up + fade-in com framer-motion
 */

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

interface Friend {
  id: string;
  name: string;
  avatar: string;
  role: string;
  message: string;
  videoUrl: string | null;
  photos: string[];
  color?: string;
  year?: string | number;
}

interface MessageModalProps {
  friend: Friend | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MessageModal({ friend, isOpen, onClose }: MessageModalProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const placeholderAvatar = "https://d2xsxph8kpxj0f.cloudfront.net/310519663403397891/Fy2N24fQjFKetMfVnqgH4c/profile-placeholder-FokM6RpJnawexnV9qReiv3.webp";

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setShowVideo(false);
      setPhotoIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!friend) return null;

  const allPhotos = [friend.avatar, ...friend.photos].filter(Boolean);
  const hasPhotos = allPhotos.length > 1;

  const prevPhoto = () => setPhotoIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length);
  const nextPhoto = () => setPhotoIndex((i) => (i + 1) % allPhotos.length);

  // Format message with line breaks
  const formattedMessage = friend.message.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      {i < friend.message.split("\n").length - 1 && <br />}
    </span>
  ));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="modal-close-btn" onClick={onClose} aria-label="Fechar">
              <X size={20} />
            </button>

            {/* Photo Section */}
            <div className="modal-photo-section">
              <div className="modal-photo-wrapper">
                {showVideo && friend.videoUrl ? (
                  <video
                    className="modal-video"
                    src={friend.videoUrl}
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <>
                    <img
                      src={allPhotos[photoIndex] || friend.avatar}
                      alt={friend.name}
                      className="modal-photo"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = placeholderAvatar;
                      }}
                    />
                    {hasPhotos && (
                      <>
                        <button className="photo-nav-btn photo-nav-prev" onClick={prevPhoto}>
                          <ChevronLeft size={20} />
                        </button>
                        <button className="photo-nav-btn photo-nav-next" onClick={nextPhoto}>
                          <ChevronRight size={20} />
                        </button>
                        <div className="photo-dots">
                          {allPhotos.map((_, i) => (
                            <button
                              key={i}
                              className={`photo-dot ${i === photoIndex ? "active" : ""}`}
                              onClick={() => setPhotoIndex(i)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
                <div className="modal-photo-gradient" />
              </div>
            </div>

            {/* Content Section */}
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <div className="modal-meta">
                  <span className="modal-badge">Mensagem</span>
                  <span className="modal-year">{friend.year || "2026"}</span>                  {friend.videoUrl && (
                    <span className="modal-badge modal-badge-video">Vídeo</span>
                  )}
                </div>
                <h2 className="modal-name">{friend.name}</h2>
                <p className="modal-role">{friend.role}</p>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                {friend.videoUrl && (
                  <button
                    className={`modal-btn modal-btn-primary ${showVideo ? "active" : ""}`}
                    onClick={() => setShowVideo(!showVideo)}
                  >
                    <Play size={16} fill="currentColor" />
                    {showVideo ? "Ver Foto" : "Dar Play na Emoção"}
                  </button>
                )}
              </div>

              {/* Divider */}
              <div className="modal-divider">
                <span className="modal-divider-label">Sinopse</span>
              </div>

              {/* Message / Synopsis */}
              <div className="modal-synopsis">
                <p className="modal-message">{formattedMessage}</p>
              </div>

              {/* Photo Gallery Thumbnails */}
              {friend.photos.length > 0 && (
                <div className="modal-gallery">
                  <p className="modal-gallery-title">Galeria de Fotos</p>
                  <div className="modal-gallery-grid">
                    {friend.photos.map((photo, i) => (
                      <button
                        key={i}
                        className={`modal-gallery-thumb ${photoIndex === i + 1 ? "active" : ""}`}
                        onClick={() => {
                          setPhotoIndex(i + 1);
                          setShowVideo(false);
                        }}
                      >
                        <img
                          src={photo}
                          alt={`Foto ${i + 1}`}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = placeholderAvatar;
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
