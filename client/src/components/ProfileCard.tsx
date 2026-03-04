/**
 * ProfileCard — ThiagoFlix
 * Design: Dark UI Cinematográfico estilo Netflix
 * Hover: scale(1.1) + borda vermelha + nome em destaque
 * Animação de entrada: stagger com framer-motion
 */

import { motion } from "framer-motion";

interface Profile {
  id: string;
  name: string;
  avatar: string;
  role: string;
  message: string;
  videoUrl: string | null;
  photos: string[];
  color?: string;
}

interface ProfileCardProps {
  profile: Profile;
  index: number;
  onClick: (profile: Profile) => void;
}

export default function ProfileCard({ profile, index, onClick }: ProfileCardProps) {
  const placeholderAvatar = "https://d2xsxph8kpxj0f.cloudfront.net/310519663403397891/Fy2N24fQjFKetMfVnqgH4c/profile-placeholder-FokM6RpJnawexnV9qReiv3.webp";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="profile-card-wrapper"
      onClick={() => onClick(profile)}
    >
      <div className="profile-card">
        <div className="profile-avatar-container">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="profile-avatar"
            onError={(e) => {
              (e.target as HTMLImageElement).src = placeholderAvatar;
            }}
          />
          <div className="profile-avatar-overlay">
            <span className="profile-play-icon">▶</span>
          </div>
        </div>
        <p className="profile-name">{profile.name}</p>
      </div>
    </motion.div>
  );
}
