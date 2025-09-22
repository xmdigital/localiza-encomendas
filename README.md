# Localiza Encomendas - Site de Rastreamento

Um site moderno e responsivo para rastreamento de encomendas nacionais e internacionais, desenvolvido com HTML, CSS e JavaScript puro.

## 🚀 Características

- **Design Responsivo**: Otimizado para dispositivos móveis (mobile-first)
- **Interface Moderna**: Design limpo com gradientes e animações suaves
- **Formulário de 3 Etapas**: Processo intuitivo de qualificação
- **PWA Ready**: Configurado como Progressive Web App
- **Conformidade Legal**: Páginas de políticas conforme exigências do Google
- **Performance Otimizada**: Service Worker para cache e carregamento rápido

## 📱 Funcionalidades

### Formulário Principal
1. **Tipo de Encomenda**: Nacional ou Internacional
2. **Verificação de Idade**: Maior ou menor de idade
3. **Documentos**: Disponibilidade de documentos
4. **Redirecionamento**: Para https://localiza-encomendas.site/rastreio/

### Páginas Legais
- **Termos de Uso**: Condições de utilização do serviço
- **Política de Privacidade**: Conformidade com LGPD
- **Política de Cookies**: Transparência sobre cookies utilizados
- **Contato**: Formulário e informações da empresa

## 🏗️ Estrutura do Projeto

```
site-encomendas/
├── index.html          # Página principal com formulário
├── styles.css          # Estilos CSS responsivos
├── script.js           # Lógica JavaScript do formulário
├── manifest.json       # Configuração PWA
├── sw.js              # Service Worker para cache
├── termos.html        # Termos de Uso
├── politicas.html     # Política de Privacidade
├── cookies.html       # Política de Cookies
├── contato.html       # Página de Contato
└── README.md          # Este arquivo
```

## 🎨 Design e UX

### Cores
- **Primária**: #667eea (Azul gradiente)
- **Secundária**: #764ba2 (Roxo gradiente)
- **Fundo**: Gradiente linear 135deg
- **Texto**: #333 (escuro) / #fff (claro)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Responsividade
- **Mobile**: 320px - 768px (foco principal)
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Animações, Media Queries
- **JavaScript ES6+**: Lógica interativa e navegação
- **PWA**: Manifest, Service Worker
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia

## 📋 Requisitos Atendidos

### Funcionalidades Solicitadas ✅
- [x] Site usando apenas HTML, CSS e JavaScript
- [x] Design bonito e moderno
- [x] Interface intuitiva
- [x] Foco mobile (mobile-first)
- [x] 3 etapas de perguntas:
  - [x] Encomenda nacional ou internacional?
  - [x] Você é maior de idade?
  - [x] Está com documentos em mãos?
- [x] Redirecionamento para https://localiza-encomendas.site/rastreio/

### Políticas do Google ✅
- [x] CNPJ da empresa no rodapé
- [x] Página de Termos de Uso
- [x] Página de Política de Privacidade
- [x] Página de Política de Cookies
- [x] Página de Contato

## 🚀 Como Usar

### Desenvolvimento Local
1. Clone ou baixe os arquivos
2. Abra um servidor HTTP local:
   ```bash
   python3 -m http.server 8080
   ```
3. Acesse http://localhost:8080

### Deploy
1. Faça upload de todos os arquivos para seu servidor web
2. Configure HTTPS (recomendado para PWA)
3. Teste todas as funcionalidades

## 📱 PWA (Progressive Web App)

O site está configurado como PWA com:
- **Manifest.json**: Configurações de instalação
- **Service Worker**: Cache offline
- **Ícones**: Para instalação no dispositivo
- **Meta tags**: Para dispositivos móveis

### Instalação no Dispositivo
Os usuários podem instalar o site como app:
1. Abrir no navegador móvel
2. Selecionar "Adicionar à tela inicial"
3. Usar como aplicativo nativo

## 🔒 Conformidade Legal

### LGPD (Lei Geral de Proteção de Dados)
- Política de Privacidade detalhada
- Transparência sobre coleta de dados
- Direitos do titular dos dados
- Base legal para tratamento

### Cookies
- Política específica de cookies
- Categorização por finalidade
- Instruções de gerenciamento
- Opt-out para analytics

## 📊 Performance

### Otimizações Implementadas
- **CSS**: Minificação e otimização
- **JavaScript**: Debounce e lazy loading
- **Imagens**: SVG para ícones
- **Cache**: Service Worker
- **Fonts**: Font-display: swap

### Métricas Esperadas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🌐 Compatibilidade

### Navegadores Suportados
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+

### Recursos Utilizados
- CSS Grid e Flexbox
- ES6+ JavaScript
- Service Workers
- Web App Manifest

## 📞 Informações da Empresa

**Localiza Encomendas Ltda.**
- CNPJ: 12.345.678/0001-90
- Localização: São Paulo, SP - Brasil
- E-mail: contato@localiza-encomendas.com.br
- Telefone: (11) 3000-0000

## 🔄 Fluxo do Usuário

1. **Acesso**: Usuário acessa a página inicial
2. **Etapa 1**: Seleciona tipo de encomenda (Nacional/Internacional)
3. **Etapa 2**: Confirma se é maior de idade (Sim/Não)
4. **Etapa 3**: Informa se tem documentos (Sim/Não)
5. **Loading**: Tela de processamento (2 segundos)
6. **Redirecionamento**: Para o site de rastreamento externo

## 🎯 Próximos Passos

Para melhorias futuras, considere:
- Integração com APIs de rastreamento
- Sistema de notificações push
- Modo offline completo
- Analytics detalhado
- Testes A/B para conversão

## 📝 Licença

Este projeto foi desenvolvido para uso comercial da Localiza Encomendas Ltda.

---

**Desenvolvido com ❤️ para uma experiência de usuário excepcional**
