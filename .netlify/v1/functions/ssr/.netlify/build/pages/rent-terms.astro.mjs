/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8UghB88.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BweagtQs.mjs';
import { $ as $$Icon } from '../chunks/Icon_X8wCzfUI.mjs';
export { renderers } from '../renderers.mjs';

const $$RentTerms = createComponent(($$result, $$props, $$slots) => {
  const h1 = "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u0440\u0435\u043D\u0434\u044B";
  const title = "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u0440\u0435\u043D\u0434\u044B | \u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0432 \u041A\u0440\u044B\u043C\u0443 Car on Time";
  const description = "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u0440\u0435\u043D\u0434\u044B | \u0412\u0437\u044F\u0442\u044C \u043D\u0430\u043F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C, \u041A\u0440\u044B\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F CAR ON TIME. \u0410\u0440\u0435\u043D\u0434\u0430 - \u044D\u0442\u043E \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u041A\u0440\u044B\u043C\u0443.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "h1": h1 }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid-container m-4 text-lg container mx-auto"> <div class="grid gap-4"> <!-- Первая строка: 2 столбца, второй в 2 раза шире первого --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-4"> <div class="col-span-1 lg:col-span-1 p-4"> <h2 class="font-semibold text-3xl mb-2 text-red-700">
Условия аренды:
</h2> <ul> <li>Возраст: с 22 лет</li> <li>Стаж: не менее 3 лет</li> <li>Залог за автомобиль: от 5 000 рублей</li> <li class="font-bold">Пробег: без ограничений (по Крыму)</li> </ul> </div> <div class="col-span-1 lg:col-span-2 p-4"> <p>
Картинки автомобилей опубликованы на нашем сайте исключительно в
						целях ознакомления. По запросу мы с удовольствием отправим Вам
						реальные фотографии забронированного Вами автомобиля.
</p> <strong>
Взять автомобиль в прокат можно на всей территории Республики Крым.
</strong> <p>
В нашем автопарке <strong>широкий спектр автомобилей разных классов</strong>.
</p> <p class="underline">
Компания оставляет за собой право отказать клиенту в аренде
						автомобиля после получения документов арендатора в одностороннем
						порядке без объяснения причин.
</p> </div> </div> <!-- Вторая строка: 3 столбца одинаковой ширины --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-4"> <div class="p-4"> <h2 class="font-semibold text-3xl mb-2 text-red-700">
Необходимые документы:
</h2> <ul> <li> <strong>Для граждан РФ:</strong> Паспорт РФ, действующая прописка,
							Водительское удостоверение
</li> <li> <strong>Для иностранных граждан:</strong> Заграничный паспорт, Водительское
							удостоверение международного образца
</li> </ul> </div> <div class="p-4"> <h2 class="font-semibold text-3xl mb-2 text-red-700">
Подача/Прием автомобиля:
</h2> <ul> <li class="font-bold">Аэропортовый сбор - 1000 руб</li> <li class="font-bold">
Прием и выдача автомобилей в нерабочее время - 1500 руб
</li> <li class="font-bold">По городу Симферополю - 1 500 рублей</li> <li>Алушта, Саки, Бахчисарай - 3 500 рублей</li> <li>Евпатория - 4 000 рублей</li> <li>Ялта - от 4 500 рублей</li> <li>Судак, Коктебель, Феодосия, Севастополь - от 5 000 рублей</li> <li>Черноморское, Джанкой - от 6 000 рублей</li> <li>Керчь, Армянск - 7 500 рублей</li> </ul> </div> <div class="p-4"> <h2 class="font-semibold text-3xl mb-2 text-red-700">
Дополнительные услуги:
</h2> <ul> <li>Навигатор - 150 рублей в сутки</li> <li>Детское кресло - 200 рублей в сутки</li> <li class="font-bold">Набор автомобилиста - Бесплатно</li> <li>Дополнительный водитель - 150 рублей в сутки</li> <li>Отмена залога и франшизы от 300 до 1000 рублей в сутки</li> <li>Wi-Fi Интернет - 300 рублей в сутки</li> <li>Камера GoPro - 500 рублей в сутки</li> </ul> </div> </div> <!-- Третья строка: 1 столбец на всю ширину --> <div class="p-4 mx-auto"> <h2 class="font-semibold text-3xl mb-2 text-red-700">
Для аренды автомобиля без водителя
</h2> <ul> <li> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:download", "class": "inline-block mr-2" })}<a href="">Договор аренды автомобиля без водителя для физлиц (docx) /
							35.20kb
</a> </li> <li> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:download", "class": "inline-block mr-2" })}<a href="">Договор аренды автомобиля без водителя для юрлиц (docx) / 43.20kb
</a> </li> <li> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:download", "class": "inline-block mr-2" })}<a href="">Дополнительное соглашение к договору (docx) / 23.90kb
</a> </li> </ul> </div> </div> </div> ` })}`;
}, "C:/Users/user/Desktop/atest/src/pages/rent-terms.astro", void 0);

const $$file = "C:/Users/user/Desktop/atest/src/pages/rent-terms.astro";
const $$url = "/rent-terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$RentTerms,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
