import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, e as renderScript, F as Fragment, f as renderSlot, g as renderHead } from './astro/server_C7Z2_luB.mjs';
import 'kleur/colors';
/* empty css                             */
import { $ as $$Footer, a as $$Header } from './Footer_B7nQPHOE.mjs';
import { g as getCollection } from './_astro_content_vff8xY1x.mjs';
import { c as clarityConfig } from './clarity.config_DRA55FFN.mjs';
/* empty css                             */

const $$Astro$6 = createAstro("https://alex-migwi.github.io/databridge-docs");
const $$SidebarNode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarNode;
  const { node } = Astro2.props;
  const base = "/databridge-docs/";
  const currentPath = Astro2.url.pathname;
  const isActive = node.slug && (currentPath === `${base}docs/${node.slug}` || currentPath === `${base}docs/${node.slug}/`);
  return renderTemplate`${maybeRenderHead()}<li class="mt-1"> ${node.slug ? renderTemplate`<a${addAttribute(`${base}docs/${node.slug}`, "href")}${addAttribute([
    "block py-2 px-3 text-sm rounded-md transition-colors duration-200",
    isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
  ], "class:list")}> ${node.title} </a>` : renderTemplate`<span class="block py-2 px-3 text-sm font-semibold text-foreground mt-4 mb-2"> ${node.title} </span>`} ${node.children && node.children.length > 0 && renderTemplate`<div class="ml-3 border-l border-border pl-3"> <ul class="space-y-1"> ${node.children.map((childNode) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "node": childNode })}`)} </ul> </div>`} </li>`;
}, "/home/runner/work/databridge/databridge/clarity/src/components/SidebarNode.astro", void 0);

const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const docs = await getCollection("docs", ({ data }) => {
    return data.draft !== true ;
  });
  function formatTitle(slug) {
    const overrides = {
      bnpl: "BNPL",
      api: "API",
      ui: "UI",
      ux: "UX"
    };
    const lowerSlug = slug.toLowerCase();
    if (overrides[lowerSlug]) return overrides[lowerSlug];
    return slug.split(/[-_]/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  function buildTree(docs2) {
    const tree = [];
    docs2.forEach((doc) => {
      const pathParts = doc.slug.split("/");
      let currentNode = tree;
      pathParts.forEach((part, index) => {
        let existingNode = currentNode.find(
          (node) => node.slugPart === part
        );
        if (!existingNode) {
          existingNode = {
            title: index === pathParts.length - 1 ? doc.data.title : formatTitle(part),
            slugPart: part,
            children: []
          };
          currentNode.push(existingNode);
        }
        if (index === pathParts.length - 1) {
          existingNode.slug = doc.slug;
          existingNode.title = doc.data.title;
          existingNode.order = doc.data.order ?? 999;
        }
        currentNode = existingNode.children;
      });
    });
    const sortNodes = (nodes) => {
      nodes.sort((a, b) => {
        const orderA = a.order ?? 999;
        const orderB = b.order ?? 999;
        if (orderA !== orderB) return orderA - orderB;
        return a.title.localeCompare(b.title);
      });
      nodes.forEach((node) => {
        if (node.children.length > 0) sortNodes(node.children);
      });
    };
    sortNodes(tree);
    return tree;
  }
  const sidebarTree = buildTree(docs);
  return renderTemplate`${maybeRenderHead()}<nav class="h-full px-4 py-6 overflow-y-auto"> <ul class="space-y-1"> ${sidebarTree.map((node) => renderTemplate`${renderComponent($$result, "SidebarNode", $$SidebarNode, { "node": node })}`)} </ul> </nav>`;
}, "/home/runner/work/databridge/databridge/clarity/src/components/Sidebar.astro", void 0);

const $$Astro$5 = createAstro("https://alex-migwi.github.io/databridge-docs");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="text-sm" id="table-of-contents"> <ul class="space-y-2.5"> ${headings && headings.map((heading) => renderTemplate`<li${addAttribute(`pl-${(heading.depth - 1) * 3} relative`, "class")}> <a${addAttribute(`#${heading.slug}`, "href")} data-toc-link${addAttribute(heading.slug, "data-target")} class="block text-muted-foreground hover:text-primary transition-colors duration-200 line-clamp-2 border-l-2 border-transparent hover:border-primary pl-3 -ml-[2px]"> ${heading.text} </a> </li>`)} </ul> </nav> ${renderScript($$result, "/home/runner/work/databridge/databridge/clarity/src/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/databridge/databridge/clarity/src/components/TableOfContents.astro", void 0);

const $$Astro$4 = createAstro("https://alex-migwi.github.io/databridge-docs");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  const base = "/databridge-docs/";
  return renderTemplate`${maybeRenderHead()}<nav class="flex items-center gap-2 text-sm text-muted-foreground mb-6"> <a${addAttribute(base, "href")} class="hover:text-foreground transition-colors">Home</a> ${items.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="mx-1">/</span> ${index === items.length - 1 ? renderTemplate`<span class="text-foreground font-medium">${item.text}</span>` : renderTemplate`<a${addAttribute(item.href, "href")} class="hover:text-foreground transition-colors"> ${item.text} </a>`}` })}`)} </nav>`;
}, "/home/runner/work/databridge/databridge/clarity/src/components/Breadcrumbs.astro", void 0);

const $$Astro$3 = createAstro("https://alex-migwi.github.io/databridge-docs");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { github} = clarityConfig;
  const { slug } = Astro2.props;
  const editUrl = slug ? `https://github.com/${github.repo}/edit/${github.branch}/${github.docsPath}/${slug}.md` : null;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<div class="mt-8 pt-8 border-t border-border"><a${addAttribute(editUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>${github.editLinkText}</a></div>`}`;
}, "/home/runner/work/databridge/databridge/clarity/src/components/EditLink.astro", void 0);

const $$Astro$2 = createAstro("https://alex-migwi.github.io/databridge-docs");
const $$CopyCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CopyCode;
  return renderTemplate`${renderScript($$result, "/home/runner/work/databridge/databridge/clarity/src/components/CopyCode.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/runner/work/databridge/databridge/clarity/src/components/CopyCode.astro", void 0);

const $$Astro$1 = createAstro("https://alex-migwi.github.io/databridge-docs");
const $$DocMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DocMeta;
  const { lastUpdated, contributors } = Astro2.props;
  const formatDate = (date) => {
    if (!date) return "";
    if (typeof date === "string") return date;
    return date.toISOString().split("T")[0];
  };
  return renderTemplate`${(lastUpdated || contributors && contributors.length > 0) && renderTemplate`${maybeRenderHead()}<div class="mt-8 pt-8 border-t border-border text-sm text-muted-foreground"><div class="flex flex-col sm:flex-row gap-4 justify-between">${lastUpdated && renderTemplate`<div class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Last updated: ${formatDate(lastUpdated)}</span></div>`}${contributors && contributors.length > 0 && renderTemplate`<div class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg><span>Contributors: ${contributors.join(", ")}</span></div>`}</div></div>`}`;
}, "/home/runner/work/databridge/databridge/clarity/src/components/DocMeta.astro", void 0);

const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="mt-12 pt-8 border-t border-border"><div class="flex flex-col items-center gap-4 p-6 bg-muted/30 rounded-lg"><h3 class="text-lg font-semibold text-foreground">Was this page helpful?</h3><div class="flex gap-3" id="feedback-buttons"><button data-feedback="yes" class="px-6 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
Yes
</button><button data-feedback="no" class="px-6 py-2.5 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium flex items-center gap-2"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
No
</button></div><div id="feedback-message" class="hidden text-center"><p class="text-sm text-muted-foreground">Thank you for your feedback!</p></div><div id="feedback-form" class="hidden w-full max-w-md"><textarea id="feedback-text" placeholder="Tell us more (optional)..." class="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary" rows="3"></textarea><div class="flex gap-2 mt-3"><button id="submit-feedback" class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">
Submit
</button><button id="skip-feedback" class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors text-sm font-medium">
Skip
</button></div></div></div></div>`}${renderScript($$result, "/home/runner/work/databridge/databridge/clarity/src/components/Feedback.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/databridge/databridge/clarity/src/components/Feedback.astro", void 0);

const $$Mermaid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/home/runner/work/databridge/databridge/clarity/src/components/Mermaid.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/databridge/databridge/clarity/src/components/Mermaid.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://alex-migwi.github.io/databridge-docs");
const $$DocLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DocLayout;
  const { frontmatter, headings, title, description } = Astro2.props;
  const pageTitle = title || frontmatter?.title || "Clarity";
  const pageDescription = description || frontmatter?.description || "";
  const base = "/databridge-docs/";
  const fullPath = Astro2.url.pathname;
  const slug = fullPath.includes("/docs/") ? fullPath.split("/docs/")[1].replace(/\/$/, "") : fullPath.replace(base, "").replace(/^docs\//, "").replace(/\/$/, "");
  const pathParts = slug.split("/").filter(Boolean);
  const breadcrumbItems = pathParts.map((part, index) => {
    const href = `${base}docs/${pathParts.slice(0, index + 1).join("/")}`.replace(/\/+/g, "/");
    const text = part.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return { text, href };
  });
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="description"', '><meta name="author"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:site_name"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><!-- Canonical URL --><link rel="canonical"', "><title>", " - ", '</title><script>\n            // Theme initialization - must run before page renders\n            (function() {\n                const getThemePreference = () => {\n                    if (\n                        typeof localStorage !== "undefined" &&\n                        localStorage.getItem("theme")\n                    ) {\n                        return localStorage.getItem("theme");\n                    }\n                    return window.matchMedia("(prefers-color-scheme: dark)").matches\n                        ? "dark"\n                        : "light";\n                };\n                const theme = getThemePreference();\n                if (theme === "dark") {\n                    document.documentElement.classList.add("dark");\n                } else {\n                    document.documentElement.classList.remove("dark");\n                }\n            })();\n\n            if (typeof localStorage !== "undefined") {\n                const observer = new MutationObserver(() => {\n                    const isDark =\n                        document.documentElement.classList.contains("dark");\n                    localStorage.setItem("theme", isDark ? "dark" : "light");\n                });\n                observer.observe(document.documentElement, {\n                    attributes: true,\n                    attributeFilter: ["class"],\n                });\n            }\n        </script>', '</head> <body class="bg-background text-foreground min-h-screen flex flex-col"> ', ' <div class="flex flex-1 pt-16"> <aside id="sidebar" class="fixed inset-y-0 left-0 z-50 w-64 transform bg-background border-r border-border transition-transform duration-300 ease-in-out -translate-x-full md:translate-x-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto pt-16 md:pt-0"> ', ' </aside> <div id="sidebar-backdrop" class="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden hidden" aria-hidden="true"></div> <main class="flex-1 min-w-0"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-10"> <article class="flex-1 prose dark:prose-invert max-w-4xl prose-headings:scroll-mt-20 prose-a:text-primary hover:prose-a:text-primary/80"> ', ' <div class="not-prose mb-10"> <h1 class="text-3xl font-semibold mb-4 text-foreground"> ', " </h1> ", " </div> ", " ", " ", " ", " ", ' </article> <aside class="hidden xl:block w-64 flex-shrink-0"> <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto"> <h2 class="font-semibold mb-4 text-sm">\nOn this page\n</h2> ', " </div> </aside> </div> ", " </main> </div> ", " ", " </body></html>"])), addAttribute(pageDescription, "content"), addAttribute(clarityConfig.site.name, "content"), addAttribute(Astro2.url, "content"), addAttribute(`${pageTitle} - ${clarityConfig.site.name}`, "content"), addAttribute(pageDescription, "content"), addAttribute(clarityConfig.site.name, "content"), addAttribute(Astro2.url, "content"), addAttribute(`${pageTitle} - ${clarityConfig.site.name}`, "content"), addAttribute(pageDescription, "content"), addAttribute(Astro2.url, "href"), pageTitle, clarityConfig.site.name, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Sidebar", $$Sidebar, {}), breadcrumbItems.length > 0 && renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })}`, pageTitle, pageDescription && renderTemplate`<p class="text-lg text-muted-foreground leading-relaxed"> ${pageDescription} </p>`, renderSlot($$result, $$slots["default"]), renderTemplate`${renderComponent($$result, "CopyCode", $$CopyCode, {})}`, renderTemplate`${renderComponent($$result, "Feedback", $$Feedback, {})}`, renderTemplate`${renderComponent($$result, "DocMeta", $$DocMeta, { "lastUpdated": frontmatter?.lastUpdated, "contributors": frontmatter?.contributors })}`, renderTemplate`${renderComponent($$result, "EditLink", $$EditLink, { "slug": slug })}`, renderComponent($$result, "TableOfContents", $$TableOfContents, { "headings": headings }), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/home/runner/work/databridge/databridge/clarity/src/layouts/DocLayout.astro?astro&type=script&index=0&lang.ts"), renderComponent($$result, "Mermaid", $$Mermaid, {}));
}, "/home/runner/work/databridge/databridge/clarity/src/layouts/DocLayout.astro", void 0);

export { $$DocLayout as $ };
