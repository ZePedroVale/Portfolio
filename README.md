# 🚀 José Vale Portfolio

Portfolio profissional moderno em React.

## Passo a Passo para Colocar Online

### 1️⃣ Criar conta no GitHub (se não tiveres)
1. Vai a https://github.com
2. Clica "Sign up" e cria a conta

### 2️⃣ Criar repositório no GitHub
1. Clica no "+" no canto superior direito → "New repository"
2. Nome: `josevale-portfolio`
3. Deixa como "Public"
4. Clica "Create repository"

### 3️⃣ Fazer upload dos ficheiros
**Opção A - Via interface web (mais fácil):**
1. No repositório vazio, clica "uploading an existing file"
2. Arrasta toda a pasta do projeto
3. Clica "Commit changes"

**Opção B - Via terminal:**
```bash
cd josevale-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TEU-USERNAME/josevale-portfolio.git
git push -u origin main
```

### 4️⃣ Deploy no Vercel (GRÁTIS)
1. Vai a https://vercel.com
2. Clica "Sign Up" → "Continue with GitHub"
3. Autoriza o Vercel a aceder ao GitHub
4. Clica "Add New..." → "Project"
5. Encontra o `josevale-portfolio` e clica "Import"
6. Deixa as configurações default e clica "Deploy"
7. Espera ~1 minuto e terás um link tipo `josevale-portfolio.vercel.app`

### 5️⃣ Conectar o domínio josevale.blog

**No Vercel:**
1. Vai ao teu projeto no Vercel
2. Clica "Settings" → "Domains"
3. Escreve `josevale.blog` e clica "Add"
4. O Vercel vai mostrar os registos DNS necessários

**No dominios.pt:**
1. Vai à gestão do domínio josevale.blog
2. Clica no separador "NAMESERVERS"
3. Altera para os nameservers do Vercel:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
4. Guarda as alterações

**OU em alternativa (registos A/CNAME):**
1. No dominios.pt, vai a "FERRAMENTAS DE GESTÃO" → "Gestão de DNS"
2. Adiciona:
   - Tipo: A | Nome: @ | Valor: 76.76.21.21
   - Tipo: CNAME | Nome: www | Valor: cname.vercel-dns.com

⏰ **Nota:** A propagação DNS pode demorar até 48h, mas normalmente fica ativo em 1-2 horas.

---

## 📝 Personalizar o Portfolio

Edita o ficheiro `src/Portfolio.js` e procura a secção `portfolioData`:

```javascript
const portfolioData = {
  name: "José Vale",           // O teu nome
  role: "Full Stack Developer", // A tua função
  email: "jose@josevale.blog",  // O teu email
  github: "github.com/josevale", // O teu GitHub
  // ... continua a personalizar
};
```

---

## 🛠️ Comandos Úteis

```bash
# Instalar dependências
npm install

# Correr localmente
npm start

# Criar versão de produção
npm run build
```

---

Qualquer dúvida, contacta-me! 🎉
