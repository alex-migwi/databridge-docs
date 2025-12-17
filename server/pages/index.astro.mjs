import { c as createComponent, a as renderTemplate, r as renderComponent, b as addAttribute, g as renderHead } from '../chunks/astro/server_C7Z2_luB.mjs';
import 'kleur/colors';
/* empty css                                     */
import { $ as $$Footer, a as $$Header } from '../chunks/Footer_BmRAvYfw.mjs';
import { c as clarityConfig } from '../chunks/clarity.config_DRA55FFN.mjs';
export { renderers } from '../renderers.mjs';

const defaultHomepage = {
  hero: {
    tagline: void 0,
    // Uses site.description by default
    buttons: [
      {
        text: "Get Started",
        href: "/docs/introduction",
        style: "primary"
      },
      {
        text: "View on GitHub",
        href: "github",
        // Special value that links to github.repo
        style: "secondary"
      }
    ]
  },
  features: {
    enabled: true,
    title: "Why {siteName}?",
    subtitle: "Everything you need to create beautiful, searchable, and maintainable documentation",
    items: [
      {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search",
        description: "Instant search with keyboard shortcuts (⌘K) across all your documentation."
      },
      {
        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
        title: "Highly Customizable",
        description: "Single config file controls everything from branding to features."
      },
      {
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
        title: "Dark Mode",
        description: "Beautiful dark theme with system preference detection."
      },
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        title: "Markdown Based",
        description: "Write docs in Markdown with code syntax highlighting and Mermaid diagrams."
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Lightning Fast",
        description: "Static site generation with Astro for optimal performance."
      },
      {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "SEO Optimized",
        description: "Automatic sitemap generation and SEO-friendly meta tags."
      }
    ]
  },
  cta: {
    enabled: true,
    title: "Ready to get started?",
    description: "Create beautiful documentation in minutes with {siteName}",
    buttons: [
      {
        text: "Read the Docs",
        href: "/docs/getting-started/installation",
        style: "primary"
      },
      {
        text: "Quick Start",
        href: "/docs/getting-started/quick-start",
        style: "secondary"
      }
    ]
  }
};
function replacePlaceholders(text, siteName) {
  return text.replace(/\{siteName\}/g, siteName);
}
function mergeHomepageConfig(userConfig, siteName) {
  const merged = {
    hero: {
      ...defaultHomepage.hero,
      ...userConfig?.hero
    },
    features: {
      ...defaultHomepage.features,
      ...userConfig?.features
    },
    cta: {
      ...defaultHomepage.cta,
      ...userConfig?.cta
    }
  };
  if (merged.features.title) {
    merged.features.title = replacePlaceholders(merged.features.title, siteName);
  }
  if (merged.features.subtitle) {
    merged.features.subtitle = replacePlaceholders(merged.features.subtitle, siteName);
  }
  if (merged.cta.description) {
    merged.cta.description = replacePlaceholders(merged.cta.description, siteName);
  }
  return merged;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const base = "/databridge-docs";
  const homepage = mergeHomepageConfig(clarityConfig.homepage, clarityConfig.site.name);
  const resolveHref = (href) => {
    if (href === "github" && clarityConfig.github.enabled) {
      return `https://github.com/${clarityConfig.github.repo}`;
    }
    return href.startsWith("/") ? `${base}${href.slice(1)}` : href;
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>', " - ", '</title><meta name="description"', '><link rel="icon" type="image/svg+xml"', '><script>\n      // Theme initialization - must run before page renders\n      (function() {\n        const getThemePreference = () => {\n          if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n            return localStorage.getItem("theme");\n          }\n          return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";\n        };\n        const theme = getThemePreference();\n        if (theme === "dark") {\n          document.documentElement.classList.add("dark");\n        } else {\n          document.documentElement.classList.remove("dark");\n        }\n      })();\n    </script>', '</head> <body class="bg-background text-foreground"> ', ' <main class="pt-16"> <!-- Hero Section --> <section class="relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"> <div class="text-center"> <div class="flex justify-center mb-8"> <img', "", ' class="h-24 w-24"> </div> <h1 class="text-4xl sm:text-6xl font-bold tracking-tight mb-6"> <span class="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent"> ', ' </span> </h1> <p class="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"> ', ' </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ', " </div> </div> </div> </section> <!-- Features Section --> ", " <!-- CTA Section --> ", " </main> ", " </body></html>"])), clarityConfig.site.name, clarityConfig.site.description, addAttribute(clarityConfig.site.description, "content"), addAttribute(`${base}favicon.svg`, "href"), renderHead(), renderComponent($$result, "Header", $$Header, {}), addAttribute(`${base}logo.svg`, "src"), addAttribute(clarityConfig.site.name, "alt"), clarityConfig.site.name, homepage.hero.tagline || clarityConfig.site.description, homepage.hero.buttons?.map((button) => renderTemplate`<a${addAttribute(resolveHref(button.href), "href")}${addAttribute(`inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-colors ${button.style === "primary" ? "text-primary-foreground bg-primary hover:bg-primary/90" : "text-foreground bg-muted hover:bg-muted/80"}`, "class")}> ${button.text} ${button.style === "primary" && renderTemplate`<svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg>`} ${button.style === "secondary" && button.href === "github" && renderTemplate`<svg class="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg>`} </a>`), homepage.features.enabled && renderTemplate`<section class="py-24 border-t border-border"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl sm:text-4xl font-bold mb-4">${homepage.features.title}</h2> <p class="text-lg text-muted-foreground max-w-2xl mx-auto"> ${homepage.features.subtitle} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${homepage.features.items?.map((feature) => renderTemplate`<div class="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"> <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"> <svg class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(feature.icon, "d")}></path> </svg> </div> <h3 class="text-xl font-semibold mb-2">${feature.title}</h3> <p class="text-muted-foreground">${feature.description}</p> </div>`)} </div> </div> </section>`, homepage.cta.enabled && renderTemplate`<section class="py-24 border-t border-border"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl sm:text-4xl font-bold mb-4">${homepage.cta.title}</h2> <p class="text-lg text-muted-foreground mb-8"> ${homepage.cta.description} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${homepage.cta.buttons?.map((button) => renderTemplate`<a${addAttribute(resolveHref(button.href), "href")}${addAttribute(`inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md transition-colors ${button.style === "primary" ? "text-primary-foreground bg-primary hover:bg-primary/90" : "text-foreground bg-muted hover:bg-muted/80"}`, "class")}> ${button.text} </a>`)} </div> </div> </section>`, renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/runner/work/databridge/databridge/clarity/src/pages/index.astro", void 0);
const $$file = "/home/runner/work/databridge/databridge/clarity/src/pages/index.astro";
const $$url = "/databridge-docs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
