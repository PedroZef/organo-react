# 🌳 Organo - Organograma de Times e Colaboradores

![React 18](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite 5](https://img.shields.io/badge/Vite-5.2.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Flexbox-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge)

O **Organo** é uma aplicação web desenvolvida em React para a criação e organização visual de cards de colaboradores divididos por equipes funcionais (Programação, Front-End, Data Science, DevOps, UX & Design, Mobile, Inovação e Gestão).

---

## ⚡ Melhorias de Performance & Migração para o Vite

Originalmente criado com o *Create React App (react-scripts)*, o projeto passou por uma reformulação completa de arquitetura e foi migrado para o **Vite 5**:

- 🚀 **Servidor Dev Instantâneo**: Inicialização em menos de **200ms**.
- 📦 **Tamanho de Dependências Reduzido**: Redução drástica dos pacotes legados do `node_modules` (de 1.500+ para apenas ~60 pacotes essenciais).
- 🛠️ **Build Ultra-Rápido**: Compilação de produção concluída em menos de **5 segundos** (`npm run build`).

---

## 🚀 Funcionalidades da Aplicação

- ✨ **Cadastro Dinâmico**: Adicione colaboradores informando Nome, Cargo, Imagem (URL) e Seleção de Time.
- 🗑️ **Remoção de Cards**: Botão interativo em cada card para excluir colaboradores em tempo real.
- 🖼️ **Fallback Automático de Foto**: Se a imagem do colaborador não carregar ou estiver inválida, o card exibe um avatar padrão automaticamente.
- ♿ **Acessibilidade (a11y)**: Vínculo explicito entre rótulos `<label>` e campos de texto/seletores através de `htmlFor` e `id` dinâmicos.
- 🎨 **Design Moderno e Tipografia Curada**:
  - Fontes *Prata* (títulos) e *Montserrat* (corpo de texto) do Google Fonts.
  - Animações suaves de hover (`transform: translateY(-4px)`) nos cards e botões.
- ⚓ **Rodapé Agrupado e Seguro**:
  - Layout compacto centralizado com imagem de fundo temática.
  - Ícones SVG unificados para GitHub, Facebook, Twitter/X e LinkedIn.
  - Links externos protegidos com `target="_blank" rel="noopener noreferrer"`.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: React 18
- **Bundler & Dev Server**: Vite 5 + `@vitejs/plugin-react`
- **Estilização**: Vanilla CSS3 (Flexbox, CSS variables, Glassmorphism, Responsive Media Queries)
- **Fontes**: Google Fonts (*Montserrat* e *Prata*)

---

## 📁 Estrutura de Pastas

```text
organo-react/
├── index.html              # Template principal HTML configurado para o Vite
├── vite.config.js          # Configuração do Vite com esbuild JSX loader
├── package.json            # Dependências e scripts do projeto
├── public/                 # Imagens estáticas (banner, logos, avatares)
│   └── imgs/
├── skills/                 # Guias e Prompts AI de desenvolvimento React + Vite
│   └── react-vite/
│       └── SKILL.md
└── src/
    ├── App.js              # Componente raiz com o estado global dos colaboradores
    ├── index.js            # Ponto de entrada do React DOM
    ├── index.css           # Estilos globais e fontes
    └── components/         # Componentes modulares da aplicação
        ├── Banner/
        ├── Botao/
        ├── CampoTexto/
        ├── Colaborador/
        ├── Formulario/
        ├── ListaSuspensa/
        ├── Rodape/
        └── Time/
```

---

## 💻 Como Executar o Projeto

### 1. Clonar o repositório e instalar as dependências
```bash
npm install
```

### 2. Executar o servidor de desenvolvimento (Vite)
```bash
npm start
# ou
npm run dev
```
O projeto abrirá automaticamente em `http://localhost:3000`.

### 3. Gerar a build de produção
```bash
npm run build
```

### 4. Visualizar a build localmente
```bash
npm run preview
```

---

## 🧠 Skills e Prompts de Desenvolvimento (`skills/react-vite`)

Este repositório possui uma pasta dedicada com diretrizes e prompts utilizados para otimizar aplicações React com Vite:

- 📄 [`skills/react-vite/SKILL.md`](./skills/react-vite/SKILL.md): Contém as regras de arquitetura, padrões de acessibilidade, snippets de configuração do Vite e prompts prontos para automação de refatoração.

---

## 👨‍💻 Créditos

Projeto desenvolvido como parte dos estudos da formação React na **Alura** em parceria com o programa **Oracle Next Education (ONE)**.

- **Desenvolvido por**: Pedro Zeferino da Silva
- **Instrutores & Formadores**: Paulo Silveira | Marcos Vinicios da Silva Neves
