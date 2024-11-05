import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, i as renderHead, e as renderSlot, b as createAstro } from './astro/server_B8UghB88.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
import '@astrojs/internal-helpers/path';
import { $ as $$Picture } from './_astro_assets_Ze0uWSIV.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const date = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col items-center gap-y-4 w-full mt-4" data-astro-cid-sz7xmlte> <nav data-astro-cid-sz7xmlte> <a href="/" data-astro-cid-sz7xmlte>Главная</a> <a href="/park" data-astro-cid-sz7xmlte>Наш парк</a> <a href="/payment" data-astro-cid-sz7xmlte>Оплата</a> <a href="/rent-terms" data-astro-cid-sz7xmlte>Условия аренды</a> <a href="/contact" data-astro-cid-sz7xmlte>Контакты</a> </nav> <a href="https://vk.com/avtoprokatkrym" class="uil--vk bg-[#1e2933] text-white p-4 rounded" data-astro-cid-sz7xmlte>VK.COM</a> <p class="w-full sm:w-1/2 text-center" data-astro-cid-sz7xmlte>
© 2010-${date} | Аренда авто в Крыму — Крым автопрокат Car on Time Симферополь
		297536, Республика Крым, Симферопольский р-н, с.Укромное, Ул.Молодежная, 64-б
</p> </footer> `;
}, "C:/Users/user/Desktop/atest/src/components/Footer.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.Cxb5FnDl.png","width":187,"height":60,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/atest/src/img/logo.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-lg z-50" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between py-4 px-8 container mx-auto" data-astro-cid-3ef6ksr2> <!-- Logo --> <div data-astro-cid-3ef6ksr2> <a href="/" rel="noopener noreferrer" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Picture", $$Picture, { "src": logo, "formats": ["avif", "webp"], "alt": "", "data-astro-cid-3ef6ksr2": true })} </a> </div> <!-- Burger Menu --> <div class="sm:hidden relative" data-astro-cid-3ef6ksr2> <input type="checkbox" id="burgerToggle" class="hidden" data-astro-cid-3ef6ksr2> <label for="burgerToggle" class="cursor-pointer" data-astro-cid-3ef6ksr2> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" data-astro-cid-3ef6ksr2></path> </svg> </label> <!-- Mobile Menu --> <nav id="mobileMenu" class="absolute right-0 mt-2 hidden z-50 bg-white" data-astro-cid-3ef6ksr2> <a href="/" class="block px-4 py-2" data-astro-cid-3ef6ksr2>Главная</a> <a href="/rent-terms" class="block px-4 py-2" data-astro-cid-3ef6ksr2>Условия аренды</a> <a href="/payment" class="block px-4 py-2" data-astro-cid-3ef6ksr2>Оплата</a> <!-- Dropdown (Always expanded) --> <div data-astro-cid-3ef6ksr2> <a href="/park" class="block px-4 py-2" data-astro-cid-3ef6ksr2>Парк авто</a> <div class="pl-4" data-astro-cid-3ef6ksr2> <a href="/park?class=1" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Комфорт класс</a> <a href="/park?class=2" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Бизнес</a> <a href="/park?class=4" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Кроссоверы</a> <a href="/park?class=5" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Люкс</a> <a href="/park?class=6" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Внедорожник</a> <a href="/park?class=7" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Минивены</a> </div> </div> <a href="/contact" class="block px-4 py-2" data-astro-cid-3ef6ksr2>Контакты</a> </nav> </div> <!-- Main Menu (for larger screens) --> <nav class="hidden sm:flex items-center space-x-6 uppercase" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>Главная</a> <a href="/rent-terms" data-astro-cid-3ef6ksr2>Условия аренды</a> <a href="/payment" data-astro-cid-3ef6ksr2>Оплата</a> <!-- Dropdown --> <div class="relative group" data-astro-cid-3ef6ksr2> <a href="/park" class="block px-4 py-2 font-bold" data-astro-cid-3ef6ksr2>Парк авто</a> <div class="absolute hidden bg-white shadow-lg rounded-md group-hover:block z-50" data-astro-cid-3ef6ksr2> <a href="/park?class=1" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Комфорт класс</a> <a href="/park?class=2" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Бизнес</a> <a href="/park?class=4" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Кроссоверы</a> <a href="/park?class=5" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Люкс</a> <a href="/park?class=6" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Внедорожник</a> <a href="/park?class=7" class="block px-2 py-2" data-astro-cid-3ef6ksr2>Минивены</a> </div> </div> <a href="/contact" data-astro-cid-3ef6ksr2>Контакты</a> </nav> </div> </header>  `;
}, "C:/Users/user/Desktop/atest/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, h1, showTitle = true } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description || "\u0412\u0437\u044F\u0442\u044C \u043D\u0430\u043F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C, \u041A\u0440\u044B\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F CAR ON TIME. \u0410\u0440\u0435\u043D\u0434\u0430 - \u044D\u0442\u043E \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u041A\u0440\u044B\u043C\u0443.", "content")}><title>${title || "\u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0432 \u041A\u0440\u044B\u043C\u0443 Car on Time"}</title>${renderHead()}</head> <body class="flex flex-col min-h-screen pb-4"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow relative"> ${showTitle && renderTemplate`<h1 class="text-3xl font-bold shadow-up py-8 relative decorated-title uppercase"> ${h1} </h1>`} ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/user/Desktop/atest/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
