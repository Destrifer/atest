/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as createAstro, a as renderComponent, u as unescapeHTML } from '../chunks/astro/server_B8UghB88.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BweagtQs.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from '../chunks/_astro_assets_Ze0uWSIV.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Form } from '../chunks/Form_VQCI02Im.mjs';
import { $ as $$CarCard, a as $$Button } from '../chunks/CarCard_Ck2xxZbM.mjs';
import { g as getCollection } from '../chunks/_astro_content_UZKhm0yb.mjs';
import { parseHTML } from 'linkedom/worker';
import { $ as $$Icon } from '../chunks/Icon_X8wCzfUI.mjs';
export { renderers } from '../renderers.mjs';

const bmw = new Proxy({"src":"/_astro/bmw.PKZIkBC2.png","width":1812,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/atest/src/img/bmw.png";
							}
							
							return target[name];
						}
					});

const iconSvg = new Proxy({"src":"/_astro/icon-close.BBB-CDAM.svg","width":30,"height":30,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/atest/node_modules/@xexiu/astro-modal/src/assets/icons-svg/icon-close.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$9 = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Modal;
  const {
    id,
    classes = "",
    ariaLabel,
    modalBtnClass = "",
    headerClass = "",
    sectionClass = "",
    footerClass = "",
    closeBtnClass = "",
    btnText,
    btnCloseAriaLabel
  } = Astro2.props;
  function isPlainString(input) {
    const pattern = /^[a-zA-Z0-9\s]*$/;
    return pattern.test(input);
  }
  if (!isPlainString(id)) {
    throw new Error("Invalid Props: id must be a plain string.");
  }
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`window.${id}.showModal()`, "onclick")}${addAttribute(id, "aria-controls")} type="button"${addAttribute(["btn-modal", modalBtnClass], "class:list")}>${renderSlot($$result, $$slots["open-modal-button"])}</button> <dialog${addAttribute(id, "id")}${addAttribute(["dialog-container", classes], "class:list")}${addAttribute(ariaLabel, "aria-label")} role="dialog" aria-modal="true"${addAttribute(ariaLabel, "aria-labelledby")}> <header${addAttribute(["modal-header", headerClass], "class:list")}> ${renderSlot($$result, $$slots["modal-title"])} </header> <section${addAttribute(["modal-section", sectionClass], "class:list")}> ${renderSlot($$result, $$slots["modal-main"])} </section> <footer${addAttribute(["modal-footer", footerClass], "class:list")}> ${renderSlot($$result, $$slots["modal-footer"])} </footer> <form method="dialog"> ${renderSlot($$result, $$slots["modal-close-button"])} <button${addAttribute(id, "aria-controls")}${addAttribute(["close-btn-modal", closeBtnClass], "class:list")}${addAttribute(btnCloseAriaLabel, "aria-label")}> ${btnText ? renderTemplate`<span>${btnText}</span>` : renderTemplate`<img${addAttribute(iconSvg.src, "src")} alt="Cerrar Modal Icono" class="close-modal-icon">`} </button> </form> </dialog>`;
}, "C:/Users/user/Desktop/atest/node_modules/@xexiu/astro-modal/src/Modal.astro", void 0);

const $$Slider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row w-full h-full first" data-astro-cid-txmsbymr> <!-- Левая часть с текстом по центру --> <div class="w-full md:w-1/2 flex items-center justify-center text-center flex-col gap-y-4" data-astro-cid-txmsbymr> <p class="text-4xl font-black text-white drop-shadow-md" data-astro-cid-txmsbymr>
АРЕНДА АВТО В КРЫМУ
</p> <p class="text-5xl font-black text-red-600" data-astro-cid-txmsbymr>+7 (978) 955-60-60</p> <p class="text-2xl text-white drop-shadow-md" data-astro-cid-txmsbymr>
Стойка в терминале аэропорт Симферополь
</p> <div class="flex gap-4" data-astro-cid-txmsbymr> ${renderComponent($$result, "Modal", $$Modal, { "id": "owod", "ariaLabel": "owod", "btnCloseAriaLabel": "Close Modal", "data-astro-cid-txmsbymr": true }, { "modal-footer": ($$result2) => renderTemplate`<div class="text-xl my-4" data-astro-cid-txmsbymr>
После отправки формы с Вами свяжется наш менеджер, и уточнит детали
					заказа
</div>`, "modal-main": ($$result2) => renderTemplate`<div data-astro-cid-txmsbymr> <p class="text-xl font-semibold mb-4" data-astro-cid-txmsbymr>
Укажите свои данные для заказа автомобиля
</p> ${renderComponent($$result2, "Form", $$Form, { "data-astro-cid-txmsbymr": true })} </div>`, "modal-title": ($$result2) => renderTemplate`<h2 class="mx-auto mb-4 text-3xl font-bold" data-astro-cid-txmsbymr>
Заказ авто без водителя
</h2>`, "open-modal-button": ($$result2) => renderTemplate`<div class="order-button" data-astro-cid-txmsbymr>
Авто без водителя
</div>` })} ${renderComponent($$result, "Modal", $$Modal, { "id": "owd", "ariaLabel": "owd", "btnCloseAriaLabel": "Close Modal", "data-astro-cid-txmsbymr": true }, { "modal-footer": ($$result2) => renderTemplate`<div class="text-xl my-4" data-astro-cid-txmsbymr>
После отправки формы с Вами свяжется наш менеджер, и уточнит детали
					заказа
</div>`, "modal-main": ($$result2) => renderTemplate`<div data-astro-cid-txmsbymr> <p class="text-xl font-semibold mb-4" data-astro-cid-txmsbymr>
Укажите свои данные для заказа автомобиля
</p> ${renderComponent($$result2, "Form", $$Form, { "data-astro-cid-txmsbymr": true })} </div>`, "modal-title": ($$result2) => renderTemplate`<h2 class="mx-auto mb-4 text-3xl font-bold" data-astro-cid-txmsbymr>
Заказ авто с водителем
</h2>`, "open-modal-button": ($$result2) => renderTemplate`<div class="order-button" data-astro-cid-txmsbymr>
Авто с водителем
</div>` })} </div> </div> <!-- Правая часть с изображением, ограниченным по высоте --> <div class="w-full md:w-1/2 flex items-center justify-center z-10" data-astro-cid-txmsbymr> ${renderComponent($$result, "Picture", $$Picture, { "src": bmw, "formats": ["avif", "webp"], "alt": "Car on time", "class": "max-h-[400px] object-contain", "data-astro-cid-txmsbymr": true })} </div> </div> `;
}, "C:/Users/user/Desktop/atest/src/components/Slider.astro", void 0);

const $$MainCars = createComponent(async ($$result, $$props, $$slots) => {
  const cars = await getCollection("apiCars");
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto" data-astro-cid-6ley7dyl> <h1 class="text-center text-4xl font-black pb-2 py-2 uppercase" data-astro-cid-6ley7dyl>
АРЕНДА АВТО В КРЫМУ
</h1> <div class="tab-buttons flex justify-center gap-4 my-4 flex-wrap" data-astro-cid-6ley7dyl> <button class="tab-button active" data-tab="1" data-astro-cid-6ley7dyl>Комфорт</button> <button class="tab-button" data-tab="2" data-astro-cid-6ley7dyl>Бизнес</button> <button class="tab-button" data-tab="4" data-astro-cid-6ley7dyl>Кроссоверы</button> <button class="tab-button" data-tab="6" data-astro-cid-6ley7dyl>Внедорожники</button> </div> <div class="cars-grid mx-auto" data-astro-cid-6ley7dyl> ${cars.map((car) => renderTemplate`${renderComponent($$result, "CarCard", $$CarCard, { "car": car, "data-astro-cid-6ley7dyl": true })}`)} </div> </div>  `;
}, "C:/Users/user/Desktop/atest/src/components/MainCars.astro", void 0);

const $$Astro$8 = createAstro();
const $$Tweet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Tweet;
  const { id, theme = "light" } = Astro2.props;
  async function fetchTweet(id2, theme2 = "light") {
    try {
      const oembedUrl = new URL("https://publish.twitter.com/oembed");
      oembedUrl.searchParams.set("url", id2);
      oembedUrl.searchParams.set("omit_script", "true");
      oembedUrl.searchParams.set("dnt", "true");
      oembedUrl.searchParams.set("theme", theme2);
      return await fetch(oembedUrl).then((res) => res.json());
    } catch (e) {
      console.error(
        `[error]  astro-embed
         ${e.status} - ${e.statusText}: Failed to fetch tweet ${id2}`
      );
    }
  }
  const tweet = await fetchTweet(id, theme);
  return renderTemplate`${tweet && renderTemplate`${renderComponent($$result, "astro-embed-tweet", "astro-embed-tweet", {}, { "default": () => renderTemplate`${unescapeHTML(tweet.html)}` })}`}`;
}, "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-twitter/Tweet.astro", void 0);

const urlPattern$1 = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher$1(url) {
  const match = url.match(urlPattern$1);
  return match?.[3];
}

const $$Astro$7 = createAstro();
const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$YouTube;
  const {
    id,
    poster,
    posterQuality = "default",
    title,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^[A-Za-z0-9-_]+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher$1(idOrUrl);
  }
  const videoid = extractID(id);
  const posterFile = {
    max: "maxresdefault",
    high: "sddefault",
    default: "hqdefault",
    low: "default"
  }[posterQuality] || "hqdefault";
  const posterURL = poster || `https://i.ytimg.com/vi/${videoid}/${posterFile}.jpg`;
  const href = `https://youtube.com/watch?v=${videoid}`;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoid, "title": title, "data-title": title, ...attrs, "style": `background-image: url('${posterURL}');` }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(href, "href")} class="lty-playbtn"> <span class="lyt-visually-hidden">${attrs.playlabel}</span> </a> ` })}  `;
}, "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-youtube/YouTube.astro", void 0);

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value) this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize) this.delete(this.keys().next().value);
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const formatError = (...lines) => lines.join("\n         ");
const safeGet = makeSafeGetter((res) => res.json());
const safeGetDOM = makeSafeGetter(
  async (res) => parseHTML(await res.text()).document
);
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
  const cache = new LRU(cacheSize);
  return async function safeGet2(url) {
    try {
      const cached = cache.get(url);
      if (cached) return cached;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          formatError(
            `Failed to fetch ${url}`,
            `Error ${response.status}: ${response.statusText}`
          )
        );
      const result = await handleResponse(response);
      cache.set(url, result);
      return result;
    } catch (e) {
      console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
      return void 0;
    }
  };
}

const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher(url) {
  const match = url.match(urlPattern);
  return match?.[3];
}

const $$Astro$6 = createAstro();
const $$Vimeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Vimeo;
  const {
    id,
    poster,
    posterQuality = "default",
    params = "",
    playlabel = "Play",
    style,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^\d+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher(idOrUrl);
  }
  const videoid = extractID(id);
  let posterURL = poster;
  if (!posterURL) {
    const data = await safeGet(`https://vimeo.com/api/v2/video/${videoid}.json`);
    if (data) {
      const resolution = { max: 1280, high: 640, default: 480, low: 120 }[posterQuality] || 480;
      const { thumbnail_large } = data?.[0] || {};
      if (thumbnail_large.endsWith("d_640")) {
        posterURL = thumbnail_large.slice(0, -3) + resolution;
      } else {
        posterURL = thumbnail_large;
      }
    }
  }
  let [searchString, t] = params.split("#t=");
  const searchParams = new URLSearchParams(searchString);
  if (!t) t = searchParams.get("t");
  searchParams.append("autoplay", "1");
  if (!searchParams.has("dnt")) searchParams.append("dnt", "1");
  const color = searchParams.get("color");
  const styles = [];
  if (style) styles.push(style);
  if (color) styles.push(`--ltv-color: #${color}`);
  if (posterURL) styles.push(`background-image: url('${posterURL}')`);
  return renderTemplate`${renderComponent($$result, "lite-vimeo", "lite-vimeo", { "data-id": videoid, "data-t": t, "data-params": searchParams.toString(), "style": styles.join(";"), ...attrs }, { "default": () => renderTemplate` ${maybeRenderHead()}<a class="ltv-playbtn"${addAttribute(`https://vimeo.com/${videoid}`, "href")}${addAttribute(playlabel, "aria-label")}></a> ` })} `;
}, "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro", void 0);

const getContent = (el) => el?.getAttribute("content");
const urlOrNull = (url) => url?.slice(0, 8) === "https://" ? url : null;
async function parseOpenGraph(pageUrl) {
  const html = await safeGetDOM(pageUrl);
  if (!html) return;
  const getMetaProperty = (prop) => getContent(html.querySelector(`meta[property=${JSON.stringify(prop)}]`));
  const getMetaName = (name) => getContent(html.querySelector(`meta[name=${JSON.stringify(name)}]`));
  const title = getMetaProperty("og:title") || html.querySelector("title")?.textContent;
  const description = getMetaProperty("og:description") || getMetaName("description");
  const image = urlOrNull(
    getMetaProperty("og:image:secure_url") || getMetaProperty("og:image:url") || getMetaProperty("og:image")
  );
  const imageAlt = getMetaProperty("og:image:alt");
  const video = urlOrNull(
    getMetaProperty("og:video:secure_url") || getMetaProperty("og:video:url") || getMetaProperty("og:video")
  );
  const videoType = getMetaProperty("og:video:type");
  const url = urlOrNull(
    getMetaProperty("og:url") || html.querySelector("link[rel='canonical']")?.getAttribute("href")
  ) || pageUrl;
  return { title, description, image, imageAlt, url, video, videoType };
}

const $$Astro$5 = createAstro();
const $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LinkPreview;
  const { id, hideMedia = false } = Astro2.props;
  const meta = await parseOpenGraph(id);
  const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
  return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "link-preview",
    {
      "link-preview--has-video": !hideMedia && meta.video && meta.videoType,
      "link-preview--no-media": hideMedia || !(meta.video && meta.videoType || meta.image)
    }
  ], "class:list")} data-astro-cid-ztfdmrby><div class="link-preview__content" data-astro-cid-ztfdmrby><header data-astro-cid-ztfdmrby><a class="link-preview__title"${addAttribute(id, "href")} data-astro-cid-ztfdmrby>${meta.title}</a>${" "}${domain && renderTemplate`<small class="link-preview__domain" data-astro-cid-ztfdmrby>${domain}</small>`}</header><small class="link-preview__description" data-astro-cid-ztfdmrby>${meta.description}</small></div>${hideMedia ? null : meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" data-astro-cid-ztfdmrby><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} data-astro-cid-ztfdmrby></video>` : meta.image ? renderTemplate`<img${addAttribute(meta.image, "src")}${addAttribute(meta.imageAlt || "", "alt")} width="1200" height="630" data-astro-cid-ztfdmrby>` : null}</article>` : renderTemplate`<div class="link-preview link-preview--no-metadata" data-astro-cid-ztfdmrby><a${addAttribute(id, "href")} data-astro-cid-ztfdmrby>${id}</a></div>`}`;
}, "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-link-preview/LinkPreview.astro", void 0);

const $$Astro$4 = createAstro();
const $$BaselineIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaselineIcon;
  const paths = {
    limited: `<path fill="var(--color-limited)" d="m10 0 6 6-2 2-6-6 2-2Zm12 12-2 2 6 6 2-2-6-6Zm4-12 2 2-18 18-2-2L26 0Z"/><path fill="var(--color-limited-secondary)" d="m8 2 2 2-6 6 6 6-2 2-8-8 8-8Zm20 0 8 8-8 8-2-2 6-6-6-6 2-2Z"/>`,
    widely: `<path fill="var(--color-widely)" d="m18 8 2 2-2 2-2-2 2-2Z"/><path fill="var(--color-widely)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/><path fill="var(--color-widely-secondary)" d="m28 2-2 2 6 6-6 6-4-4-2 2 6 6 10-10-8-8ZM10 0 2 8l2 2 6-6 4 4 2-2-6-6Z"/>`,
    newly: `<path fill="var(--color-newly-secondary)" d="m10 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm16 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4-4 2 2-2 2-2-2 2-2ZM6 4l2 2-2 2-2-2 2-2Z"/><path fill="var(--color-newly)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/>`,
    no_data: `<path fill="var(--color-no_data-secondary)" d="m18 8 2 2-2 2-2-2 2-2Zm10-6-2 2 6 6-6 6-4-4-2 2 6 6 10-10-8-8ZM10 0 2 8l2 2 6-6 4 4 2-2-6-6Z"/><path fill="var(--color-no_data-secondary)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/>`
  };
  return renderTemplate`${maybeRenderHead()}<svg width="36" height="20" viewBox="0 0 36 20" class="baseline-icon" aria-hidden="true">${unescapeHTML(paths[Astro2.props.support])}</svg>`;
}, "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-baseline-status/BaselineIcon.astro", void 0);

const chrome = new Proxy({"src":"/_astro/chrome.f1eQSm4k.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/chrome.svg";
							}
							
							return target[name];
						}
					});

const edge = new Proxy({"src":"/_astro/edge.B7O1xshw.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/edge.svg";
							}
							
							return target[name];
						}
					});

const firefox = new Proxy({"src":"/_astro/firefox.CMmddY9p.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/firefox.svg";
							}
							
							return target[name];
						}
					});

const safari = new Proxy({"src":"/_astro/safari.CdqjFDzc.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/safari.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$BrowserIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BrowserIcon;
  const { browser } = Astro2.props;
  const icons = { chrome, edge, firefox, safari };
  const { src, width, height } = icons[browser];
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")} alt=""${addAttribute(width, "width")}${addAttribute(height, "height")}>`;
}, "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-baseline-status/BrowserIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$SupportIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SupportIcon;
  const { baseline, browserImplementation } = Astro2.props;
  const paths = {
    available: `<path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77 8.84 8.84 0 0 1-5.47-1.88c-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.07-4.48 10.07-10S12.3.2 6.72.2C4.37.2 2.21 1 .5 2.34c.26.31.52.64.75.97Z"/><path d="m11.35 8.13-5.01 4.93-3-2.96 1-.98 2 1.96 4-3.94 1 .98Z"/>`,
    unavailable: `<path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77 8.84 8.84 0 0 1-5.47-1.88c-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.08-4.48 10.08-10S12.29.2 6.73.2C4.37.2 2.2 1 .5 2.34c.27.31.52.64.75.97Z"/><path d="M10.32 8.13 8.33 10.1l2 1.97-1 .99-1.99-1.98-1.99 1.98-.99-.99 1.99-1.97-1.99-1.97 1-.99 1.98 1.97 1.99-1.97 1 .99Z"/>`,
    no_data: `<path d="M7.18 12.28h-1.2c.01-.41.05-.74.12-1 .07-.27.19-.5.35-.72.16-.22.38-.47.65-.74l.54-.56c.16-.18.3-.37.4-.58.1-.2.16-.45.16-.74 0-.3-.06-.55-.16-.76a1.1 1.1 0 0 0-.47-.5 1.5 1.5 0 0 0-.75-.16c-.25 0-.48.04-.7.13-.23.09-.4.23-.54.41-.14.19-.21.43-.22.72H4.18c0-.48.12-.89.36-1.23.23-.35.55-.61.95-.8.4-.18.84-.27 1.33-.27.55 0 1 .1 1.39.3.38.2.68.47.88.84.2.36.3.79.3 1.29 0 .38-.08.73-.24 1.05-.15.32-.35.62-.6.9-.24.28-.5.55-.77.8-.24.22-.4.47-.48.74-.08.27-.12.56-.12.88ZM5.94 14.3c0-.2.06-.35.18-.49.12-.13.29-.2.52-.2.23 0 .4.07.52.2.12.14.18.3.18.49 0 .18-.06.34-.18.47-.12.13-.3.2-.52.2a.67.67 0 0 1-.52-.2.68.68 0 0 1-.18-.47Z"/><path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77c-2.06 0-3.96-.7-5.47-1.88-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.07-4.48 10.07-10S12.3.2 6.72.2C4.37.2 2.21 1 .5 2.34c.26.31.52.64.75.97Z"/>`
  };
  const support = baseline === "limited" ? browserImplementation?.status || "unavailable" : baseline;
  const icon = support === "newly" || support === "widely" ? "available" : support;
  const fill = {
    no_data: "var(--color-no_data)",
    unavailable: "var(--color-limited)",
    newly: "var(--color-newly)",
    widely: "var(--color-widely)",
    available: "var(--color-widely)"
  }[support];
  return renderTemplate`${maybeRenderHead()}<svg width="17" height="21" aria-hidden="true"${addAttribute(fill, "fill")}>${unescapeHTML(paths[icon])}</svg>`;
}, "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-baseline-status/SupportIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$BrowserSupport = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BrowserSupport;
  const { browser, feature } = Astro2.props;
  const baseline = feature.baseline.status || "no_data";
  const browserImplementation = feature.browser_implementations?.[browser];
  const browserName = {
    chrome: "Chrome",
    edge: "Edge",
    firefox: "Firefox",
    safari: "Safari"
  }[browser];
  let supportLabel = browserImplementation?.status || "no";
  if (baseline === "no_data") supportLabel = "unknown";
  if (supportLabel === "available") supportLabel = "yes";
  return renderTemplate`${maybeRenderHead()}<span part="browser-support"> <span part="browser-support-label">
Supported in ${browserName}: ${supportLabel}.
</span> ${renderComponent($$result, "BrowserIcon", $$BrowserIcon, { "browser": browser })} ${renderComponent($$result, "SupportIcon", $$SupportIcon, { "baseline": baseline, "browserImplementation": browserImplementation })} </span>`;
}, "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-baseline-status/BrowserSupport.astro", void 0);

const $$Astro = createAstro();
const $$BaselineStatus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaselineStatus;
  const API_ENDPOINT = "https://api.webstatus.dev/v1/features/";
  const BASELINE_DEFS = {
    limited: {
      title: "Limited availability",
      defaultDescription: "This feature is not Baseline because it does not work in some of the most widely-used browsers."
    },
    newly: {
      title: "",
      defaultDescription: "This feature works across the latest devices and browser versions. This feature might not work in older devices or browsers."
    },
    widely: {
      title: "Widely available",
      defaultDescription: "This feature is well established and works across many devices and browser versions."
    },
    no_data: {
      title: "Unknown availability",
      defaultDescription: "We currently don\u2019t have browser support information about this feature."
    }
  };
  function getBaselineDate(feature2) {
    return feature2.baseline.low_date ? new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long"
    }).format(new Date(feature2.baseline.low_date)) : "";
  }
  function getDescriptionDate(baseline2, date) {
    if (baseline2 === "newly" && date) {
      return `Since ${date} this feature works across the latest
			devices and browser versions. This feature might not work in older
			devices or browsers.`;
    } else if (baseline2 === "widely" && date) {
      return `This feature is well established and works across many
			devices and browser versions. It\u2019s been available across browsers
			since ${date}`;
    }
    return BASELINE_DEFS[baseline2].defaultDescription;
  }
  const featureData = await safeGet(API_ENDPOINT + Astro2.props.id);
  const feature = featureData?.baseline ? featureData : {
    baseline: {
      status: "no_data"
    },
    name: Astro2.props.id || "Unknown feature"
  };
  const baseline = feature.baseline.status || "no_data";
  const title = BASELINE_DEFS[baseline].title;
  const baselineDate = getBaselineDate(feature);
  const description = getDescriptionDate(baseline, baselineDate);
  const year = baseline === "newly" && baselineDate ? baselineDate.split(" ")[1] : "";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`baseline-status baseline-status--${baseline}`, "class")} data-astro-cid-7wt35nye> <template shadowrootmode="open" data-astro-cid-7wt35nye> <div part="root" data-astro-cid-7wt35nye> <p part="feature-name" data-astro-cid-7wt35nye>${feature.name}</p> <details part="details" data-astro-cid-7wt35nye> <summary part="summary" data-astro-cid-7wt35nye> ${renderComponent($$result, "BaselineIcon", $$BaselineIcon, { "support": baseline, "data-astro-cid-7wt35nye": true })} <div part="summary-content" data-astro-cid-7wt35nye> <div part="summary-label" data-astro-cid-7wt35nye> ${!(baseline === "limited" || baseline === "no_data") && renderTemplate`<strong data-astro-cid-7wt35nye>Baseline</strong>`} ${title} ${year} ${baseline === "newly" && renderTemplate`<span part="badge" data-astro-cid-7wt35nye>newly available</span>`} </div> <div part="browsers" data-astro-cid-7wt35nye> ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "chrome", "feature": feature, "data-astro-cid-7wt35nye": true })} ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "edge", "feature": feature, "data-astro-cid-7wt35nye": true })} ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "firefox", "feature": feature, "data-astro-cid-7wt35nye": true })} ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "safari", "feature": feature, "data-astro-cid-7wt35nye": true })} </div> </div> <style>
						[part='caret'] svg {
							transition: transform 0.3s;
						}
						details[open] [part='caret'] svg {
							transform: rotate(180deg);
						}
					</style> <span part="caret" aria-hidden="true" data-astro-cid-7wt35nye> <svg width="11" height="7" fill="currentColor" data-astro-cid-7wt35nye> <path d="M5.5 6.45.25 1.2l.94-.94L5.5 4.6 9.8.3l.95.94L5.5 6.45Z" data-astro-cid-7wt35nye></path> </svg> </span> </summary> <p part="description" data-astro-cid-7wt35nye>${unescapeHTML(description)}</p> ${baseline !== "no_data" && renderTemplate`<p data-astro-cid-7wt35nye> <a${addAttribute(`https://webstatus.dev/features/${feature.feature_id}`, "href")} target="_top" part="link" data-astro-cid-7wt35nye>${`${feature.name} on Web Platform Status`}</a> </p>`} </details> </div> </template> </div> `;
}, "C:/Users/user/Desktop/atest/node_modules/@astro-community/astro-embed-baseline-status/BaselineStatus.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#1e2933] py-8 mt-8 px-1" data-astro-cid-v2cbyr3p> <div class="flex flex-wrap container mx-auto gap-4" data-astro-cid-v2cbyr3p> <div class="flex-1 min-w-1/2 mx-auto text-[#ccc] flex gap-4 flex-col min-w-80" data-astro-cid-v2cbyr3p> <p class="text-2xl font-semibold" data-astro-cid-v2cbyr3p>Аренда авто в крыму CAR-ON-TIME</p> <h2 class="text-4xl font-black uppercase text-white" data-astro-cid-v2cbyr3p>О компании</h2> <p class="text-xl" data-astro-cid-v2cbyr3p>
Компания автопрокат CAR-ON-TIME была основана в 2010 году. За время
				работы в Крыму наша компания имеет положительные отзывы от своих
				клиентов. Мы можем решать транспортные задачи любой сложности, наши
				водители это профессионалы высочайшего уровня. Основное направление -
				прокат автомобилей в Крыму
</p> <ul data-astro-cid-v2cbyr3p> <li data-astro-cid-v2cbyr3p>Аренда авто от эконом до V.I.P. класса</li> <li data-astro-cid-v2cbyr3p>Аренда автомобилей без водителя, так и с водителем</li> </ul> <div class="flex gap-4" data-astro-cid-v2cbyr3p> ${renderComponent($$result, "Button", $$Button, { "title": "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u0440\u0435\u043D\u0434\u044B", "url": "/rent-terms", "styleClass": "wt", "data-astro-cid-v2cbyr3p": true })} ${renderComponent($$result, "Button", $$Button, { "title": "\u041D\u0430\u0448 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A", "url": "/park", "styleClass": "wt", "data-astro-cid-v2cbyr3p": true })} </div> </div> <div class="flex-1 min-w-1/2" data-astro-cid-v2cbyr3p> ${renderComponent($$result, "YouTube", $$YouTube, { "id": "0I6_05Rcpdo", "title": "\u0410\u0432\u0442\u043E\u043F\u0440\u043E\u043A\u0430\u0442 Car-On-Time", "data-astro-cid-v2cbyr3p": true })} </div> </div> </div> `;
}, "C:/Users/user/Desktop/atest/src/components/About.astro", void 0);

const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-cover bg-bottom before:absolute before:inset-0 before:bg-black before:bg-opacity-70 before:content-['']" style="background-image: url('/feedback.jpg');"> <div class="container mx-auto text-white relative z-10 flex gap-8 flex-col flex-wrap p-1"> <div class="text-center">
Задайте вопрос онлайн
<p class="text-4xl font-black">Обратная связь</p> </div> <div class="flex gap-4 justify-center flex-wrap"> <div class="md:w-[48%]"> ${renderComponent($$result, "Form", $$Form, {})} </div> <div class="text-white md:w-[48%] w-full">
Мы работаем для Вас ежедневно c 08:00 до 20:00.<br>
Прием и выдача автомобилей в нерабочее время - 1500 руб.<br>
Стойка аренды авто в терминале аэропорт Симферополь
<ul class="font-bold space-y-2 mt-4"> <li> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:id-card-outline", "class": "inline-block mr-2 text-white", "size": "28" })}Наименование юридического лица: ООО «КАНСАЙ-ГРУПП» ИНН: 9102225144
</li> <li> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:house", "class": "inline-block mr-2 text-white", "size": "28" })}Адрес: 297536, Республика Крым, Симферопольский р-н, с.Укромное,
						Ул.Молодежная, 64-б
</li> <li> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:whatsapp", "class": "inline-block mr-2 text-white", "size": "24" })}WhatsApp: +7 (978) 955-60-60
</li> <li> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:phone", "class": "inline-block mr-2 text-white", "size": "24" })}Телефон: +7 (978) 955-60-60
</li> <li> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:email", "class": "inline-block mr-2 text-white", "size": "24" })}E-mail: info@car-on-time.ru
</li> <li> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:clock", "class": "inline-block mr-2 text-white", "size": "24" })}Время работы: 08:00-20:00 - ежедневно
</li> <li> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:map-marker", "class": "inline-block mr-2 text-white", "size": "24" })}Показать на карте
</li> </ul> </div> </div> </div> </div>`;
}, "C:/Users/user/Desktop/atest/src/components/Feedback.astro", void 0);

const $$MainForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#1e2933] py-8 border-t border-t-dashed border-t-white text-white"> <div class="mx-auto flex justify-around container flex-wrap gap-4 px-1"> <div class="flex flex-col text-2xl">
ЗАБРОНИРУЙ АВТОМОБИЛЬ <strong class="text-3xl font-black">ПРЯМО СЕЙЧАС!</strong> </div> <form method="get" action="/search" class="flex gap-4 items-center justify-center flex-wrap"> <div class="flex flex-col gap-2"> <label for="from-id">Место получения:</label> <select name="from-id" id="from-id" required class="p-2 text-black"> <option value="">Выберите регион:</option> <option value="10">Симферополь Аэропорт</option> <option value="10">Симферополь Вокзал</option> <option value="10">Симферополь Центр</option> </select> </div> <div class="flex flex-col gap-2"> <label for="from-date">Дата получения:</label> <input type="text" id="from-date" name="from-date" placeholder="DD.MM.YYYY" required class="p-2 text-black"> </div> <button type="submit" class="bg-red-600 px-8 py-2 cursor-pointer uppercase self-end">НАЙТИ АВТОМОБИЛЬ</button> </form> </div> </div> `;
}, "C:/Users/user/Desktop/atest/src/components/MainForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const showTitle = false;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "showTitle": showTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Slider", $$Slider, {})} ${renderComponent($$result2, "MainCars", $$MainCars, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "MainForm", $$MainForm, {})} ${renderComponent($$result2, "Feedback", $$Feedback, {})} ` })} `;
}, "C:/Users/user/Desktop/atest/src/pages/index.astro", void 0);

const $$file = "C:/Users/user/Desktop/atest/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
