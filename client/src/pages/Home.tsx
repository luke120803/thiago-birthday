/**
 * Home — ThiagoFlix
 * Design: Dark UI Cinematográfico estilo Netflix
 * Tela "Quem deixou uma mensagem?" com grade de perfis animada
 * Fundo: hero cinematográfico com bokeh vermelho/dourado
 */

import { useState, useMemo, useEffect } from "react";
import { Search, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileCard from "@/components/ProfileCard";
import MessageModal from "@/components/MessageModal";
import YearFilter from "@/components/YearFilter";
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
  year?: number;
};

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663403397891/Fy2N24fQjFKetMfVnqgH4c/hero-bg-KxWq8Qmdm7vasR45jnG8bg.webp";

export default function Home() {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [showIntro, setShowIntro] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      if (!hasStarted) return;

    window.scrollTo(0, 0);

    const introSound = new Audio("/tudum.mp3"); // Procura o arquivo na pasta public
    introSound.volume = 0.5; // Ajuste o volume de 0.0 a 1.0

    // Tenta tocar o áudio
    introSound.play().catch(error => {
      console.warn("O navegador bloqueou o áudio automático:", error);
    });

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // 4 segundos de animação

    // Limpa o timer caso o componente seja desmontado
    return () => {
      clearTimeout(timer);
      introSound.pause();
    };
  }, [hasStarted]); // O array de dependências agora observa a variável hasStarted

  // Get unique years from messages data
  const availableYears = useMemo(() => {
    const years = new Set((messagesData as Friend[]).map((f) => f.year || 2025));
    return Array.from(years).sort((a, b) => b - a);
  }, []);

  // Filter messages by selected year
  const filteredMessages = useMemo(() => {
    return (messagesData as Friend[]).filter((f) => (f.year || 2025) === selectedYear);
  }, [selectedYear]);

  const handleProfileClick = (profile: Friend) => {
    setSelectedFriend(profile);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedFriend(null), 350);
  };

  // --- NOVA TELA DE ENTRADA (Estilo Seleção de Perfil Netflix) ---
  if (!hasStarted) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#141414', // Fundo padrão Netflix
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            color: '#fff',
            fontWeight: 400,
            margin: 0
          }}>
            Quem está fazendo aniversário?
          </h1>
        </motion.div>

        <motion.div
          onClick={() => setHasStarted(true)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="profile-card-wrapper"
          style={{ cursor: 'pointer' }}
        >
          <div className="profile-card" style={{ gap: '1rem' }}>
            <div
              className="profile-avatar-container"
              style={{
                width: 'clamp(120px, 20vw, 200px)',
                height: 'clamp(120px, 20vw, 200px)',
                borderWidth: '4px'
              }}
            >
              <img
                src="/Th.jpeg"
                alt="Thiago"
                className="profile-avatar"
              />
              <div className="profile-avatar-overlay">
                <span className="profile-play-icon">🎂</span>
              </div>
            </div>
            <h3
              className="profile-name"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                color: '#aaaaaa'
              }}
            >
              Thiago
            </h3>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- O SITE PRINCIPAL ---
  return (
    <>
      {/* Tela de Introdução Estilo Netflix */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="intro-logo"
              initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
              animate={{
                scale: [0.9, 1, 2.5],
                opacity: [0, 1, 0],
                filter: ["blur(10px)", "blur(0px)", "blur(12px)"],
                textShadow: [
                  "0px 0px 0px rgba(229, 9, 20, 0)",
                  "0px 0px 20px rgba(229, 9, 20, 0.4)",
                  "0px 0px 100px rgba(229, 9, 20, 1)"
                ]
              }}
              transition={{
                duration: 3.8,
                times: [0, 0.5, 1], // Controla o tempo de cada etapa da animação
                ease: "easeInOut"
              }}
            >
              <span className="logo-thiago">THIAGO</span>
              <span className="logo-flix">FLIX</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="thiagoflix-app">
        {/* Fundo cinematográfico */}
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
          {/* Thiago Special Card */}
          <motion.div
            className="thiago-special-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="thiago-card-image">
              <img
                src="/Th.jpeg"
                alt="Thiago"
              />
              <div className="thiago-card-overlay" />
            </div>
            <div className="thiago-card-content">
              <motion.h2
                className="thiago-card-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Feliz Aniversário, Thiago!
              </motion.h2>
              <motion.p
                className="thiago-card-subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Confira as mensagens especiais de quem te ama
              </motion.p>
              <motion.div
                className="thiago-card-divider"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Year Filter */}
          {availableYears.length > 1 && (
            <YearFilter
              years={availableYears}
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
            />
          )}

          {/* Title Section */}
          <motion.div
            className="who-is-watching"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <h1 className="who-title">Quem deixou uma mensagem?</h1>
            <p className="who-subtitle">
              Deslize para o lado e clique em um perfil para ler
            </p>
          </motion.div>

          {/* Profiles Carousel (Substituiu o grid antigo!) */}
          <div className="profiles-carousel-wrapper">
            <div className="profiles-carousel">
              {filteredMessages.map((friend, index) => (
                <ProfileCard
                  key={friend.id}
                  profile={friend}
                  index={index}
                  onClick={handleProfileClick}
                />
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredMessages.length === 0 && (
            <motion.div
              className="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="empty-state-text">
                Nenhuma mensagem para este ano ainda. Volte em breve! 🎉
              </p>
            </motion.div>
          )}

          {/* Birthday Message */}
          <motion.div
            className="birthday-banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="birthday-banner-line" />
            <p className="birthday-banner-text">
              🎂 Feliz {selectedYear - 2003} anos, Thiago! 🎉
            </p>
            <div className="birthday-banner-line" />
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>Feito com ❤️ pelos seus amigos • ThiagoFlix © 2026</p>
        </footer>

        {/* Message Modal */}
        <MessageModal
          friend={selectedFriend}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      </div>
    </>
  );
}