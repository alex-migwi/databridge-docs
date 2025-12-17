import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C7Z2_luB.mjs';
import 'kleur/colors';
import { $ as $$DocLayout } from '../chunks/DocLayout_C_mF3WRG.mjs';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const backendUrl = "http://localhost:3000";
  let user = null;
  try {
    const response = await fetch(`${backendUrl}/auth/user`, {
      credentials: "include"
      // Send cookies with the request
    });
    if (response.ok) {
      user = await response.json();
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$DocLayout, { "title": "Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100"> <div class="p-8 bg-white rounded shadow-md w-96"> <h1 class="text-2xl font-bold mb-6 text-center">Dashboard</h1> ${user ? renderTemplate`<div class="text-center"> <p class="mb-2">Welcome, ${user.displayName || user.username}!</p> <p class="text-sm text-gray-600 mb-4">Email: ${user.emails && user.emails[0] ? user.emails[0].value : "N/A"}</p> <a${addAttribute(`${backendUrl}/auth/logout`, "href")} class="inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
Logout
</a> </div>` : renderTemplate`<div class="text-center"> <p class="mb-4">You are not logged in.</p> <a href="/login" class="inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
Go to Login
</a> </div>`} </div> </div> ` })}`;
}, "/home/runner/work/databridge/databridge/clarity/src/pages/dashboard.astro", void 0);
const $$file = "/home/runner/work/databridge/databridge/clarity/src/pages/dashboard.astro";
const $$url = "/databridge-docs/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
