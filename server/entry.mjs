import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Br768K7x.mjs';
import { manifest } from './manifest_D5MMbk2q.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/dashboard.astro.mjs');
const _page2 = () => import('./pages/docs/_---slug_.astro.mjs');
const _page3 = () => import('./pages/login.astro.mjs');
const _page4 = () => import('./pages/sitemap.xml.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.13.4_@types+node@24.3.0_jiti@2.5.1_less@4.4.0_lightningcss@1.30.1_rollup@4.49.0_a33bf4741b2feefc3eddc862a59b0efd/node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/dashboard.astro", _page1],
    ["src/pages/docs/[...slug].astro", _page2],
    ["src/pages/login.astro", _page3],
    ["src/pages/sitemap.xml.ts", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/runner/work/databridge/databridge/clarity/dist/client/",
    "server": "file:///home/runner/work/databridge/databridge/clarity/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
