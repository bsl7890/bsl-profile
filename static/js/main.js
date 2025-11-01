  // =========================================
  //  Configuración de EmailJS
  // =========================================
  emailjs.init({ publicKey: "zbFfRrSnVFatUy3g-" });

    // Textos para los dos idiomas
    const texts = {
      es: {
        'nav.about': 'Sobre mí',
        'nav.skills': 'Habilidades',
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'home.title': 'Hola, soy Benjamín Santander',
        'home.subtitle': 'Desarrollador Full Stack • Nivel Intermedio',
        'home.contact': 'Contactar',
        'about.title': 'Sobre mí',
        'about.lead': 'Soy un joven programador con formación técnica en desarrollo de software, orientado al análisis, diseño y construcción de sistemas. Me destaco por mi capacidad para aprender de forma autónoma, resolver problemas con lógica y adaptarme a distintos entornos tecnológicos.',
        'about.profile': 'Perfil Profesional',
        'about.age': 'Edad: 18 años | Nacionalidad: Chileno | Especialización: Programación e Informática',
        'about.summary': 'Resumen Profesional',
        'about.summaryText': 'Tengo experiencia en el desarrollo <strong>full stack</strong>, abarcando desde la creación de interfaces web hasta la gestión de bases de datos relacionales. Mi enfoque principal está en la <strong>programación en Python</strong>, el <strong>diseño de bases de datos SQL</strong> y el <strong>desarrollo de aplicaciones funcionales</strong>, siempre manteniendo buenas prácticas de codificación, documentación y trabajo colaborativo.',
        'about.objective': 'Objetivo Profesional',
        'about.objectiveText': 'Seguir perfeccionando mis conocimientos en <strong>informática y desarrollo de software</strong>, especialmente en el área de <strong>backend y bases de datos</strong>, y posteriormente integrar <strong>inteligencia artificial</strong> a mis proyectos. Busco aportar soluciones funcionales, seguras y eficientes que combinen técnica, diseño y creatividad.',
        'skills.title': 'Habilidades Técnicas',
        'skills.subtitle': 'Nivel intermedio en todas las tecnologías',
        'skills.languages': 'Lenguajes de Programación',
        'skills.databases': 'Bases de Datos',
        'skills.frameworks': 'Frameworks & Bibliotecas',
        'skills.tools': 'Herramientas',
        'skills.concepts': 'Conceptos',
        'skills.personal': 'Competencias Personales',
        'level.intermediate': 'Intermedio',
        'experience.title': 'Experiencia Profesional',
        'experience.subtitle': 'Proyectos y experiencias destacadas',
        'experience.item1.title': 'Desarrollador Full-Stack - Proyecto BADMA',
        'experience.item1.date': '2024 - Presente',
        'experience.item1.description': 'Sistema de gestión inmobiliaria donde fui desarrollador full stack y líder de equipo. Desarrollo con Python y SQLite, integración de CRUD y reportes.',
        'experience.item2.title': 'Investigador - Green Horizon',
        'experience.item2.date': '2023 - 2024',
        'experience.item2.description': 'Investigación escolar sobre hábitos alimenticios en escolares (ODS 12). Recolección y análisis de datos con enfoque en producción y consumo responsable.',
        'experience.item3.title': 'Desarrollador Web - Sistema de Ventas',
        'experience.item3.date': '2023',
        'experience.item3.description': 'Desarrollo de sistema de ventas con Python, MySQL y Tkinter. Implementación de funcionalidades CRUD con validaciones de datos y tablas relacionales.',
        'experience.item4.title': 'Desarrollador - Juego Cachipún',
        'experience.item4.date': '2023',
        'experience.item4.description': 'Juego "Piedra, Papel o Tijera" con GUI (Tkinter) estructurado en modelo, vista y controlador, con futura conexión a base de datos Oracle.',
        'projects.title': 'Proyectos',
        'projects.subtitle': 'Mis proyectos recientes',
        'projects.empty': 'Actualmente no tengo proyectos publicados.',
        'contact.title': 'Contacto',
        'contact.subtitle': 'Envíame un mensaje y estaré encantado de responderte',
        'contact.name': 'Nombre',
        'contact.namePh': 'Ingresa tu nombre',
        'contact.email': 'Email (Gmail)',
        'contact.emailPh': 'tuemail@gmail.com',
        'contact.message': 'Mensaje',
        'contact.messagePh': 'Escribe tu mensaje aquí',
        'contact.send': 'Enviar Mensaje',
        'contact.info': 'Los mensajes se enviarán a mi correo: benjamin.santander.lopez.2016@gmail.com',
        'contact.gmailError': 'Por favor ingresa un correo Gmail válido',
        'contact.success': 'Mensaje enviado. Gracias, {name}! Te responderé pronto.',
        'contact.error': 'Error al enviar el mensaje. Por favor intenta nuevamente.',
        'contact.loading': 'Enviando mensaje...'
      },
      en: {
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'home.title': 'Hello, I\'m Benjamín Santander',
        'home.subtitle': 'Full Stack Developer • Intermediate Level',
        'home.contact': 'Contact',
        'about.title': 'About Me',
        'about.lead': 'I am a young programmer with technical training in software development, oriented towards analysis, design, and system construction. I stand out for my ability to learn autonomously, solve problems logically, and adapt to different technological environments.',
        'about.profile': 'Professional Profile',
        'about.age': 'Age: 18 years | Nationality: Chilean | Specialization: Programming and Informatics',
        'about.summary': 'Professional Summary',
        'about.summaryText': 'I have experience in full stack development, covering everything from creating web interfaces to managing relational databases. My main focus is on <strong>Python programming</strong>, <strong>SQL database design</strong>, and <strong>functional application development</strong>, always maintaining good coding practices, documentation, and collaborative work.',
        'about.objective': 'Professional Objective',
        'about.objectiveText': 'Continue improving my knowledge in <strong>computer science and software development</strong>, especially in the area of <strong>backend and databases</strong>, and later integrate <strong>artificial intelligence</strong> into my projects. I seek to provide functional, secure, and efficient solutions that combine technique, design, and creativity.',
        'skills.title': 'Technical Skills',
        'skills.subtitle': 'Intermediate level in all technologies',
        'skills.languages': 'Programming Languages',
        'skills.databases': 'Databases',
        'skills.frameworks': 'Frameworks & Libraries',
        'skills.tools': 'Tools',
        'skills.concepts': 'Concepts',
        'skills.personal': 'Personal Competencies',
        'level.intermediate': 'Intermediate',
        'experience.title': 'Professional Experience',
        'experience.subtitle': 'Highlighted projects and experiences',
        'experience.item1.title': 'Full-Stack Developer - BADMA Project',
        'experience.item1.date': '2024 - Present',
        'experience.item1.description': 'Real estate management system where I served as full stack developer and team leader. Development with Python and SQLite, CRUD integration, and reporting.',
        'experience.item2.title': 'Researcher - Green Horizon',
        'experience.item2.date': '2023 - 2024',
        'experience.item2.description': 'School research on eating habits among students (SDG 12). Data collection and analysis with a focus on responsible production and consumption.',
        'experience.item3.title': 'Web Developer - Sales System',
        'experience.item3.date': '2023',
        'experience.item3.description': 'Sales system development with Python, MySQL, and Tkinter. Implementation of CRUD functionalities with data validations and relational tables.',
        'experience.item4.title': 'Developer - Rock Paper Scissors Game',
        'experience.item4.date': '2023',
        'experience.item4.description': 'Rock, Paper, Scissors game with GUI (Tkinter) structured in model, view, and controller, with future Oracle database connection.',
        'projects.title': 'Projects',
        'projects.subtitle': 'My recent projects',
        'projects.empty': 'Currently I have no published projects.',
        'contact.title': 'Contact',
        'contact.subtitle': 'Send me a message and I\'ll be happy to reply',
        'contact.name': 'Name',
        'contact.namePh': 'Enter your name',
        'contact.email': 'Email (Gmail)',
        'contact.emailPh': 'youremail@gmail.com',
        'contact.message': 'Message',
        'contact.messagePh': 'Write your message here',
        'contact.send': 'Send Message',
        'contact.info': 'Messages will be sent to my email: benjamin.santander.lopez.2016@gmail.com',
        'contact.gmailError': 'Please enter a valid Gmail address',
        'contact.success': 'Message sent. Thank you, {name}! I will reply soon.',
        'contact.error': 'Error sending message. Please try again.',
        'contact.loading': 'Sending message...'
      }
    };

    // Cambiar idioma
    function changeLanguage(lang) {
      // Actualizar botones de idioma
      document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelector(`.lang-toggle[onclick="changeLanguage('${lang}')"]`).classList.add('active');
      
      // Actualizar textos
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[lang] && texts[lang][key]) {
          el.innerHTML = texts[lang][key];
        }
      });
      
      // Actualizar placeholders
      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (texts[lang] && texts[lang][key]) {
          el.setAttribute('placeholder', texts[lang][key]);
        }
      });
      
      // Guardar preferencia
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
    }

    // Aplicar idioma guardado
    function applySavedLanguage() {
      const savedLang = localStorage.getItem('language') || 'es';
      changeLanguage(savedLang);
    }

  // =========================================
  //  Envío del formulario con EmailJS
  // =========================================
  document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailError = document.getElementById('email-error');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');
    const currentLang = localStorage.getItem('language') || 'es';

    // Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.style.display = 'block';
      feedback.className = 'form-feedback error';
      feedback.textContent = texts[currentLang]['contact.emailError'];
      feedback.style.display = 'block';
      return;
    } else {
      emailError.style.display = 'none';
    }

    // Validar campos vacíos
    if (!name || !email || !message) {
      feedback.className = 'form-feedback error';
      feedback.textContent = currentLang === 'es' 
        ? 'Por favor completa todos los campos.' 
        : 'Please complete all fields.';
      feedback.style.display = 'block';
      return;
    }

    // Mostrar estado de carga
    feedback.className = 'form-feedback loading';
    feedback.innerHTML = `<span class="spinner"></span> ${texts[currentLang]['contact.loading']}`;
    feedback.style.display = 'block';
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span>';

    try {
      // IDs reales de tu cuenta EmailJS
      const serviceID  = 'service_kxjofhq';
      const templateID = 'template_ue0f09k';

      // Variables que coinciden con tu plantilla de EmailJS ({{name}}, {{email}}, {{title}}, {{message}})
      const templateParams = {
        name,
        email,
        title: 'Contacto desde portafolio',
        message,
        reply_to: email
      };

      await emailjs.send(serviceID, templateID, templateParams);

      // Éxito
      feedback.className = 'form-feedback success';
      feedback.textContent = texts[currentLang]['contact.success'].replace('{name}', name);
      document.getElementById('contact-form').reset();

    } catch (error) {
      console.error('EmailJS error:', error);
      feedback.className = 'form-feedback error';
      feedback.textContent = texts[currentLang]['contact.error'];
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = texts[currentLang]['contact.send'];
    }
  });

  // =========================================
  //  Scrollspy (resalta secciones activas)
  // =========================================
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const bottom = top + sec.offsetHeight;
      if (pageYOffset >= top && pageYOffset < bottom) current = sec.getAttribute('id');
    });
    document.querySelectorAll('.navbar .nav-link').forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) link.classList.add('active');
    });
  });

  // =========================================
  //  Inicialización general
  // =========================================
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    applySavedLanguage();
  });