# 🎬 ThiagoFlix - Homenagem de Aniversário

Este é um projeto front-end interativo desenvolvido para celebrar o aniversário do Thiago. O design é fortemente inspirado na interface da Netflix (Dark UI Cinematográfico), apresentando uma tela de "Quem está assistindo?" que se transforma em uma galeria de mensagens ("Quem deixou uma mensagem?").

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias principais:
- **React (v19)**
- **Vite** (Bundler e Dev Server)
- **Tailwind CSS (v4)** (Estilização)
- **Framer Motion** (Animações fluidas)
- **Radix UI** (Componentes acessíveis)

## 🛠️ Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina. 
O gerenciador de pacotes padrão configurado para este projeto é o **pnpm**. Caso não o tenha, instale globalmente:

\`\`\`bash
npm install -g pnpm
\`\`\`

## 📦 Como Instalar

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o terminal na pasta raiz do projeto.
3. Instale todas as dependências necessárias executando:

\`\`\`bash
pnpm install
\`\`\`

## 💻 Como Executar o Projeto

### Modo de Desenvolvimento
Para iniciar o servidor de desenvolvimento com *Hot-Reload* (atualiza automaticamente ao salvar arquivos):

\`\`\`bash
pnpm dev
\`\`\`
O terminal exibirá um link (geralmente `http://localhost:5173`) para você acessar no navegador.

### Build para Produção
Quando o projeto estiver pronto para ser publicado (deploy), você deve gerar os arquivos otimizados:

\`\`\`bash
pnpm build
\`\`\`
Isso criará uma pasta `dist` com os arquivos prontos para produção.

### Testar a Versão de Produção Localmente
Para testar como o projeto se comportará em produção antes de fazer o deploy:

\`\`\`bash
pnpm start
\`\`\`
*Nota: Este comando inicia o servidor Express configurado para produção na pasta `dist`*.

## 📝 Como Adicionar Novas Mensagens

*(Se você criou o arquivo `messages.json` conforme as recomendações anteriores)*
As mensagens, fotos e dados dos amigos estão concentrados em um único arquivo para facilitar a manutenção.
Basta editar o arquivo localizado em: `client/src/data/messages.json` e adicionar um novo objeto na lista com as informações do amigo.