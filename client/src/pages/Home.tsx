/**
 * Home — ThiagoFlix
 * Design: Dark UI Cinematográfico estilo Netflix
 * Tela "Quem deixou uma mensagem?" com grade de perfis animada
 * Fundo: hero cinematográfico com bokeh vermelho/dourado
 */

import { useState } from "react";
import { motion } from "framer-motion";
import ProfileCard from "@/components/ProfileCard";
import MessageModal from "@/components/MessageModal";
import messagesData from "@/data/messages.json";

type Friend = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  message: string;
  videoUrl: string | null;
  photos: string[];
  color?: string;
};

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663403397891/Fy2N24fQjFKetMfVnqgH4c/hero-bg-KxWq8Qmdm7vasR45jnG8bg.webp";

export default function Home() {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = (profile: Friend) => {
    setSelectedFriend(profile);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedFriend(null), 350);
  };

  return (
    <div className="thiagoflix-app">
      {/* Background */}
      <div
        className="app-background"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="app-background-overlay" />

      {/* Header */}
      <header className="app-header">
        <motion.div
          className="app-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="logo-thiago">THIAGO</span>
          <span className="logo-flix">FLIX</span>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {/* Title Section */}
        <motion.div
          className="who-is-watching"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="who-title">Quem deixou uma mensagem?</h1>
          <p className="who-subtitle">
            Clique em um perfil para ler a mensagem de aniversário
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="profiles-grid">
          {(messagesData as Friend[]).map((friend, index) => (
            <ProfileCard
              key={friend.id}
              profile={friend}
              index={index}
              onClick={handleProfileClick}
            />
          ))}
        </div>

        {/* Birthday Message */}
        <motion.div
          className="birthday-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="birthday-banner-line" />
          <p className="birthday-banner-text">
            🎂 Feliz 22 anos, Thiago! 🎉
          </p>
          <div className="birthday-banner-line" />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Feito com ❤️ pelos seus amigos • ThiagoFlix © 2025</p>
      </footer>

      {/* Message Modal */}
      <MessageModal
        friend={selectedFriend}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
