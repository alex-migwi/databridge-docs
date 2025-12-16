import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_C7Z2_luB.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_vff8xY1x.mjs';
import { $ as $$DocLayout } from '../../chunks/DocLayout_gExPgdCi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://alex-migwi.github.io/databridge-docs");
const $$PrevNext = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PrevNext;
  const { prev, next } = Astro2.props;
  return renderTemplate`${(prev || next) && renderTemplate`${maybeRenderHead()}<nav class="mt-12 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">${prev && renderTemplate`<a${addAttribute(prev.href, "href")} class="group flex flex-col gap-2 p-4 rounded-lg border border-border hover:border-primary transition-colors"><span class="text-sm text-muted-foreground">Previous</span><span class="font-medium group-hover:text-primary transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>${prev.title}</span></a>`}${!prev && renderTemplate`<div></div>`}${next && renderTemplate`<a${addAttribute(next.href, "href")} class="group flex flex-col gap-2 p-4 rounded-lg border border-border hover:border-primary transition-colors text-right sm:ml-auto"><span class="text-sm text-muted-foreground">Next</span><span class="font-medium group-hover:text-primary transition-colors flex items-center gap-2 justify-end">${next.title}<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></a>`}</nav>`}`;
}, "/home/runner/work/databridge/databridge/clarity/src/components/PrevNext.astro", void 0);

const $$Astro = createAstro("https://alex-migwi.github.io/databridge-docs");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const base = "/databridge-docs/";
  const { slug } = Astro2.params;
  const docEntries = await getCollection("docs", ({ data }) => {
    return data.draft !== true ;
  });
  const sortedEntries = docEntries.sort((a, b) => {
    const orderA = a.data.order ?? 999;
    const orderB = b.data.order ?? 999;
    return orderA - orderB;
  });
  const entry = sortedEntries.find((e) => e.slug === slug);
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const currentIndex = sortedEntries.findIndex((e) => e.slug === slug);
  const prev = currentIndex > 0 ? sortedEntries[currentIndex - 1] : null;
  const next = currentIndex < sortedEntries.length - 1 ? sortedEntries[currentIndex + 1] : null;
  const prevLink = prev ? { title: prev.data.title, href: `${base}docs/${prev.slug}`.replace(/\/+/g, "/") } : void 0;
  const nextLink = next ? { title: next.data.title, href: `${base}docs/${next.slug}`.replace(/\/+/g, "/") } : void 0;
  const { Content, headings } = await entry.render();
  return renderTemplate`${renderComponent($$result, "DocLayout", $$DocLayout, { "frontmatter": entry.data, "headings": headings }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ${renderComponent($$result2, "PrevNext", $$PrevNext, { "prev": prevLink, "next": nextLink })} ` })}`;
}, "/home/runner/work/databridge/databridge/clarity/src/pages/docs/[...slug].astro", void 0);
const $$file = "/home/runner/work/databridge/databridge/clarity/src/pages/docs/[...slug].astro";
const $$url = "/databridge-docs/docs/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
