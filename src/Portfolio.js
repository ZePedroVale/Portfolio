import React, { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(true);
  const [projectFilter, setProjectFilter] = useState('all');
  const projectRefs = useRef([]);

  // ============================================
  // THEME COLORS
  // ============================================
  const c = isDark ? {
    bg: '#0a0a0f',
    cardBg: '#12121a',
    codeHdrBg: '#0a0a0f',
    text: '#ffffff',
    textSec: '#aaa',
    textMut: '#888',
    textFaint: '#666',
    textFaintest: '#555',
    border: '#222',
    borderL: '#1a1a25',
    navBg: 'rgba(10,10,15,0.95)',
    mobileBg: 'rgba(10,10,15,0.98)',
    skillBarBg: '#1a1a25',
    shapeBg: 'linear-gradient(135deg,#1a1a25 0%,#0a0a0f 100%)',
    shapeInner: 'linear-gradient(135deg,#FF6B3522 0%,#4ECDC422 100%)',
    nameGrad: 'linear-gradient(135deg,#fff 0%,#888 100%)',
    dotBorder: '#0a0a0f',
    codeColor: '#4ECDC4',
    langBg: 'rgba(255,255,255,0.05)',
    langBorder: '#333',
    scrollLineBg: '#333',
    secLineBg: '#222',
    dividerBg: '#333',
    tlLineBg: '#222',
    orb1: 'radial-gradient(circle,rgba(255,107,53,0.15) 0%,transparent 70%)',
    orb2: 'radial-gradient(circle,rgba(78,205,196,0.1) 0%,transparent 70%)',
    menuLineBg: '#ffffff',
    navLinkColor: '#888',
    themeIcon: '☀',
  } : {
    bg: '#f5f5f0',
    cardBg: '#ffffff',
    codeHdrBg: '#ebebea',
    text: '#0d0d1a',
    textSec: '#444',
    textMut: '#666',
    textFaint: '#777',
    textFaintest: '#888',
    border: '#d5d5cc',
    borderL: '#e5e5e0',
    navBg: 'rgba(245,245,240,0.95)',
    mobileBg: 'rgba(245,245,240,0.98)',
    skillBarBg: '#e0e0d8',
    shapeBg: 'linear-gradient(135deg,#e0e0d8 0%,#f5f5f0 100%)',
    shapeInner: 'linear-gradient(135deg,#FF6B3528 0%,#4ECDC428 100%)',
    nameGrad: 'linear-gradient(135deg,#0d0d1a 0%,#555 100%)',
    dotBorder: '#f5f5f0',
    codeColor: '#1a8070',
    langBg: 'rgba(0,0,0,0.05)',
    langBorder: '#ccc',
    scrollLineBg: '#bbb',
    secLineBg: '#d5d5cc',
    dividerBg: '#ccc',
    tlLineBg: '#d5d5cc',
    orb1: 'radial-gradient(circle,rgba(255,107,53,0.08) 0%,transparent 70%)',
    orb2: 'radial-gradient(circle,rgba(78,205,196,0.06) 0%,transparent 70%)',
    menuLineBg: '#0d0d1a',
    navLinkColor: '#666',
    themeIcon: '☾',
  };

  // ============================================
  // TRANSLATIONS
  // ============================================
  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        portfolio: 'Portfolio',
        experience: 'Experience',
        contact: 'Contact'
      },
      hero: {
        portfolio: 'Portfolio',
        greeting: "Hi, I'm",
        tagline: 'Bridging technology and business through innovative ERP solutions',
        viewProjects: 'View Projects',
        contact: 'Contact Me',
        yearsExp: 'Years Exp.',
        projects: 'Projects',
        certifications: 'Certs'
      },
      about: {
        title: 'About Me',
        description: `As a Developer and Functional Consultant at Advir Plan Consultoria, I specialize in leveraging technical skills such as SQL, React, WebApi Primavera, Crystal Reports, and Primavera Extensibility to deliver effective support, user training, and system solutions. My role enables me to contribute to impactful projects by integrating advanced technologies into enterprise systems. With a Master's and Bachelor's degree in Computer Science from Instituto Politécnico de Bragança, I am driven by a commitment to technological innovation and continuous learning.`
      },
      projects: {
        title: 'Projects & Expertise',
        items: [
          {
            title: 'ERP Solutions',
            description: 'Development and implementation of Cegid Primavera solutions, including extensibility modules, WebAPI integrations, and custom reports for enterprise clients.',
            tags: ['Primavera', 'C#', 'SQL', 'Crystal Reports']
          },
          {
            title: 'Web Applications',
            description: 'Full-stack web applications using React and Sequelize, creating intuitive interfaces for business process management and data visualization.',
            tags: ['React', 'Sequelize', 'Node.js', 'REST API']
          },
          {
            title: 'System Integration',
            description: 'Integration solutions connecting multiple business systems through WebAPI Primavera, enabling seamless data flow and automated workflows.',
            tags: ['WebAPI', 'Syslog', 'Integration', 'Automation']
          },
          {
            title: 'Training & Support',
            description: 'User training programs and technical support for ERP systems, including documentation, workshops, and ongoing assistance.',
            tags: ['Training', 'Support', 'Documentation', 'Consulting']
          }
        ]
      },
      experience: {
        title: 'Experience',
        items: [
          {
            company: 'Advir Plan Consultoria',
            role: 'Developer | Functional Consultant',
            period: 'Aug 2024 - Present',
            description: 'Technical support, user training, and development using SQL, Primavera Extensibility, WebApi Primavera, Crystal Reports, React, and Sequelize.'
          },
          {
            company: 'Advir Plan Consultoria',
            role: 'ERP Developer Trainee',
            period: 'Jan 2024 - Jul 2024',
            description: 'Development with Cegid Primavera ecosystem including Web API, Crystal Reports, SQL, React, C#, and Sequelize.'
          },
          {
            company: 'IPCoimbra - Health School',
            role: 'Guest Teacher',
            period: 'Apr 2024 - Jul 2024',
            description: 'Teaching modules on Technology Basics and Image Analysis with Machine Learning techniques.'
          },
          {
            company: 'IEFP',
            role: 'IT Support Technician',
            period: 'May 2024 - Jun 2024',
            description: 'Technical support and training for European Parliament election polling stations.'
          }
        ]
      },
      education: {
        title: 'Education',
        items: [
          {
            degree: "Master's Degree in Computer Science",
            school: 'Instituto Politécnico de Bragança',
            year: '2022 - Present'
          },
          {
            degree: "Bachelor's Degree in Computer Science",
            school: 'Instituto Politécnico de Bragança',
            year: '2019 - 2022'
          }
        ]
      },
      realProjects: {
        title: 'My Projects',
        filters: { all: 'All', professional: 'Professional', academic: 'Academic' }
      },
      contact: {
        title: "Let's Talk?",
        description: "I'm always open to new opportunities and interesting projects. If you have an idea or just want to say hello, get in touch!",
        sendEmail: 'Send Email'
      },
      footer: {
        made: 'Made with ☕ and lots of code'
      }
    },
    pt: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        portfolio: 'Portfólio',
        experience: 'Experiência',
        contact: 'Contacto'
      },
      hero: {
        portfolio: 'Portfolio',
        greeting: 'Olá, eu sou',
        tagline: 'Unindo tecnologia e negócio através de soluções ERP inovadoras',
        viewProjects: 'Ver Projetos',
        contact: 'Contactar',
        yearsExp: 'Anos Exp.',
        projects: 'Projetos',
        certifications: 'Certs'
      },
      about: {
        title: 'Sobre Mim',
        description: `Como Developer e Consultor Funcional na Advir Plan Consultoria, especializo-me em competências técnicas como SQL, React, WebApi Primavera, Crystal Reports e Primavera Extensibility para fornecer suporte eficaz, formação de utilizadores e soluções de sistemas. O meu papel permite-me contribuir para projetos de impacto, integrando tecnologias avançadas em sistemas empresariais. Com Mestrado e Licenciatura em Informática pelo Instituto Politécnico de Bragança, sou movido pelo compromisso com a inovação tecnológica e aprendizagem contínua.`
      },
      projects: {
        title: 'Projetos & Especialidades',
        items: [
          {
            title: 'Soluções ERP',
            description: 'Desenvolvimento e implementação de soluções Cegid Primavera, incluindo módulos de extensibilidade, integrações WebAPI e relatórios personalizados.',
            tags: ['Primavera', 'C#', 'SQL', 'Crystal Reports']
          },
          {
            title: 'Aplicações Web',
            description: 'Aplicações web full-stack usando React e Sequelize, criando interfaces intuitivas para gestão de processos de negócio e visualização de dados.',
            tags: ['React', 'Sequelize', 'Node.js', 'REST API']
          },
          {
            title: 'Integração de Sistemas',
            description: 'Soluções de integração conectando múltiplos sistemas empresariais através de WebAPI Primavera, permitindo fluxo de dados contínuo.',
            tags: ['WebAPI', 'Syslog', 'Integração', 'Automação']
          },
          {
            title: 'Formação & Suporte',
            description: 'Programas de formação e suporte técnico para sistemas ERP, incluindo documentação, workshops e assistência contínua.',
            tags: ['Formação', 'Suporte', 'Documentação', 'Consultoria']
          }
        ]
      },
      experience: {
        title: 'Experiência',
        items: [
          {
            company: 'Advir Plan Consultoria',
            role: 'Developer | Consultor Funcional',
            period: 'Ago 2024 - Presente',
            description: 'Suporte técnico, formação de utilizadores e desenvolvimento usando SQL, Primavera Extensibility, WebApi Primavera, Crystal Reports, React e Sequelize.'
          },
          {
            company: 'Advir Plan Consultoria',
            role: 'ERP Developer Trainee',
            period: 'Jan 2024 - Jul 2024',
            description: 'Desenvolvimento com ecossistema Cegid Primavera incluindo Web API, Crystal Reports, SQL, React, C# e Sequelize.'
          },
          {
            company: 'IPCoimbra - Escola de Saúde',
            role: 'Professor Convidado',
            period: 'Abr 2024 - Jul 2024',
            description: 'Lecionação de módulos sobre Fundamentos de Tecnologia e Análise de Imagem com técnicas de Machine Learning.'
          },
          {
            company: 'IEFP',
            role: 'Técnico de Suporte IT',
            period: 'Mai 2024 - Jun 2024',
            description: 'Suporte técnico e formação para mesas de voto das eleições do Parlamento Europeu.'
          }
        ]
      },
      education: {
        title: 'Formação',
        items: [
          {
            degree: 'Mestrado em Informática',
            school: 'Instituto Politécnico de Bragança',
            year: '2022 - Presente'
          },
          {
            degree: 'Licenciatura em Informática',
            school: 'Instituto Politécnico de Bragança',
            year: '2019 - 2022'
          }
        ]
      },
      realProjects: {
        title: 'Os Meus Projetos',
        filters: { all: 'Todos', professional: 'Profissional', academic: 'Académico' }
      },
      contact: {
        title: 'Vamos Conversar?',
        description: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Se tens uma ideia ou queres apenas dizer olá, entra em contacto!',
        sendEmail: 'Enviar Email'
      },
      footer: {
        made: 'Feito com ☕ e muito código'
      }
    }
  };

  const t = translations[lang];

  // ============================================
  // PERSONAL DATA
  // ============================================
  const portfolioData = {
    name: "José Vale",
    role: "Developer | Functional Consultant",
    company: "Advir Plan Consultoria",
    location: "Braga, Portugal",
    email: "jpbvale09@gmail.com",
    github: "github.com/josevale",
    linkedin: "www.linkedin.com/in/josé-vale-2a7612236",
    skills: [
      { name: "Cegid Primavera", level: 92 },
      { name: "SQL / Databases", level: 90 },
      { name: "React / JavaScript", level: 85 },
      { name: "C# / .NET", level: 82 },
      { name: "Crystal Reports", level: 88 },
      { name: "WebAPI / REST", level: 85 }
    ],
    stats: {
      years: "2+",
      projects: "20+",
      certifications: "6"
    },
    certifications: [
      "Cybersecurity Essentials",
      "Introduction to IoT",
      "Cegid Primavera - Logistics",
      "Software Design & Project Management",
      "Implementation and Testing",
      "Developer - Cegid Primavera - ERP"
    ],
    realProjects: [
      {
        title: 'Connector',
        period: 'May 2025 - Present',
        periodPt: 'Mai 2025 - Presente',
        description: 'Design and development of a custom connector integrating the E-Schooling billing platform with Cegid Primavera ERP, leveraging API extensibility to enable automated replication of financial documents, including Invoices, Credit Notes, Receipts, Accounts Receivable Movements, Open Balances, and related transactional records. Ensured data integrity, consistency, and compliance across systems while optimizing financial process automation and workflows.',
        tags: ['Cegid Primavera', 'WebAPI', 'C#', 'Integration'],
        type: 'professional'
      },
      {
        title: 'Link.Advir',
        period: 'Jan 2025 - Present',
        periodPt: 'Jan 2025 - Presente',
        description: 'Design and implementation of an enterprise platform based on React.js, Sequelize ORM, and Nginx, featuring bidirectional integration with the Cegid Primavera ERP via the Primavera WebAPI. Development of advanced API extensibility mechanisms, ensuring transactional data synchronization, system interoperability, and business process automation, with primary focus on Human Resources and Construction modules.',
        tags: ['React.js', 'Sequelize', 'WebAPI', 'Nginx'],
        type: 'professional'
      },
      {
        title: 'Ecological Footprint App',
        period: '',
        periodPt: '',
        description: 'Development of ClimateCare, an application to assist users in adopting sustainable practices and promote awareness about climate issues. Features include climate information, sustainable practices tips, ecological footprint calculation, and a community section for user interaction.',
        tags: ['React', 'FastAPI'],
        type: 'academic'
      },
      {
        title: 'Escape From Something',
        period: '',
        periodPt: '',
        description: 'OpenGL application in C++ — a simple puzzle game where the objective is to move a green rectangle to a designated area without touching forbidden (red) areas. Includes game window creation, graphic object rendering, and keyboard/mouse event handling.',
        tags: ['C++', 'OpenGL'],
        type: 'academic'
      },
      {
        title: 'Smart Education Tool',
        period: '',
        periodPt: '',
        description: 'Multiplatform application with a dashboard to visualize existing food waste and encourage users to take steps to reduce it. Uses React Native and Django REST Framework, with scale and camera integration to identify food items most likely to be wasted, including alerts and community features.',
        tags: ['Django REST Framework', 'React Native'],
        type: 'academic'
      },
      {
        title: 'Water Consumption Analysis',
        period: '',
        periodPt: '',
        description: 'Analysis of complex consumption patterns within a comprehensive dataset of monthly water consumption entries from different consumer profiles, compiled by a municipal entity over a decade. Employs advanced Machine Learning techniques for consumer categorization and sustainable resource management insights.',
        tags: ['Machine Learning', 'Data Analysis'],
        type: 'academic'
      }
    ]
  };

  const projectColors = ["#FF6B35", "#4ECDC4", "#7B68EE", "#F7B731"];
  const projectSymbols = ["{ }", "</>", "[ ]", "//"];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleProjects((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const sections = ['home', 'about', 'projects', 'portfolio', 'experience', 'contact'];
  const navLabels = [t.nav.home, t.nav.about, t.nav.projects, t.nav.portfolio, t.nav.experience, t.nav.contact];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => setLang(lang === 'en' ? 'pt' : 'en');
  const toggleTheme = () => setIsDark(!isDark);

  // ============================================
  // STYLES (theme-aware)
  // ============================================
  const styles = {
    container: { fontFamily: "'Space Grotesk', sans-serif", backgroundColor: c.bg, color: c.text, minHeight: '100vh', overflowX: 'hidden', position: 'relative', transition: 'background-color 0.3s ease, color 0.3s ease' },
    cursor: { position: 'fixed', width: '20px', height: '20px', border: '2px solid #FF6B35', borderRadius: '50%', pointerEvents: 'none', zIndex: 9999, transition: 'transform 0.1s ease' },
    cursorTrail: { position: 'fixed', width: '8px', height: '8px', backgroundColor: '#FF6B35', borderRadius: '50%', pointerEvents: 'none', zIndex: 9998, transition: 'transform 0.15s ease' },
    backgroundGradient: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 },
    gradientOrb: { position: 'absolute', top: '-20%', right: '-10%', width: '60vw', height: '60vw', background: c.orb1, borderRadius: '50%', transition: 'transform 0.3s ease' },
    gradientOrb2: { position: 'absolute', bottom: '-30%', left: '-20%', width: '70vw', height: '70vw', background: c.orb2, borderRadius: '50%', transition: 'transform 0.3s ease' },
    nav: { position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', zIndex: 1000, transition: 'all 0.3s ease' },
    logo: { cursor: 'pointer', display: 'flex', alignItems: 'center' },
    logoText: { fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, letterSpacing: '-1px', color: c.text },
    logoDot: { color: '#FF6B35', fontSize: '32px' },
    navControls: { display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto', marginRight: '30px' },
    themeToggle: { background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: `1px solid ${c.border}`, borderRadius: '20px', padding: '8px 14px', cursor: 'pointer', color: c.text, fontSize: '16px', transition: 'all 0.3s ease', lineHeight: 1 },
    langToggle: { background: c.langBg, border: `1px solid ${c.langBorder}`, borderRadius: '20px', padding: '8px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', transition: 'all 0.3s ease' },
    langActive: { color: '#FF6B35', fontWeight: 600, fontSize: '12px' },
    langInactive: { color: c.textMut, fontSize: '12px' },
    langDivider: { color: c.border, fontSize: '12px' },
    navLinks: { display: 'flex', gap: '40px' },
    navLink: { background: 'none', border: 'none', color: c.navLinkColor, fontSize: '14px', fontWeight: 500, cursor: 'pointer', position: 'relative', padding: '8px 0', transition: 'color 0.3s ease', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase', letterSpacing: '1px' },
    navLinkUnderline: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', backgroundColor: '#FF6B35' },
    menuToggle: { flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '10px' },
    menuLine: { width: '25px', height: '2px', backgroundColor: c.menuLineBg, transition: 'all 0.3s ease' },
    mobileMenu: { position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: c.mobileBg, padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', backdropFilter: 'blur(20px)' },
    mobileNavLink: { background: 'none', border: 'none', color: c.text, fontSize: '18px', padding: '15px 20px', textAlign: 'left', cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", animation: 'slideIn 0.3s ease forwards' },
    hero: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '120px 5% 80px', position: 'relative', zIndex: 1, flexWrap: 'wrap', gap: '40px' },
    heroContent: { flex: '1 1 500px', maxWidth: '650px' },
    heroTagline: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' },
    heroLine: { width: '40px', height: '2px', backgroundColor: '#FF6B35' },
    heroTaglineText: { fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: c.textMut },
    heroTitle: { marginBottom: '15px' },
    heroTitleLine: { display: 'block', fontSize: 'clamp(18px, 3vw, 24px)', color: c.textMut, marginBottom: '10px', fontWeight: 400 },
    heroName: { display: 'block', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 700, lineHeight: 1.1 },
    heroRole: { display: 'flex', alignItems: 'center', gap: '12px', fontSize: '20px', color: '#4ECDC4', marginBottom: '8px' },
    roleIcon: { fontSize: '10px' },
    heroCompany: { fontSize: '14px', color: c.textFaint, marginBottom: '25px', letterSpacing: '1px' },
    heroDescription: { fontSize: '18px', lineHeight: 1.7, color: c.textSec, marginBottom: '40px', maxWidth: '500px' },
    heroCTA: { display: 'flex', gap: '20px', marginBottom: '50px', flexWrap: 'wrap' },
    primaryButton: { display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 32px', backgroundColor: '#FF6B35', border: 'none', borderRadius: '50px', color: '#fff', fontSize: '16px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: "'Space Grotesk', sans-serif" },
    secondaryButton: { padding: '16px 32px', backgroundColor: 'transparent', border: `2px solid ${c.border}`, borderRadius: '50px', color: c.text, fontSize: '16px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: "'Space Grotesk', sans-serif" },
    buttonArrow: { transition: 'transform 0.3s ease' },
    heroStats: { display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' },
    stat: { textAlign: 'center' },
    statNumber: { display: 'block', fontSize: '36px', fontWeight: 700, color: '#FF6B35', fontFamily: "'Playfair Display', serif" },
    statLabel: { fontSize: '12px', color: c.textFaint, textTransform: 'uppercase', letterSpacing: '1px' },
    statDivider: { width: '1px', height: '40px', backgroundColor: c.dividerBg },
    heroVisual: { flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: '400px' },
    heroShape: { width: '300px', height: '300px', borderRadius: '50%', background: c.shapeBg, display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${c.border}`, position: 'relative' },
    heroShapeInner: { width: '200px', height: '200px', borderRadius: '50%', background: c.shapeInner, display: 'flex', justifyContent: 'center', alignItems: 'center' },
    heroInitials: { fontFamily: "'Playfair Display', serif", fontSize: '72px', fontWeight: 700, color: '#FF6B35', letterSpacing: '-6px', userSelect: 'none' },
    floatingElement: { position: 'absolute', fontFamily: 'monospace', fontWeight: 800, opacity: 0.65 },
    scrollIndicator: { position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' },
    scrollText: { fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: c.textFaintest },
    scrollLine: { width: '1px', height: '40px', backgroundColor: c.scrollLineBg, position: 'relative', overflow: 'hidden' },
    scrollDot: { width: '3px', height: '8px', backgroundColor: '#FF6B35', position: 'absolute', left: '-1px', borderRadius: '2px' },
    section: { padding: '100px 5%', position: 'relative', zIndex: 1 },
    sectionHeader: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px', flexWrap: 'wrap' },
    sectionNumber: { fontSize: '14px', color: '#FF6B35', fontWeight: 600 },
    sectionTitle: { fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: c.text },
    sectionLine: { flex: 1, height: '1px', backgroundColor: c.secLineBg, minWidth: '50px' },
    aboutContent: { display: 'flex', gap: '60px', flexWrap: 'wrap' },
    aboutText: { flex: '1 1 400px' },
    aboutParagraph: { fontSize: '17px', lineHeight: 1.8, color: c.textSec, marginBottom: '50px' },
    skillsGrid: { display: 'flex', flexDirection: 'column', gap: '25px' },
    skillItem: { maxWidth: '400px' },
    skillHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' },
    skillName: { fontSize: '14px', fontWeight: 500, color: c.text },
    skillLevel: { fontSize: '14px', color: '#FF6B35' },
    skillBar: { height: '4px', backgroundColor: c.skillBarBg, borderRadius: '2px', overflow: 'hidden' },
    skillProgress: { height: '100%', background: 'linear-gradient(90deg, #FF6B35, #4ECDC4)', borderRadius: '2px' },
    aboutVisual: { flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '30px' },
    codeBlock: { backgroundColor: c.cardBg, borderRadius: '12px', border: `1px solid ${c.border}`, overflow: 'hidden', width: '100%', maxWidth: '420px' },
    codeHeader: { display: 'flex', gap: '8px', padding: '15px 20px', backgroundColor: c.codeHdrBg, alignItems: 'center' },
    codeDot: { width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF6B35' },
    codeFileName: { marginLeft: 'auto', fontSize: '12px', color: c.textFaintest },
    codeContent: { padding: '20px', fontSize: '13px', lineHeight: 1.8, color: c.codeColor, fontFamily: 'monospace', overflow: 'auto' },
    certifications: { backgroundColor: c.cardBg, borderRadius: '12px', border: `1px solid ${c.border}`, padding: '25px', maxWidth: '420px' },
    certTitle: { fontSize: '16px', marginBottom: '20px', color: c.text },
    certItem: { display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: `1px solid ${c.borderL}`, fontSize: '13px', color: c.textMut },
    certCheck: { color: '#4ECDC4', fontWeight: 'bold' },
    projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
    projectCard: { backgroundColor: c.cardBg, borderRadius: '20px', overflow: 'hidden', border: `1px solid ${c.borderL}`, transition: 'all 0.6s ease' },
    projectImage: { height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' },
    projectSymbol: { fontFamily: 'monospace', fontWeight: 800, fontSize: '32px', zIndex: 1, letterSpacing: '-1px' },
    projectOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', opacity: 0.8 },
    projectContent: { padding: '25px' },
    projectTitle: { fontSize: '20px', fontWeight: 600, marginBottom: '12px', fontFamily: "'Playfair Display', serif", color: c.text },
    projectDescription: { fontSize: '14px', lineHeight: 1.7, color: c.textMut, marginBottom: '20px' },
    projectTags: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
    projectTag: { padding: '6px 12px', borderRadius: '20px', border: '1px solid', fontSize: '11px', fontWeight: 500 },
    timeline: { position: 'relative', maxWidth: '800px', margin: '0 auto', paddingLeft: '40px' },
    timelineLine: { position: 'absolute', left: '10px', top: '10px', bottom: '10px', width: '2px', backgroundColor: c.tlLineBg },
    timelineItem: { position: 'relative', paddingBottom: '40px' },
    timelineDot: { position: 'absolute', left: '-34px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF6B35', border: `3px solid ${c.dotBorder}`, zIndex: 1 },
    timelineContent: { backgroundColor: c.cardBg, borderRadius: '16px', padding: '25px', border: `1px solid ${c.borderL}` },
    timelineHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '10px' },
    timelineRole: { fontSize: '18px', fontWeight: 600, fontFamily: "'Playfair Display', serif", color: c.text },
    timelinePeriod: { fontSize: '11px', color: '#FF6B35', backgroundColor: '#FF6B3520', padding: '6px 14px', borderRadius: '20px', fontWeight: 500 },
    timelineCompany: { fontSize: '15px', color: '#4ECDC4', marginBottom: '12px', fontWeight: 500 },
    timelineDescription: { fontSize: '13px', lineHeight: 1.7, color: c.textMut },
    educationSection: { marginTop: '80px', maxWidth: '800px', margin: '80px auto 0' },
    educationTitle: { fontSize: '24px', marginBottom: '30px', fontFamily: "'Playfair Display', serif", color: c.text },
    educationGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' },
    educationCard: { backgroundColor: c.cardBg, borderRadius: '16px', padding: '25px', border: `1px solid ${c.borderL}` },
    eduDegree: { fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: c.text },
    eduSchool: { fontSize: '14px', color: '#4ECDC4', marginBottom: '8px' },
    eduYear: { fontSize: '12px', color: c.textFaint },
    contactSection: { padding: '100px 5%', position: 'relative', zIndex: 1, textAlign: 'center' },
    contactContent: { maxWidth: '600px', margin: '0 auto' },
    contactText: { fontSize: '18px', lineHeight: 1.8, color: c.textSec, marginBottom: '50px' },
    contactLinks: { display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '50px' },
    contactLink: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', padding: '20px', backgroundColor: c.cardBg, borderRadius: '12px', border: `1px solid ${c.borderL}`, color: c.text, textDecoration: 'none', fontSize: '16px', transition: 'all 0.3s ease' },
    contactIconEmail: { fontSize: '20px', lineHeight: 1 },
    contactIconLinkedin: { width: '22px', height: '22px', borderRadius: '4px', backgroundColor: '#0077b5', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, fontFamily: 'sans-serif', flexShrink: 0 },
    contactButton: { alignItems: 'center', gap: '10px', padding: '18px 40px', backgroundColor: '#FF6B35', border: 'none', borderRadius: '50px', color: '#fff', fontSize: '16px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: "'Space Grotesk', sans-serif" },
    footer: { padding: '40px 5%', borderTop: `1px solid ${c.borderL}`, position: 'relative', zIndex: 1 },
    footerContent: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' },
    footerLogo: { fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: c.text },
    footerText: { fontSize: '14px', color: c.textFaint },
    filterTabs: { display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' },
    filterTab: { padding: '10px 24px', borderRadius: '50px', border: `1px solid ${c.border}`, background: 'transparent', color: c.textMut, fontSize: '13px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.25s ease', fontFamily: "'Space Grotesk', sans-serif" },
    filterTabActive: { backgroundColor: '#FF6B35', borderColor: '#FF6B35', color: '#ffffff', fontWeight: 600 },
    realProjectsList: { display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' },
    realProjectCard: { backgroundColor: c.cardBg, borderRadius: '16px', padding: '28px', border: `1px solid ${c.borderL}`, transition: 'border-color 0.3s ease' },
    realProjectHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' },
    realProjectMeta: { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' },
    realProjectTitle: { fontSize: '18px', fontWeight: 600, fontFamily: "'Playfair Display', serif", color: c.text },
    realProjectTypeBadge: { fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' },
    realProjectPeriod: { fontSize: '12px', color: '#FF6B35', backgroundColor: '#FF6B3520', padding: '5px 14px', borderRadius: '20px', fontWeight: 500, whiteSpace: 'nowrap' },
    realProjectDescription: { fontSize: '14px', lineHeight: 1.75, color: c.textMut, marginBottom: '18px' },
  };

  const globalStyles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Space Grotesk', sans-serif; background-color: ${c.bg}; transition: background-color 0.3s ease; }
    @media (min-width: 769px) { body { cursor: none; } }
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
    @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes progressFill { from { width: 0; } to { width: var(--skill-width); } }
    @keyframes scrollDot { 0% { top: 0; opacity: 1; } 100% { top: 20px; opacity: 0; } }
    .floating-element { animation: float 4s ease-in-out infinite; }
    .skill-progress { animation: progressFill 1s ease forwards; }
    .scroll-dot { animation: scrollDot 1.5s ease-in-out infinite; }
    .hero-name {
      background: ${c.nameGrad};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;

  return (
    <div style={styles.container}>
      <style>{globalStyles}</style>

      {!isMobile && (
        <>
          <div style={{...styles.cursor, left: mousePosition.x - 10, top: mousePosition.y - 10}} />
          <div style={{...styles.cursorTrail, left: mousePosition.x - 4, top: mousePosition.y - 4}} />
        </>
      )}

      <div style={styles.backgroundGradient}>
        <div style={{...styles.gradientOrb, transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`}} />
        <div style={{...styles.gradientOrb2, transform: isMobile ? 'none' : `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`}} />
      </div>

      <nav style={{...styles.nav, backgroundColor: scrollY > 50 ? c.navBg : 'transparent', backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none'}}>
        <div style={styles.logo} onClick={() => scrollToSection('home')}>
          <span style={styles.logoText}>{portfolioData.name.split(' ')[1]}</span>
          <span style={styles.logoDot}>.</span>
        </div>

        <div style={styles.navControls}>
          <button onClick={toggleTheme} style={styles.themeToggle} title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {c.themeIcon}
          </button>
          <button onClick={toggleLanguage} style={styles.langToggle} title={lang === 'en' ? 'Mudar para Português' : 'Switch to English'}>
            <span style={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
            <span style={styles.langDivider}>/</span>
            <span style={lang === 'pt' ? styles.langActive : styles.langInactive}>PT</span>
          </button>
        </div>

        <div style={{...styles.navLinks, display: isMobile ? 'none' : 'flex'}}>
          {sections.map((section, index) => (
            <button key={section} onClick={() => scrollToSection(section)} style={{...styles.navLink, color: activeSection === section ? '#FF6B35' : c.navLinkColor}}>
              {navLabels[index]}
              {activeSection === section && <span style={styles.navLinkUnderline} />}
            </button>
          ))}
        </div>

        <button style={{...styles.menuToggle, display: isMobile ? 'flex' : 'none'}} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span style={{...styles.menuLine, transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}} />
          <span style={{...styles.menuLine, opacity: isMenuOpen ? 0 : 1}} />
          <span style={{...styles.menuLine, transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'}} />
        </button>

        {isMenuOpen && (
          <div style={styles.mobileMenu}>
            {sections.map((section, index) => (
              <button key={section} onClick={() => scrollToSection(section)} style={{...styles.mobileNavLink, animationDelay: `${index * 0.1}s`}}>
                {navLabels[index]}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroTagline}>
            <span style={styles.heroLine} />
            <span style={styles.heroTaglineText}>{t.hero.portfolio}</span>
          </div>

          <h1 style={styles.heroTitle}>
            <span style={styles.heroTitleLine}>{t.hero.greeting}</span>
            <span className="hero-name" style={styles.heroName}>{portfolioData.name}</span>
          </h1>

          <div style={styles.heroRole}>
            <span style={styles.roleIcon}>◆</span>
            <span>{portfolioData.role}</span>
          </div>

          <div style={styles.heroCompany}>@ {portfolioData.company} • {portfolioData.location}</div>

          <p style={styles.heroDescription}>{t.hero.tagline}</p>

          <div style={styles.heroCTA}>
            <button style={styles.primaryButton} onClick={() => scrollToSection('projects')}>
              <span>{t.hero.viewProjects}</span>
              <span style={styles.buttonArrow}>→</span>
            </button>
            <button style={styles.secondaryButton} onClick={() => scrollToSection('contact')}>
              {t.hero.contact}
            </button>
          </div>

          <div style={styles.heroStats}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>{portfolioData.stats.years}</span>
              <span style={styles.statLabel}>{t.hero.yearsExp}</span>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.stat}>
              <span style={styles.statNumber}>{portfolioData.stats.projects}</span>
              <span style={styles.statLabel}>{t.hero.projects}</span>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.stat}>
              <span style={styles.statNumber}>{portfolioData.stats.certifications}</span>
              <span style={styles.statLabel}>{t.hero.certifications}</span>
            </div>
          </div>
        </div>

        <div style={styles.heroVisual}>
          <div style={styles.heroShape}>
            <div style={styles.heroShapeInner}>
              <span style={styles.heroInitials}>JV</span>
            </div>
          </div>
          <div className="floating-element" style={{...styles.floatingElement, top: '10%', right: '20%', fontSize: '26px', color: '#FF6B35'}}>{'{ }'}</div>
          <div className="floating-element" style={{...styles.floatingElement, bottom: '20%', left: '10%', animationDelay: '1s', fontSize: '22px', color: '#4ECDC4'}}>{'</>'}</div>
          <div className="floating-element" style={{...styles.floatingElement, top: '40%', left: '5%', animationDelay: '0.5s', fontSize: '20px', color: '#7B68EE'}}>{'[ ]'}</div>
        </div>

        <div style={styles.scrollIndicator}>
          <span style={styles.scrollText}>Scroll</span>
          <div style={styles.scrollLine}><div className="scroll-dot" style={styles.scrollDot} /></div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>01</span>
          <h2 style={styles.sectionTitle}>{t.about.title}</h2>
          <div style={styles.sectionLine} />
        </div>

        <div style={styles.aboutContent}>
          <div style={styles.aboutText}>
            <p style={styles.aboutParagraph}>{t.about.description}</p>

            <div style={styles.skillsGrid}>
              {portfolioData.skills.map((skill, index) => (
                <div key={skill.name} style={styles.skillItem}>
                  <div style={styles.skillHeader}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div style={styles.skillBar}>
                    <div className="skill-progress" style={{...styles.skillProgress, '--skill-width': `${skill.level}%`, animationDelay: `${index * 0.1}s`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.aboutVisual}>
            <div style={styles.codeBlock}>
              <div style={styles.codeHeader}>
                <span style={styles.codeDot} />
                <span style={{...styles.codeDot, backgroundColor: '#F7B731'}} />
                <span style={{...styles.codeDot, backgroundColor: '#4ECDC4'}} />
                <span style={styles.codeFileName}>developer.js</span>
              </div>
              <pre style={styles.codeContent}>
{`const developer = {
  name: "${portfolioData.name}",
  role: "ERP Developer",
  company: "Advir Plan",
  stack: [
    "Primavera", "SQL",
    "React", "C#"
  ],
  education: "MSc CompSci",
  coffee: "☕☕☕"
};`}
              </pre>
            </div>

            <div style={styles.certifications}>
              <h4 style={styles.certTitle}>— {lang === 'en' ? 'Certifications' : 'Certificações'}</h4>
              {portfolioData.certifications.map((cert, i) => (
                <div key={i} style={styles.certItem}>
                  <span style={styles.certCheck}>✓</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>02</span>
          <h2 style={styles.sectionTitle}>{t.projects.title}</h2>
          <div style={styles.sectionLine} />
        </div>

        <div style={styles.projectsGrid}>
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              data-id={index + 1}
              style={{
                ...styles.projectCard,
                opacity: visibleProjects.includes(index + 1) ? 1 : 0,
                transform: visibleProjects.includes(index + 1) ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div style={{...styles.projectImage, background: `linear-gradient(135deg, ${projectColors[index]}22, ${projectColors[index]}44)`}}>
                <span style={{...styles.projectSymbol, color: projectColors[index]}}>{projectSymbols[index]}</span>
                <div style={{...styles.projectOverlay, background: `linear-gradient(to top, ${projectColors[index]}ee, transparent)`}} />
              </div>

              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{...styles.projectTag, borderColor: projectColors[index], color: projectColors[index]}}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>03</span>
          <h2 style={styles.sectionTitle}>{t.realProjects.title}</h2>
          <div style={styles.sectionLine} />
        </div>

        <div style={styles.filterTabs}>
          {['all', 'professional', 'academic'].map(f => (
            <button
              key={f}
              onClick={() => setProjectFilter(f)}
              style={{...styles.filterTab, ...(projectFilter === f ? styles.filterTabActive : {})}}
            >
              {t.realProjects.filters[f]}
            </button>
          ))}
        </div>

        <div style={styles.realProjectsList}>
          {portfolioData.realProjects
            .filter(p => projectFilter === 'all' || p.type === projectFilter)
            .map((project, index) => {
              const isPro = project.type === 'professional';
              const accentColor = isPro ? '#FF6B35' : '#4ECDC4';
              return (
                <div key={index} style={styles.realProjectCard}>
                  <div style={styles.realProjectHeader}>
                    <div style={styles.realProjectMeta}>
                      <h3 style={styles.realProjectTitle}>{project.title}</h3>
                      <span style={{...styles.realProjectTypeBadge, backgroundColor: `${accentColor}20`, color: accentColor}}>
                        {isPro ? t.realProjects.filters.professional : t.realProjects.filters.academic}
                      </span>
                    </div>
                    {project.period && (
                      <span style={styles.realProjectPeriod}>
                        {lang === 'en' ? project.period : project.periodPt}
                      </span>
                    )}
                  </div>
                  <p style={styles.realProjectDescription}>{project.description}</p>
                  <div style={styles.projectTags}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{...styles.projectTag, borderColor: accentColor, color: accentColor}}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <section id="experience" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>04</span>
          <h2 style={styles.sectionTitle}>{t.experience.title}</h2>
          <div style={styles.sectionLine} />
        </div>

        <div style={styles.timeline}>
          {t.experience.items.map((exp, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.timelineContent}>
                <div style={styles.timelineHeader}>
                  <h3 style={styles.timelineRole}>{exp.role}</h3>
                  <span style={styles.timelinePeriod}>{exp.period}</span>
                </div>
                <h4 style={styles.timelineCompany}>{exp.company}</h4>
                <p style={styles.timelineDescription}>{exp.description}</p>
              </div>
            </div>
          ))}
          <div style={styles.timelineLine} />
        </div>

        <div style={styles.educationSection}>
          <h3 style={styles.educationTitle}>{t.education.title}</h3>
          <div style={styles.educationGrid}>
            {t.education.items.map((edu, index) => (
              <div key={index} style={styles.educationCard}>
                <div style={styles.eduDegree}>{edu.degree}</div>
                <div style={styles.eduSchool}>{edu.school}</div>
                <div style={styles.eduYear}>{edu.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>05</span>
          <h2 style={styles.sectionTitle}>{t.contact.title}</h2>
          <div style={styles.sectionLine} />
        </div>

        <div style={styles.contactContent}>
          <p style={styles.contactText}>{t.contact.description}</p>

          <div style={styles.contactLinks}>
            <a href={`mailto:${portfolioData.email}`} style={styles.contactLink}>
              <span style={styles.contactIconEmail}>✉</span>
              <span>{portfolioData.email}</span>
            </a>
            <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
              <span style={styles.contactIconLinkedin}>in</span>
              <span>LinkedIn</span>
            </a>
          </div>

          <a href={`mailto:${portfolioData.email}`} style={{...styles.contactButton, textDecoration: 'none', display: 'inline-flex'}}>
            <span>{t.contact.sendEmail}</span>
            <span style={styles.buttonArrow}>→</span>
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <span style={styles.footerLogo}>{portfolioData.name.split(' ')[1]}<span style={styles.logoDot}>.</span></span>
          <span style={styles.footerText}>© 2026 — {t.footer.made}</span>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
