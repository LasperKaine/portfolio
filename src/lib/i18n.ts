export const translations = {
  en: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    viewProjects: 'View Projects',
    resume: 'Resume',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    quickFacts: 'Quick Facts',
    webDeveloper: 'Web Developer',
    helsinki: 'Helsinki, Finland',
    bengStudent: 'BEng Student',
    softwareProduction: 'Software Production, Metropolia',
    itWeb: 'IT & Web',
    background: 'Background',
    languages: 'English / Finnish',
    languagesLabel: 'Languages',
    letsWork: "Let's work together",
    collaboration:
      'I’m looking for junior developer opportunities. Feel free to reach out for collaboration or questions!',
    contactMe: 'Contact Me',
  },

  fi: {
    home: 'Koti',
    projects: 'Projektit',
    about: 'Tietoja',
    contact: 'Ota yhteyttä',
    viewProjects: 'Katso projektit',
    resume: 'Ansioluettelo',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    quickFacts: 'Pika-asiat',
    webDeveloper: 'Verkkokehittäjä',
    helsinki: 'Helsinki, Suomi',
    bengStudent: 'BEng Opiskelija',
    softwareProduction: 'Ohjelmistotuotanto, Metropolia',
    itWeb: 'IT & Verkko',
    background: 'Tausta',
    languages: 'Englanti / Suomi',
    languagesLabel: 'Kielet',
    letsWork: 'Tehdään yhteistyötä',
    collaboration:
      'Etsin junior-kehittäjän paikkoja. Ota rohkeasti yhteyttä yhteistyöstä tai kysymyksistä!',
    contactMe: 'Ota yhteyttä',
  },

  sv: {
    home: 'Hem',
    projects: 'Projekt',
    about: 'Om',
    contact: 'Kontakt',
    viewProjects: 'Visa projekt',
    resume: 'CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    quickFacts: 'Snabba fakta',
    webDeveloper: 'Webbutvecklare',
    helsinki: 'Helsingfors, Finland',
    bengStudent: 'BEng Student',
    softwareProduction: 'Mjukvaruproduktion, Metropolia',
    itWeb: 'IT & Webb',
    background: 'Bakgrund',
    languages: 'Engelska / Finska',
    languagesLabel: 'Språk',
    letsWork: 'Låt oss arbeta tillsammans',
    collaboration:
      'Jag söker juniorutvecklar möjligheter. Kontakta mig gärna för samarbete eller frågor!',
    contactMe: 'Kontakta mig',
  },
};

export function getLang() {
  if (typeof window === 'undefined') return 'en';

  return localStorage.getItem('language') || 'en';
}

export function t(key: string): string {
  const lang = getLang();

  return (
    translations[lang as keyof typeof translations]?.[
      key as keyof typeof translations.en
    ] || key
  );
}

export function applyTranslations() {
  const lang = getLang();

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');

    if (!key) return;

    const translation =
      translations[lang as keyof typeof translations]?.[
        key as keyof typeof translations.en
      ];

    if (translation) {
      element.textContent = translation;
    }
  });
}