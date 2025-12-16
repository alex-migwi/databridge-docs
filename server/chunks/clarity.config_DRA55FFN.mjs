/**
 * DataBridge Documentation Configuration
 */

const clarityConfig = {
  // Site metadata (uses env vars from .env file)
  site: {
    name: process.env.PUBLIC_SITE_NAME || "DataBridge",
    description: process.env.PUBLIC_SITE_DESCRIPTION || "Free developer toolkit for auto-genearating type-safe APIs and SDKs from your database schema",
    url: process.env.PUBLIC_SITE_URL || "https://alex-migwi.github.io/databridge-docs",
    logo: process.env.PUBLIC_SITE_URL ? `${process.env.PUBLIC_SITE_URL}/logo.svg` : "/databridge-docs/logo.svg",
  },

  // Navigation
  navigation: {
    showLogin: false},

  // GitHub integration
  github: {
    enabled: true,
    repo: process.env.CLARITY_GITHUB_REPO || "alex-migwi/databridge",
    branch: process.env.CLARITY_GITHUB_BRANCH || "master",
    docsPath: process.env.CLARITY_DOCS_PATH || "docs/tutorials",
    editLinkText: "Edit this page on GitHub",
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} ${process.env.PUBLIC_SITE_NAME || "DataBridge"}. MIT License.`,
    links: [
      { text: "Documentation", href: process.env.PUBLIC_SITE_URL || "https://alex-migwi.github.io/databridge-docs" },
      { text: "GitHub", href: `https://github.com/${process.env.CLARITY_GITHUB_REPO || "alex-migwi/databridge"}` },
      { text: "Contributing", href: "https://github.com/alex-migwi/databridge/blob/master/CONTRIBUTING.md" },
      { text: "License", href: "https://github.com/alex-migwi/databridge/blob/master/LICENSE" },
    ],
  },

  // Homepage customization
  homepage: {
    hero: {
      tagline: "The free, self-hosted developer toolkit for auto-generating type-safe APIs and SDKs from your database schema — like Firebase DataConnect, but for SQL.",
      buttons: [
        { text: "Quick Start", href: "/docs/getting-started/quick-start", style: "primary" },
        { text: "View on GitHub", href: "github", style: "secondary" },
      ],
    },
    features: {
      enabled: true,
      title: "Why DataBridge?",
      subtitle: "Skip the boilerplate. Stay in sync. Keep control.",
      items: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          title: "Auto-Generated APIs",
          description: "Generate production-ready REST APIs from your Prisma schema. CRUD routes, validation, and error handling included.",
        },
        {
          icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
          title: "Type-Safe SDKs",
          description: "Typescript code/services generated with full TypeScript types. Observable-based, tree-shakeable, and ready to import.",
        },
        {
          icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
          title: "MySQL-First",
          description: "Built specifically for MySQL teams. No vendor lock-in, no Postgres requirement. Use your existing database.",
        },
        {
          icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
          title: "Self-Hosted & Secure",
          description: "Deploy anywhere. Your code, your infrastructure, your control. JWT auth and validation built-in.",
        },
        {
          icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
          title: "Angular-Native",
          description: "First-class Angular support with Observable patterns, RxJS integration, and dependency injection.",
        },
        {
          icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
          title: "Extensible",
          description: "Generated code is your starting point. Add custom routes, middleware, and business logic without limits.",
        },
      ],
    },
    cta: {
      enabled: true,
      title: "Ready to build your API?",
      description: "Get started with DataBridge in 5 minutes. Generate your first API from your MySQL database schema.",
      buttons: [
        { text: "Quick Start Guide", href: "/docs/getting-started/quick-start", style: "primary" },
        { text: "Read the Docs", href: "/docs/introduction", style: "secondary" },
      ],
    },
  },
};

export { clarityConfig as c };
