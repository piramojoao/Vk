# VK Funilaria - Reparos Rápidos

Site moderno e responsivo para a VK Funilaria, desenvolvido em React.

## 🚀 Tecnologias

- React 18
- Vite
- React Icons
- CSS3

## 📋 Funcionalidades

- ✅ Design moderno e responsivo
- ✅ Carrossel de banners na home
- ✅ Seções: Serviços, Sobre, Galeria, Contato
- ✅ Botões flutuantes de WhatsApp com múltiplos atendentes
- ✅ Menu responsivo para mobile
- ✅ Animações suaves
- ✅ Galeria de trabalhos com modal
- ✅ Mapa integrado do Google Maps

## 🔧 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Testar o build localmente
npm run preview
```

## 🌐 Deploy e Domínio

Veja o arquivo [DEPLOY.md](DEPLOY.md) para instruções completas de como colocar o site no ar com seu domínio do Registro.br.

## 📁 Estrutura de Pastas

```
public/
  ├── logo.jpg           # Logo da funilaria
  ├── banners/
  │   ├── banner1.jpg    # Banner principal
  │   ├── banner2.jpg    # Banner secundário
  │   └── banner3.jpg    # Banner terciário
  └── gallery/
      ├── work1.jpg      # Trabalhos realizados
      ├── work2.jpg
      ├── work3.jpg
      ├── work4.jpg
      ├── work5.jpg
      └── work6.jpg

src/
  ├── components/        # Componentes React
  ├── App.jsx           # Componente principal
  ├── main.jsx          # Ponto de entrada
  └── index.css         # Estilos globais
```

## 🎨 Personalização

### Logo e Imagens
Coloque suas imagens na pasta `public/`:
- Logo: `public/logo.jpg`
- Banners: `public/banners/banner1.jpg`, `banner2.jpg`, `banner3.jpg`
- Galeria: `public/gallery/work1.jpg` até `work6.jpg`

### WhatsApp
Edite o arquivo `src/components/WhatsAppButtons.jsx` e altere os números:

```javascript
const whatsappNumbers = [
  {
    id: 1,
    name: 'Vini',
    number: '5515997391629',
    message: 'Olá! Gostaria de solicitar um orçamento na VK Funilaria.'
  },
  {
    id: 2,
    name: 'Kaylo',
    number: '5515996717940',
    message: 'Olá! Preciso de informações sobre os serviços da VK Funilaria.'
  }
]
```

### Cores
As cores podem ser alteradas no arquivo `src/index.css`:

```css
:root {
  --primary-color: #ff6b00;      /* Cor principal (laranja) */
  --secondary-color: #1a1a1a;    /* Cor secundária (preto) */
  --accent-color: #ffd700;       /* Cor de destaque (dourado) */
}
```

### Informações de Contato
Edite o componente `src/components/Contact.jsx` e `src/components/Footer.jsx` com suas informações.

### Google Maps
No arquivo `src/components/Contact.jsx`, substitua o link do iframe pelo da sua localização.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🌟 Features Destacadas

- **Carrossel automático** com navegação manual
- **Menu sticky** que acompanha o scroll
- **Animações suaves** em hover e transições
- **WhatsApp widget flutuante** com múltiplos atendentes
- **Galeria com lightbox** para visualização ampliada
- **Design profissional** com gradientes e sombras modernas

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do WhatsApp configurado no site.

