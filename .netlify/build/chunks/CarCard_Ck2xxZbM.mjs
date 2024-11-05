import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from './astro/server_B8UghB88.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_X8wCzfUI.mjs';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { title, url, target = "_self", styleClass = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(["order-button", styleClass], "class:list")}${addAttribute(target, "target")} data-astro-cid-vnzlvqnm>${title}</a> `;
}, "C:/Users/user/Desktop/atest/src/components/Button.astro", void 0);

const $$Astro = createAstro();
const $$CarCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CarCard;
  const { car } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="car-card text-center"${addAttribute(car.data.class_id, "data-id")} data-astro-cid-zpitblpc> <img${addAttribute(car.data.images[0].image, "src")}${addAttribute(car.data.model, "alt")} decoding="async" loading="lazy" data-astro-cid-zpitblpc> <div class="flex flex-col gap-2 text-xl pb-2" data-astro-cid-zpitblpc> <p class="font-bold text-2xl" data-astro-cid-zpitblpc>${car.data.model}</p> <p data-astro-cid-zpitblpc>
Депозит: <strong data-astro-cid-zpitblpc>${car.data.deposit} ₽</strong> </p> <p data-astro-cid-zpitblpc>
Период аренды: <strong data-astro-cid-zpitblpc>${car.data.rent_period_days} дней</strong> </p> </div> ${renderComponent($$result, "Button", $$Button, { "title": `\u041E\u0442 ${car.data.rate_per_day} \u20BD`, "url": `/vehicles/${car.data.id}`, "styleClass": "order-button self-center text-2xl", "data-astro-cid-zpitblpc": true })} <div class="grid grid-cols-5 gap-2 items-center justify-center p-2 border-t-2 text-sm border-black mt-4" data-astro-cid-zpitblpc> <p class="flex items-center justify-center" data-astro-cid-zpitblpc> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:car", "class": "mr-1", "data-astro-cid-zpitblpc": true })}${car.data.year} </p> <p class="flex items-center justify-center" data-astro-cid-zpitblpc> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:engine", "class": "mr-1", "data-astro-cid-zpitblpc": true })}${car.data.engine_capacity} </p> <p class="flex items-center justify-center" data-astro-cid-zpitblpc> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:car-manual-transmission", "class": "mr-1", "data-astro-cid-zpitblpc": true })}${car.data.transmission} </p> <p class="flex items-center justify-center" data-astro-cid-zpitblpc> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:car-seat", "class": "mr-1", "data-astro-cid-zpitblpc": true })}${car.data.seats} </p> <p class="flex items-center justify-center" data-astro-cid-zpitblpc> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:color", "class": "mr-1", "data-astro-cid-zpitblpc": true })} <span class="color-indicator"${addAttribute(car.data.color, "title")} data-astro-cid-zpitblpc></span> </p> </div> </div> `;
}, "C:/Users/user/Desktop/atest/src/components/CarCard.astro", void 0);

export { $$CarCard as $, $$Button as a };
