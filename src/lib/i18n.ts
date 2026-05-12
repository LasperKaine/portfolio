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
    collaboration: 'I\'m looking for junior developer opportunities. Feel free to reach out for collaboration or questions!',
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
    collaboration: 'Etsin junior-kehittäjän paikkoja. Ota rohkeasti yhteyttä yhteistyöstä tai kysymyksistä!',
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
    collaboration: 'Jag söker junioutvecklare möjligheter. Känna dig fri att kontakta mig för samarbete eller frågor!',
    contactMe: 'Kontakta mig',
  },
} as const;

export type Language = 'en' | 'fi' | 'sv';
export type TranslationKey = keyof typeof translations.en;

export function t(key: TranslationKey, lang?: Language): string {
  const language = lang || (typeof localStorage !== 'undefined' ? localStorage.getItem('language') as Language : null) || 'en';
  return translations[language as Language]?.[key] || key;
}

export function getCurrentLanguage(): Language {
  if (typeof localStorage === 'undefined') return 'en';
  return (localStorage.getItem('language') as Language) || 'en';
}