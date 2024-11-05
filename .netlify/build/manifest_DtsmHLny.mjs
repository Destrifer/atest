import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { j as decodeKey } from './chunks/astro/server_B8UghB88.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/user/Desktop/atest/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CXA26sHz.js"}],"styles":[{"type":"external","src":"/_astro/contact.CQgmWo-R.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-7REQRH.js"}],"styles":[{"type":"external","src":"/_astro/contact.CQgmWo-R.css"},{"type":"inline","content":".cars-grid[data-astro-cid-toeyabum]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.tab-button[data-astro-cid-toeyabum]{padding:10px 20px;color:#fff;background-color:#1e2933;text-decoration:none;border-radius:8px;transition:background-color .6s;text-transform:uppercase;font-weight:bolder;margin-top:5px}.tab-button[data-astro-cid-toeyabum]:hover{background-color:#dc2626;color:#fff;cursor:pointer}.tab-button[data-astro-cid-toeyabum].active{background-color:#dc2626;color:#fff}\n.order-button[data-astro-cid-vnzlvqnm]{padding:10px 20px;color:#fff;background-color:#1e2933;text-decoration:none;border-radius:8px;transition:background-color .6s;text-transform:uppercase;font-weight:700;margin-top:5px;display:inline-block}.order-button[data-astro-cid-vnzlvqnm]:hover{background-color:#dc2626;color:#fff}.car-card[data-astro-cid-zpitblpc]{border:1px solid #ddd;border-radius:8px;display:flex;flex-direction:column;justify-content:space-between}.car-card[data-astro-cid-zpitblpc] img[data-astro-cid-zpitblpc]{width:100%;height:auto;-o-object-fit:cover;object-fit:cover;border-radius:4px}.color-indicator[data-astro-cid-zpitblpc]{width:20px;height:20px;border-radius:50%;border:1px solid #333;display:inline-block;margin-left:4px}.color-indicator[data-astro-cid-zpitblpc][title=Белый]{background-color:#fff;border-color:#ddd}.color-indicator[data-astro-cid-zpitblpc][title=Черный]{background-color:#000}.color-indicator[data-astro-cid-zpitblpc][title=Серебристый]{background-color:silver}.color-indicator[data-astro-cid-zpitblpc][title=ТемноКрасный]{background-color:#8b0000}.color-indicator[data-astro-cid-zpitblpc][title=Серый]{background-color:gray}.color-indicator[data-astro-cid-zpitblpc][title=Желтый]{background-color:#ff0}.color-indicator[data-astro-cid-zpitblpc][title=Синий]{background-color:#00f}.color-indicator[data-astro-cid-zpitblpc][title=Бронзовый]{background-color:#cd7f32}.color-indicator[data-astro-cid-zpitblpc][title=ТемноСерый]{background-color:#2f4f4f}.color-indicator[data-astro-cid-zpitblpc]:not([title]){background-color:#fff;border-color:#ddd}\n"}],"routeData":{"route":"/park","isIndex":false,"type":"page","pattern":"^\\/park\\/?$","segments":[[{"content":"park","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/park.astro","pathname":"/park","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CXA26sHz.js"}],"styles":[{"type":"external","src":"/_astro/contact.CQgmWo-R.css"},{"type":"inline","content":"ul[data-astro-cid-mv2qmi5q]{display:grid;grid-template-columns:1fr;grid-auto-rows:1fr;gap:32px}img[data-astro-cid-mv2qmi5q]{width:210px;background:#fff;padding:20px}.mt-2[data-astro-cid-mv2qmi5q] li[data-astro-cid-mv2qmi5q]{background:#ededed;padding:20px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;align-items:center}@media (min-width: 768px){ul[data-astro-cid-mv2qmi5q]{grid-template-columns:1fr 1fr}}\n"}],"routeData":{"route":"/payment","isIndex":false,"type":"page","pattern":"^\\/payment\\/?$","segments":[[{"content":"payment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/payment.astro","pathname":"/payment","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CXA26sHz.js"}],"styles":[{"type":"external","src":"/_astro/contact.CQgmWo-R.css"}],"routeData":{"route":"/rent-terms","isIndex":false,"type":"page","pattern":"^\\/rent-terms\\/?$","segments":[[{"content":"rent-terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rent-terms.astro","pathname":"/rent-terms","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DLE9A9Fa.js"}],"styles":[{"type":"external","src":"/_astro/contact.CQgmWo-R.css"},{"type":"inline","content":".cars-grid[data-astro-cid-ipsxrsrh]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.tab-button[data-astro-cid-ipsxrsrh]{padding:10px 20px;color:#fff;background-color:#1e2933;text-decoration:none;border-radius:8px;transition:background-color .6s;text-transform:uppercase;font-weight:bolder;margin-top:5px}.tab-button[data-astro-cid-ipsxrsrh]:hover{background-color:#dc2626;color:#fff;cursor:pointer}.tab-button[data-astro-cid-ipsxrsrh].active{background-color:#dc2626;color:#fff}\n.order-button[data-astro-cid-vnzlvqnm]{padding:10px 20px;color:#fff;background-color:#1e2933;text-decoration:none;border-radius:8px;transition:background-color .6s;text-transform:uppercase;font-weight:700;margin-top:5px;display:inline-block}.order-button[data-astro-cid-vnzlvqnm]:hover{background-color:#dc2626;color:#fff}.car-card[data-astro-cid-zpitblpc]{border:1px solid #ddd;border-radius:8px;display:flex;flex-direction:column;justify-content:space-between}.car-card[data-astro-cid-zpitblpc] img[data-astro-cid-zpitblpc]{width:100%;height:auto;-o-object-fit:cover;object-fit:cover;border-radius:4px}.color-indicator[data-astro-cid-zpitblpc]{width:20px;height:20px;border-radius:50%;border:1px solid #333;display:inline-block;margin-left:4px}.color-indicator[data-astro-cid-zpitblpc][title=Белый]{background-color:#fff;border-color:#ddd}.color-indicator[data-astro-cid-zpitblpc][title=Черный]{background-color:#000}.color-indicator[data-astro-cid-zpitblpc][title=Серебристый]{background-color:silver}.color-indicator[data-astro-cid-zpitblpc][title=ТемноКрасный]{background-color:#8b0000}.color-indicator[data-astro-cid-zpitblpc][title=Серый]{background-color:gray}.color-indicator[data-astro-cid-zpitblpc][title=Желтый]{background-color:#ff0}.color-indicator[data-astro-cid-zpitblpc][title=Синий]{background-color:#00f}.color-indicator[data-astro-cid-zpitblpc][title=Бронзовый]{background-color:#cd7f32}.color-indicator[data-astro-cid-zpitblpc][title=ТемноСерый]{background-color:#2f4f4f}.color-indicator[data-astro-cid-zpitblpc]:not([title]){background-color:#fff;border-color:#ddd}\n"}],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZYiRqKE.js"}],"styles":[{"type":"external","src":"/_astro/contact.CQgmWo-R.css"},{"type":"inline","content":".container[data-astro-cid-zvbiugqo],.main-block[data-astro-cid-zvbiugqo]{display:flex}.gbox[data-astro-cid-zvbiugqo]{background:#44bb6e;outline:1px solid white;outline-offset:-20px;padding:40px;color:#fff}.tarifs[data-astro-cid-zvbiugqo]{border-left:1px solid #ddd;border-bottom:1px solid #ddd;width:100%}.tarifs[data-astro-cid-zvbiugqo] td[data-astro-cid-zvbiugqo]{border-top:1px solid #ddd;padding:10px;border-right:1px solid #ddd}.car-card[data-astro-cid-zvbiugqo]{width:100%;min-width:200px}.car-card[data-astro-cid-zvbiugqo] li[data-astro-cid-zvbiugqo]{display:flex;gap:10px;justify-content:space-between;margin-left:25px;margin-top:10px;position:relative;border-bottom:1px solid #ddd}.car-card[data-astro-cid-zvbiugqo] li[data-astro-cid-zvbiugqo]:before{content:\"✔\";position:absolute;left:-25px;top:5px;width:18px;height:18px;display:flex;align-items:center;justify-content:center;background-color:#cfc;border-radius:50%;font-size:.5em}.add[data-astro-cid-zvbiugqo] p[data-astro-cid-zvbiugqo]{display:flex;gap:10px;justify-content:space-between}.embla[data-astro-cid-zvbiugqo]{position:relative;max-width:800px;width:100%;align-self:flex-start}.embla__viewport[data-astro-cid-zvbiugqo]{overflow:hidden;width:100%}.embla__container[data-astro-cid-zvbiugqo]{display:flex}.embla__slide[data-astro-cid-zvbiugqo]{min-width:100%;position:relative}.embla__button[data-astro-cid-zvbiugqo]{position:absolute;top:50%;transform:translateY(-50%);width:3rem;height:3rem;border:none;background-color:#00000080;color:#fff;cursor:pointer;border-radius:50%;display:flex;align-items:center;justify-content:center}.embla__button--prev[data-astro-cid-zvbiugqo]{left:1rem}.embla__button--next[data-astro-cid-zvbiugqo]{right:1rem}\n"}],"routeData":{"route":"/vehicles/[id]","isIndex":false,"type":"page","pattern":"^\\/vehicles\\/([^/]+?)\\/?$","segments":[[{"content":"vehicles","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/vehicles/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.rYWhky9u.js"}],"styles":[{"type":"external","src":"/_astro/contact.CQgmWo-R.css"},{"type":"external","src":"/_astro/index.DNc5Sks_.css"},{"type":"inline","content":".order-button[data-astro-cid-vnzlvqnm]{padding:10px 20px;color:#fff;background-color:#1e2933;text-decoration:none;border-radius:8px;transition:background-color .6s;text-transform:uppercase;font-weight:700;margin-top:5px;display:inline-block}.order-button[data-astro-cid-vnzlvqnm]:hover{background-color:#dc2626;color:#fff}.car-card[data-astro-cid-zpitblpc]{border:1px solid #ddd;border-radius:8px;display:flex;flex-direction:column;justify-content:space-between}.car-card[data-astro-cid-zpitblpc] img[data-astro-cid-zpitblpc]{width:100%;height:auto;-o-object-fit:cover;object-fit:cover;border-radius:4px}.color-indicator[data-astro-cid-zpitblpc]{width:20px;height:20px;border-radius:50%;border:1px solid #333;display:inline-block;margin-left:4px}.color-indicator[data-astro-cid-zpitblpc][title=Белый]{background-color:#fff;border-color:#ddd}.color-indicator[data-astro-cid-zpitblpc][title=Черный]{background-color:#000}.color-indicator[data-astro-cid-zpitblpc][title=Серебристый]{background-color:silver}.color-indicator[data-astro-cid-zpitblpc][title=ТемноКрасный]{background-color:#8b0000}.color-indicator[data-astro-cid-zpitblpc][title=Серый]{background-color:gray}.color-indicator[data-astro-cid-zpitblpc][title=Желтый]{background-color:#ff0}.color-indicator[data-astro-cid-zpitblpc][title=Синий]{background-color:#00f}.color-indicator[data-astro-cid-zpitblpc][title=Бронзовый]{background-color:#cd7f32}.color-indicator[data-astro-cid-zpitblpc][title=ТемноСерый]{background-color:#2f4f4f}.color-indicator[data-astro-cid-zpitblpc]:not([title]){background-color:#fff;border-color:#ddd}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/user/Desktop/atest/src/components/MainCars.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/user/Desktop/atest/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/user/Desktop/atest/src/pages/park.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/park@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/user/Desktop/atest/src/pages/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/user/Desktop/atest/src/pages/vehicles/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/vehicles/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/user/Desktop/atest/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/user/Desktop/atest/src/pages/payment.astro",{"propagation":"none","containsHead":true}],["C:/Users/user/Desktop/atest/src/pages/rent-terms.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/park@_@astro":"pages/park.astro.mjs","\u0000@astro-page:src/pages/payment@_@astro":"pages/payment.astro.mjs","\u0000@astro-page:src/pages/rent-terms@_@astro":"pages/rent-terms.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/vehicles/[id]@_@astro":"pages/vehicles/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DtsmHLny.mjs","C:\\Users\\user\\Desktop\\atest\\.astro\\assets.mjs":"chunks/assets_BwNa1IAe.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DwybnLmo.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D-7REQRH.js","/astro/hoisted.js?q=1":"_astro/hoisted.DLE9A9Fa.js","C:/Users/user/Desktop/atest/node_modules/embla-carousel/esm/embla-carousel.esm.js":"_astro/embla-carousel.esm.DK17ptv-.js","/astro/hoisted.js?q=2":"_astro/hoisted.DZYiRqKE.js","/astro/hoisted.js?q=3":"_astro/hoisted.rYWhky9u.js","/astro/hoisted.js?q=4":"_astro/hoisted.CXA26sHz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo.Cxb5FnDl.png","/_astro/bmw.PKZIkBC2.png","/_astro/icon-close.BBB-CDAM.svg","/_astro/chrome.f1eQSm4k.svg","/_astro/firefox.CMmddY9p.svg","/_astro/edge.B7O1xshw.svg","/_astro/safari.CdqjFDzc.svg","/_astro/contact.CQgmWo-R.css","/_astro/index.DNc5Sks_.css","/alfa.svg","/favicon.svg","/feedback.jpg","/qiwi.svg","/sber.svg","/vtb.svg","/wb.svg","/yd.svg","/_astro/embla-carousel.esm.DK17ptv-.js","/_astro/hoisted.CXA26sHz.js","/_astro/hoisted.D-7REQRH.js","/_astro/hoisted.DLE9A9Fa.js","/_astro/hoisted.DZYiRqKE.js","/_astro/hoisted.rYWhky9u.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"kCOmehITb7Li8Sm4xlbd0vB+cT4BwdEtiR5fK0yryao=","experimentalEnvGetSecretEnabled":false});

export { manifest };
