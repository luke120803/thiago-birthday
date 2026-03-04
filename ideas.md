# ThiagoFlix — Brainstorm de Design

## Contexto
Site de homenagem de aniversário para Thiago, com 8 amigos deixando mensagens. A interface replica a experiência da Netflix, mas com conteúdo emocional e pessoal.

---

<response>
<text>

## Ideia 1 — "Cinema Noir Pessoal"

**Design Movement:** Neo-Noir Cinematográfico com toque editorial

**Core Principles:**
1. Escuridão proposital — o fundo #141414 como tela em branco para emoções
2. Tipografia de alto contraste — títulos pesados contra textos leves
3. Hierarquia visual através de luz e sombra (não cor)
4. Movimento como narrativa — cada transição conta uma história

**Color Philosophy:**
- Background: #141414 (preto cinema)
- Accent primário: #E50914 (vermelho Netflix — urgência, paixão)
- Accent secundário: #F5F5F1 (branco quente — humanidade)
- Muted: #808080 (cinza médio — texto secundário)
- Gold: #B8860B (dourado — celebração, raridade)
- O vermelho é usado com parcimônia — apenas em elementos de ação e destaque

**Layout Paradigm:**
- Tela inicial: grade assimétrica de perfis com tamanhos variados (destaque para o aniversariante)
- Modal de mensagem: layout de "ficha técnica" com foto à esquerda, texto à direita (desktop) / empilhado (mobile)
- Efeito de vinheta nas bordas da tela

**Signature Elements:**
1. Borda de perfil animada em gradiente vermelho ao hover
2. Partículas de confete em vermelho/dourado na abertura do modal
3. Linha horizontal vermelha como separador de seções (estilo Netflix)

**Interaction Philosophy:**
- Hover nos cards: escala + brilho + borda vermelha pulsante
- Click: transição de fade-in com escurecimento do fundo
- Modal: slide-up suave com backdrop blur

**Animation:**
- Entrada dos cards: stagger animation (cada card aparece 100ms após o anterior)
- Hover: scale(1.08) com box-shadow vermelha
- Modal: translateY(20px) → translateY(0) com opacity 0→1
- Confete: partículas caindo ao abrir o modal

**Typography System:**
- Display: "Bebas Neue" — títulos impactantes, estilo Netflix
- Body: "Inter" — leitura confortável das mensagens
- Accent: "Playfair Display" — citações e destaques emocionais
- Hierarquia: 48px título / 24px subtítulo / 16px corpo / 14px meta

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Ideia 2 — "Streaming de Memórias" ✅ ESCOLHIDA

**Design Movement:** Dark UI Cinematográfico com elementos de identidade visual Netflix autêntica

**Core Principles:**
1. Fidelidade ao DNA Netflix — paleta, tipografia e padrões de interação reconhecíveis
2. Personalização emocional — fotos reais, mensagens genuínas, sem artificialidade
3. Responsividade radical — mobile-first, cada pixel justificado
4. Animações funcionais — movimento que guia, não distrai

**Color Philosophy:**
- Background primário: #141414
- Background secundário: #1a1a1a (cards, modais)
- Background terciário: #222222 (hover states)
- Netflix Red: #E50914 (CTAs, bordas de destaque, logo)
- Netflix Red hover: #F40612
- Texto primário: #FFFFFF
- Texto secundário: #AAAAAA
- Texto muted: #666666
- Gradiente hero: linear de #141414 transparente para #141414 sólido

**Layout Paradigm:**
- Tela "Quem deixou uma mensagem?": centralizada verticalmente, grade de 4 colunas (desktop) / 2 colunas (mobile)
- Cada card: foto quadrada com bordas arredondadas (8px), nome abaixo
- Modal: overlay escuro com card centralizado, foto circular grande, nome, badge "Mensagem", texto da mensagem
- Header fixo com logo ThiagoFlix em vermelho

**Signature Elements:**
1. Logo "ThiagoFlix" em vermelho com tipografia bold condensada
2. Cards de perfil com efeito de brilho e escala no hover
3. Gradiente de fundo no modal (escuro nas bordas, levemente mais claro no centro)

**Interaction Philosophy:**
- Hover: escala sutil (1.1x) + borda vermelha + nome em destaque
- Click: ripple effect + transição suave para modal
- Modal: backdrop blur + fade-in do conteúdo
- Fechar: click fora ou botão X

**Animation:**
- Entrada da página: título aparece primeiro, depois cards em stagger (150ms cada)
- Card hover: transform scale(1.1) + border-color red, duration 200ms ease
- Modal open: backdrop opacity 0→0.85, card translateY(30px)→0 + opacity 0→1, duration 350ms
- Modal close: reverse, duration 200ms

**Typography System:**
- Display/Logo: "Bebas Neue" — impacto máximo, estilo Netflix
- Interface: "Netflix Sans" fallback para "Helvetica Neue", "Arial" — clean, legível
- Mensagens: "Georgia" ou "Lora" — warmth para textos emocionais longos
- Tamanhos: Logo 2.5rem / Título página 2rem / Nome card 0.9rem / Corpo mensagem 1rem

</text>
<probability>0.09</probability>
</response>

<response>
<text>

## Ideia 3 — "Galeria de Estrelas"

**Design Movement:** Luxo Minimalista com referências ao universo cinematográfico

**Core Principles:**
1. Cada amigo é uma estrela — tratamento visual VIP para cada perfil
2. Espaço negativo como luxo — muito espaço em branco (preto) entre elementos
3. Detalhes que surpreendem — microanimações inesperadas
4. Narrativa visual — a página conta uma história do início ao fim

**Color Philosophy:**
- Fundo: #0A0A0A (quase preto absoluto)
- Vermelho: #E50914 apenas em elementos únicos
- Dourado: #C9A84C para bordas e detalhes de celebração
- Branco: #F0F0F0 para texto principal
- Cinza: #3D3D3D para elementos secundários

**Layout Paradigm:**
- Grid hexagonal de perfis (efeito favo de mel)
- Cada célula hexagonal contém a foto do amigo
- Modal com design de "bastidores" — como uma ficha de elenco

**Signature Elements:**
1. Bordas hexagonais douradas nos perfis
2. Efeito de "spotlight" — luz circular seguindo o cursor
3. Partículas de estrelas no fundo (canvas animado)

**Interaction Philosophy:**
- Hover: glow dourado + rotação sutil do hexágono
- Click: explosão de partículas + transição cinematográfica
- Modal: cortina se abrindo (animação de reveal)

**Animation:**
- Entrada: cada hexágono "cai" do topo com bounce
- Fundo: estrelas piscando lentamente
- Modal: cortina vertical se abrindo de cima para baixo

**Typography System:**
- Display: "Cinzel" — romano, elegante, cinematográfico
- Body: "Raleway" — moderno, levemente art deco
- Accent: "Cormorant Garamond" — luxo editorial

</text>
<probability>0.07</probability>
</response>

---

## Design Escolhido: Ideia 2 — "Streaming de Memórias"

Filosofia: Dark UI Cinematográfico fiel ao DNA Netflix, com personalização emocional através de fotos reais e mensagens genuínas. Layout mobile-first com animações funcionais que guiam sem distrair.
