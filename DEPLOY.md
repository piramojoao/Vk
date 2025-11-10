# 🚀 Como Colocar o Site no Ar

## Opções de Hospedagem (Recomendadas)

### 🌟 Opção 1: Vercel (RECOMENDADO - Grátis)

**Vantagens:** Grátis, rápido, SSL automático, ideal para React

#### Passo a Passo:

1. **Crie uma conta na Vercel:**
   - Acesse: https://vercel.com
   - Cadastre-se com GitHub, GitLab ou email

2. **Instale o Vercel CLI:**
```bash
npm install -g vercel
```

3. **Faça login:**
```bash
vercel login
```

4. **Na pasta do projeto, rode:**
```bash
npm run build
vercel
```

5. **Siga as instruções:**
   - Confirme o nome do projeto
   - Aceite as configurações padrão
   - Anote a URL gerada (ex: vk-funilaria.vercel.app)

6. **Configure seu domínio:**
   - No painel da Vercel, vá em "Settings" > "Domains"
   - Adicione seu domínio (ex: vkfunilaria.com.br)
   - A Vercel vai mostrar os registros DNS necessários

7. **Configure no Registro.br:**
   - Acesse: https://registro.br
   - Faça login
   - Vá em "Meus Domínios" > seu domínio > "DNS"
   - Adicione os registros que a Vercel mostrou:
     ```
     Tipo A:
     @ → 76.76.21.21
     
     Tipo CNAME:
     www → cname.vercel-dns.com
     ```

8. **Aguarde propagação (até 48h)**

---

### 🔷 Opção 2: Netlify (Grátis também)

1. **Crie uma conta:**
   - Acesse: https://netlify.com
   - Cadastre-se

2. **Build do projeto:**
```bash
npm run build
```

3. **Arraste a pasta `dist` para o Netlify:**
   - No painel do Netlify, arraste a pasta `dist` gerada
   - Ou use: `npm install -g netlify-cli` e depois `netlify deploy --prod`

4. **Configure o domínio:**
   - No Netlify: "Domain Settings" > "Add custom domain"
   - Configure DNS no Registro.br similar à Vercel

---

### 🏢 Opção 3: Hospedagem Tradicional (Hostinger, HostGator, etc)

Se você já tem uma hospedagem:

1. **Gere o build:**
```bash
npm run build
```

2. **Faça upload da pasta `dist`:**
   - Acesse o cPanel da sua hospedagem
   - Vá em "Gerenciador de Arquivos"
   - Entre na pasta `public_html`
   - Faça upload de TODOS os arquivos da pasta `dist`
   - **NÃO** faça upload da pasta `dist` em si, mas sim o conteúdo dela

3. **Configure o domínio:**
   - No Registro.br, aponte para o IP da sua hospedagem
   - Tipo A: @ → IP do servidor (ex: 192.168.1.1)
   - Tipo CNAME: www → seu-site.com.br

4. **Crie um arquivo `.htaccess` na raiz:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📋 Configuração DNS no Registro.br

### Para apontar para Vercel/Netlify:

1. Acesse: https://registro.br
2. Faça login
3. Vá em "Meus Domínios"
4. Clique no seu domínio
5. Clique em "DNS" ou "Editar Zona"
6. Adicione/edite os registros:

**Para Vercel:**
```
Tipo: A
Host: @
Valor: 76.76.21.21
TTL: 3600

Tipo: CNAME
Host: www
Valor: cname.vercel-dns.com
TTL: 3600
```

**Para Netlify:**
```
Tipo: A
Host: @
Valor: 75.2.60.5
TTL: 3600

Tipo: CNAME
Host: www
Valor: seu-site.netlify.app
TTL: 3600
```

7. Salve as alterações
8. Aguarde propagação (pode levar até 48h, geralmente é mais rápido)

---

## 🔍 Verificar Propagação

Depois de configurar, verifique se está funcionando:
- https://dnschecker.org
- Digite seu domínio
- Veja se os servidores DNS estão apontando corretamente

---

## ⚡ Comandos Úteis

### Build do projeto:
```bash
npm run build
```

### Testar o build localmente:
```bash
npm run preview
```

### Deploy na Vercel (depois da primeira vez):
```bash
vercel --prod
```

---

## 🎯 Recomendação

**Use a Vercel** - É a opção mais fácil, grátis, rápida e ideal para React:
1. Não precisa se preocupar com servidor
2. SSL (HTTPS) automático
3. Deploy super rápido
4. CDN global (site carrega rápido no mundo todo)
5. Suporte a domínios personalizados
6. Atualizações fáceis com `vercel --prod`

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas em algum passo, me avise que te ajudo! 🚀

