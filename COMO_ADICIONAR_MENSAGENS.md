# 🎂 Como Adicionar Novas Mensagens para 2026

Bem-vindo ao **ThiagoFlix**! Este guia mostra como adicionar novas mensagens de aniversário para o Thiago em 2026 **sem deletar as mensagens de 2025**.

---

## 📁 Estrutura do Projeto

```
thiago-birthday/
├── client/
│   └── src/
│       ├── data/
│       │   └── messages.json          ← ARQUIVO PRINCIPAL (edite aqui!)
│       ├── components/
│       │   ├── ProfileCard.tsx
│       │   └── MessageModal.tsx
│       └── pages/
│           └── Home.tsx
└── COMO_ADICIONAR_MENSAGENS.md        ← Este arquivo
```

---

## 🎯 Passo 1: Abra o Arquivo de Mensagens

Navegue até: **`client/src/data/messages.json`**

Este arquivo contém todas as mensagens em formato JSON. Cada amigo é um objeto com a seguinte estrutura:

```json
{
  "id": "juh",
  "name": "Juh",
  "avatar": "https://cdn.../juh.jpeg",
  "role": "Amiga do Ministério",
  "message": "Agradeço a Deus pela sua vida...",
  "videoUrl": "https://cdn.../juhv.mp4",
  "photos": ["https://cdn.../foto1.jpeg"],
  "color": "#E50914"
}
```

---

## 🆕 Passo 2: Adicionar Nova Mensagem para 2026

### Opção A: Adicionar Mensagem de um Amigo Existente (2025 + 2026)

**Problema:** Você quer que Juh tenha 2 mensagens (uma de 2025 e outra de 2026).

**Solução:** Crie um novo objeto com um `id` diferente:

```json
{
  "id": "juh_2026",
  "name": "Juh",
  "avatar": "https://cdn.../juh.jpeg",
  "role": "Amiga do Ministério",
  "message": "Mais um ano de bênçãos, Thiago! Que 2026 seja cheio de...",
  "videoUrl": null,
  "photos": [],
  "color": "#E50914"
}
```

**Importante:**
- Mude o `id` para algo único (ex: `juh_2026`, `juh_2025`)
- Mantenha o mesmo `name` e `avatar`
- Adicione a nova mensagem no campo `message`
- Se não houver vídeo, deixe `videoUrl: null`
- Se não houver fotos extras, deixe `photos: []`

### Opção B: Adicionar Novo Amigo

Se um novo amigo quer deixar mensagem:

```json
{
  "id": "novo_amigo",
  "name": "Nome do Novo Amigo",
  "avatar": "https://cdn.../novo_amigo.jpeg",
  "role": "Seu Cargo/Relação",
  "message": "Sua mensagem aqui...",
  "videoUrl": null,
  "photos": [],
  "color": "#E50914"
}
```

---

## 📸 Passo 3: Adicionar Fotos (Opcional)

Se o amigo quer adicionar fotos:

1. **Faça upload da foto** para o CDN do projeto
2. **Copie a URL CDN** retornada
3. **Adicione no array `photos`:**

```json
{
  "id": "juh_2026",
  "name": "Juh",
  "avatar": "https://cdn.../juh.jpeg",
  "role": "Amiga do Ministério",
  "message": "Feliz 23 anos, Thiago!",
  "videoUrl": null,
  "photos": [
    "https://cdn.../foto_nova_1.jpeg",
    "https://cdn.../foto_nova_2.jpeg"
  ],
  "color": "#E50914"
}
```

---

## 🎬 Passo 4: Adicionar Vídeo (Opcional)

Se o amigo quer adicionar um vídeo curto:

1. **Faça upload do vídeo** para o CDN do projeto
2. **Copie a URL CDN** retornada
3. **Adicione no campo `videoUrl`:**

```json
{
  "id": "juh_2026",
  "name": "Juh",
  "avatar": "https://cdn.../juh.jpeg",
  "role": "Amiga do Ministério",
  "message": "Feliz 23 anos, Thiago!",
  "videoUrl": "https://cdn.../juh_2026.mp4",
  "photos": [],
  "color": "#E50914"
}
```

---

## 📋 Exemplo Completo: Adicionar Mensagens de 2026

Seu arquivo `messages.json` ficaria assim:

```json
[
  {
    "id": "juh",
    "name": "Juh",
    "avatar": "https://d2xsxph8kpxj0f.cloudfront.net/310519663403397891/Fy2N24fQjFKetMfVnqgH4c/juh_f066c1f7.jpeg",
    "role": "Amiga do Ministério",
    "message": "Agradeço a Deus pela sua vida... [MENSAGEM DE 2025]",
    "videoUrl": "https://supresa-titio-thiago.netlify.app/imagens/juh/juhv.mp4",
    "photos": [],
    "color": "#E50914"
  },
  {
    "id": "juh_2026",
    "name": "Juh",
    "avatar": "https://d2xsxph8kpxj0f.cloudfront.net/310519663403397891/Fy2N24fQjFKetMfVnqgH4c/juh_f066c1f7.jpeg",
    "role": "Amiga do Ministério",
    "message": "Mais um ano de bênçãos, Thiago! Que 2026 seja... [MENSAGEM DE 2026]",
    "videoUrl": null,
    "photos": [],
    "color": "#E50914"
  },
  {
    "id": "nicole",
    "name": "Nicole",
    "avatar": "https://d2xsxph8kpxj0f.cloudfront.net/310519663403397891/Fy2N24fQjFKetMfVnqgH4c/nicole_dc85216e.jpeg",
    "role": "Sobrinha do Ministério",
    "message": "FELIZ ANIVERSÁRIO THIAGO!... [MENSAGEM DE 2025]",
    "videoUrl": "https://supresa-titio-thiago.netlify.app/imagens/nicole/nicolev.mp4",
    "photos": [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663403397891/Fy2N24fQjFKetMfVnqgH4c/nicolef_6aa04a36.jpeg"
    ],
    "color": "#E50914"
  },
  {
    "id": "nicole_2026",
    "name": "Nicole",
    "avatar": "https://d2xsxph8kpxj0f.cloudfront.net/310519663403397891/Fy2N24fQjFKetMfVnqgH4c/nicole_dc85216e.jpeg",
    "role": "Sobrinha do Ministério",
    "message": "Titio, que 2026 seja um ano de muitas vitórias... [MENSAGEM DE 2026]",
    "videoUrl": null,
    "photos": [],
    "color": "#E50914"
  }
]
```

---

## ✅ Checklist Final

Antes de salvar, verifique:

- [ ] Cada `id` é **único** (não há duplicatas)
- [ ] O `name` está correto
- [ ] A `message` está preenchida
- [ ] As URLs de `avatar`, `videoUrl` e `photos` são válidas
- [ ] O JSON está **bem formatado** (sem erros de sintaxe)
- [ ] As mensagens de 2025 ainda estão lá (não foram deletadas)

---

## 🔧 Como Fazer Upload de Fotos/Vídeos

Para adicionar fotos ou vídeos novos, você precisa fazer upload para o CDN do projeto:

1. Abra o **Management UI** (painel de gerenciamento)
2. Vá para a aba **Code**
3. Procure pela opção de **Upload Files** ou use o terminal:

```bash
manus-upload-file --webdev /caminho/para/sua/foto.jpeg
```

Isso retornará uma URL CDN que você pode copiar e colar no `messages.json`.

---

## 🎉 Pronto!

Após editar o arquivo, o site será atualizado automaticamente! As novas mensagens aparecerão na grade de perfis.

**Dúvidas?** Revise a estrutura JSON acima ou entre em contato com o desenvolvedor.

Feliz 23 anos, Thiago! 🎂🎉
