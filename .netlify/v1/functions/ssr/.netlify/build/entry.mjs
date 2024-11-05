import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DtsmHLny.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/park.astro.mjs');
const _page3 = () => import('./pages/payment.astro.mjs');
const _page4 = () => import('./pages/rent-terms.astro.mjs');
const _page5 = () => import('./pages/search.astro.mjs');
const _page6 = () => import('./pages/vehicles/_id_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/park.astro", _page2],
    ["src/pages/payment.astro", _page3],
    ["src/pages/rent-terms.astro", _page4],
    ["src/pages/search.astro", _page5],
    ["src/pages/vehicles/[id].astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "435ad85e-f64f-4be5-b33d-5c68c1203fab"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
