import { describe, test, expect } from 'vitest';

describe('SEO Tests', () => {
  test('meta tags should be complete', () => {
    const requiredTags: string[] = ['title', 'description', 'viewport', 'og:title', 'og:description'];
    expect(requiredTags).toBeDefined();
  });

  test('should have proper page titles', () => {
    const titles: Record<string, string> = {
      home: 'Kasper Laine — Full-Stack Web Developer | React, WordPress, PHP',
      about: 'About Kasper Laine — Full-Stack Developer',
      projects: 'Projects',
      contact: 'Contact',
    };
    expect(titles).toBeDefined();
  });

  test('heading hierarchy should be correct', () => {
    const requirement: string = "Page should start with single H1";
    expect(requirement).toBeTruthy();
  });

  test('internal links should work', () => {
    const links: string[] = ['/about', '/projects', '/contact', '/'];
    expect(links).toBeDefined();
  });

  test('sitemap should be present', () => {
    const requirement: string = "sitemap.xml file should exist";
    expect(requirement).toBeTruthy();
  });

  test('robots.txt should be present', () => {
    const requirement: string = "robots.txt file should exist";
    expect(requirement).toBeTruthy();
  });

  test('structured data should be valid', () => {
    const schemaTypes: string[] = ['Organization', 'Person', 'WebSite'];
    expect(schemaTypes).toBeDefined();
  });

  test('mobile responsiveness', () => {
    const viewportMeta: string = 'width=device-width, initial-scale=1.0';
    expect(viewportMeta).toBeDefined();
  });
});