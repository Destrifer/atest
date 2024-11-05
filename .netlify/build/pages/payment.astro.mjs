/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8UghB88.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BweagtQs.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Payment = createComponent(($$result, $$props, $$slots) => {
  const h1 = "\u041E\u043D\u043B\u0430\u0439\u043D \u043E\u043F\u043B\u0430\u0442\u0430";
  const title = "\u041E\u043D\u043B\u0430\u0439\u043D \u043E\u043F\u043B\u0430\u0442\u0430 | \u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0432 \u041A\u0440\u044B\u043C\u0443 Car on Time";
  const description = "\u041E\u043D\u043B\u0430\u0439\u043D \u043E\u043F\u043B\u0430\u0442\u0430 | \u0412\u0437\u044F\u0442\u044C \u043D\u0430\u043F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C, \u041A\u0440\u044B\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F CAR ON TIME. \u0410\u0440\u0435\u043D\u0434\u0430 - \u044D\u0442\u043E \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u041A\u0440\u044B\u043C\u0443.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "h1": h1, "data-astro-cid-mv2qmi5q": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto gap-4 text-xl p-4 md:p-0" data-astro-cid-mv2qmi5q> <ul class="" data-astro-cid-mv2qmi5q> <li data-astro-cid-mv2qmi5q> <h2 class="py-2 font-bold text-3xl" data-astro-cid-mv2qmi5q>Банковские реквизиты</h2> <p data-astro-cid-mv2qmi5q>
Вы можете осуществить платеж самостоятельно, воспользовавшись
					банковскими реквизитами удобного для вас банка.
</p> </li> <li data-astro-cid-mv2qmi5q> <h2 class="py-2 font-bold text-3xl" data-astro-cid-mv2qmi5q>Электронные деньги</h2> <p data-astro-cid-mv2qmi5q>
Дорогие клиенты, теперь у Вас есть возможность оплатить наши услуги с
					помощью электронных денег <strong data-astro-cid-mv2qmi5q>«Яндекс-деньги», «QIWI», «Webmoney»</strong> </p> </li> </ul> <ul class="mt-2" data-astro-cid-mv2qmi5q> <li data-astro-cid-mv2qmi5q> <img src="/vtb.svg" alt="ВТБ" data-astro-cid-mv2qmi5q> <p data-astro-cid-mv2qmi5q>Номер карты ВТБ уточняйте у менеджера</p> </li> <li data-astro-cid-mv2qmi5q> <img src="/yd.svg" alt="Яд" data-astro-cid-mv2qmi5q> <p data-astro-cid-mv2qmi5q>Оплата со счета в Яндекс.Деньгах</p> </li> <li data-astro-cid-mv2qmi5q> <img src="/alfa.svg" alt="Альфа" data-astro-cid-mv2qmi5q> <p data-astro-cid-mv2qmi5q>Номер счета в системе Альфа-Клик уточняйте у менеджера</p> </li> <li data-astro-cid-mv2qmi5q> <img src="/wb.svg" alt="ВМ" data-astro-cid-mv2qmi5q> <p data-astro-cid-mv2qmi5q>Оплата cо счета WebMoney</p> </li> <li data-astro-cid-mv2qmi5q> <img src="/sber.svg" alt="Сбер" data-astro-cid-mv2qmi5q> <p data-astro-cid-mv2qmi5q>Номер карты Сбербанк уточняйте у менеджера</p> </li> <li data-astro-cid-mv2qmi5q> <img src="/wb.svg" alt="ВМ" data-astro-cid-mv2qmi5q> <p data-astro-cid-mv2qmi5q>Мы принимаем WebMoney</p> </li> <li data-astro-cid-mv2qmi5q> <img src="/sber.svg" alt="Сбер" data-astro-cid-mv2qmi5q> <p data-astro-cid-mv2qmi5q>Номер телефона для СМС-перевода уточняйте у менеджера</p> </li> <li data-astro-cid-mv2qmi5q> <img src="/qiwi.svg" alt="Киви" data-astro-cid-mv2qmi5q> <p data-astro-cid-mv2qmi5q>Оплата cо счета QIWI</p> </li> </ul> </div> ` })} `;
}, "C:/Users/user/Desktop/atest/src/pages/payment.astro", void 0);

const $$file = "C:/Users/user/Desktop/atest/src/pages/payment.astro";
const $$url = "/payment";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Payment,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
