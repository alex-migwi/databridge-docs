import { d as defineMiddleware, s as sequence } from './chunks/index_BkbmjDgY.mjs';
import './chunks/astro-designed-error-pages_I2_xrbuC.mjs';
import 'kleur/colors';
import './chunks/astro/server_C7Z2_luB.mjs';

const BACKEND_URL = "http://localhost:3000";
const sessionCache = /* @__PURE__ */ new Map();
const CACHE_DURATION = 5 * 60 * 1e3;
function isProtectedPath(pathname) {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, "").replace(/^clarity-docs\//, "");
  console.log("[Middleware] Checking path:", pathname, "→ cleaned:", cleanPath);
  const protectedPatterns = [
    /^docs\/guides\/team-docs$/,
    // Specific protected page
    /^docs\/internal\/.*/,
    // All internal docs
    /^docs\/team\/.*/
    // All team docs
  ];
  const isProtected = protectedPatterns.some((pattern) => pattern.test(cleanPath));
  console.log("[Middleware] Is protected:", isProtected);
  return isProtected;
}
async function validateSession(request) {
  try {
    const cookies = request.headers.get("cookie");
    if (!cookies) {
      return { isAuthenticated: false, user: null };
    }
    const cachedSession = sessionCache.get(cookies);
    if (cachedSession && Date.now() - cachedSession.timestamp < CACHE_DURATION) {
      return { isAuthenticated: cachedSession.isAuthenticated, user: cachedSession.user };
    }
    const response = await fetch(`${BACKEND_URL}/auth/user`, {
      headers: {
        "Cookie": cookies
      },
      credentials: "include"
    });
    if (response.ok) {
      const user = await response.json();
      sessionCache.set(cookies, {
        isAuthenticated: true,
        user,
        timestamp: Date.now()
      });
      return { isAuthenticated: true, user };
    } else {
      sessionCache.set(cookies, {
        isAuthenticated: false,
        user: null,
        timestamp: Date.now()
      });
      return { isAuthenticated: false, user: null };
    }
  } catch (error) {
    console.error("Session validation error:", error);
    return { isAuthenticated: false, user: null };
  }
}
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const base = "/databridge-docs";
  if (pathname.startsWith("/_astro/") || pathname.startsWith("/assets/") || pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|json|xml|txt)$/) || pathname.startsWith("/api/")) {
    return next();
  }
  const isProtected = isProtectedPath(pathname);
  if (isProtected) {
    const { isAuthenticated, user } = await validateSession(context.request);
    if (!isAuthenticated) {
      const intendedUrl = context.url.pathname + (context.url.search || "");
      const loginPath = `${base}login`.replace(/\/+/g, "/");
      const redirectUrl = `${loginPath}?redirect=${encodeURIComponent(intendedUrl)}`;
      console.log("[Middleware] Redirecting to:", redirectUrl);
      return context.redirect(redirectUrl, 302);
    }
    context.locals.user = user;
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
