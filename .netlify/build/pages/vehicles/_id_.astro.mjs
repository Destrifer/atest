/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_B8UghB88.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_UZKhm0yb.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BweagtQs.mjs';
import { $ as $$Icon } from '../../chunks/Icon_X8wCzfUI.mjs';
import { $ as $$Form } from '../../chunks/Form_VQCI02Im.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const vehicles = await getCollection("apiCars");
  const { id } = Astro2.params;
  const vehicle = vehicles.find((v) => v.data.id === id);
  let h1 = `${vehicle.data.model} - \u041F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F \u0432 \u041A\u0440\u044B\u043C\u0443`;
  const title = `\u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E ${vehicle.data.model} \u0432 \u041A\u0440\u044B\u043C\u0443 Car on Time`;
  const description = `\u0412\u0437\u044F\u0442\u044C \u043D\u0430\u043F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C ${vehicle.data.model}, \u041A\u0440\u044B\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F CAR ON TIME. \u0410\u0440\u0435\u043D\u0434\u0430 - \u044D\u0442\u043E \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u041A\u0440\u044B\u043C\u0443.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "h1": h1, "data-astro-cid-zvbiugqo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container md:mx-auto out-block flex-wrap xl:flex-nowrap gap-4" data-astro-cid-zvbiugqo> <div class="" data-astro-cid-zvbiugqo> <div class="main-block flex-wrap 2xl:flex-nowrap m-2 gap-2" data-astro-cid-zvbiugqo> <div class="embla lg:min-w-[800px]" data-astro-cid-zvbiugqo> <div class="embla__viewport" data-astro-cid-zvbiugqo> <div class="embla__container" data-astro-cid-zvbiugqo> <div class="embla__slide" data-astro-cid-zvbiugqo> <img${addAttribute(vehicle.data.images[0].image, "src")} alt="Main car image" data-astro-cid-zvbiugqo> </div> ${vehicle.data.real_photos && vehicle.data.real_photos.length > 0 ? vehicle.data.real_photos.map((photo) => renderTemplate`<div class="embla__slide" data-astro-cid-zvbiugqo> <img${addAttribute(photo.replace("_w200", ""), "src")} alt="Real photo" data-astro-cid-zvbiugqo> </div>`) : ""} </div> </div> <button class="embla__button embla__button--prev" aria-label="Previous slide" data-astro-cid-zvbiugqo> <span class="embla__icon" data-astro-cid-zvbiugqo></span> </button> <button class="embla__button embla__button--next" aria-label="Next slide" data-astro-cid-zvbiugqo> <span class="embla__icon" data-astro-cid-zvbiugqo></span> </button> </div> <ul class="car-card inline-flex flex-col flex-wrap md:flex-nowrap" data-astro-cid-zvbiugqo> <li data-astro-cid-zvbiugqo>Класс:</li> <li data-astro-cid-zvbiugqo>Год выпуска: <strong data-astro-cid-zvbiugqo>${vehicle.data.year}</strong></li> <li data-astro-cid-zvbiugqo>Двигатель: <strong data-astro-cid-zvbiugqo>${vehicle.data.engine_capacity}</strong></li> <li data-astro-cid-zvbiugqo>Коробка передач: <strong data-astro-cid-zvbiugqo>${vehicle.data.transmission}</strong></li> <li data-astro-cid-zvbiugqo>Топливо: <strong data-astro-cid-zvbiugqo>${vehicle.data.engine_type}</strong></li> <li data-astro-cid-zvbiugqo>Мест: <strong data-astro-cid-zvbiugqo>${vehicle.data.seats}</strong></li> <li data-astro-cid-zvbiugqo>Цвет: <strong data-astro-cid-zvbiugqo>${vehicle.data.color}</strong></li> <li data-astro-cid-zvbiugqo>
Минимально дней аренды: <strong data-astro-cid-zvbiugqo>${vehicle.data.rent_period_days}</strong> </li> <li data-astro-cid-zvbiugqo>
Общая стоимость: <strong data-astro-cid-zvbiugqo>${vehicle.data.rate_subtotal}</strong> </li> <li data-astro-cid-zvbiugqo>
Стоимость в день: <strong data-astro-cid-zvbiugqo>${vehicle.data.rate_per_day}</strong> </li> <li data-astro-cid-zvbiugqo>Депозит: <strong data-astro-cid-zvbiugqo>${vehicle.data.deposit}</strong></li> </ul> </div> <div class="" data-astro-cid-zvbiugqo> <h2 class="py-4 font-black text-xl uppercase" data-astro-cid-zvbiugqo>Онлайн-заявка:</h2> ${renderComponent($$result2, "Form", $$Form, { "data-astro-cid-zvbiugqo": true })} </div> <h2 class="py-4 font-black text-xl uppercase m-2" data-astro-cid-zvbiugqo>
Дополнительные услуги:
</h2> <div class="md:columns-2 add m-2" data-astro-cid-zvbiugqo> <p data-astro-cid-zvbiugqo>Навигатор <strong data-astro-cid-zvbiugqo>150 ₽ в сутки</strong></p> <p data-astro-cid-zvbiugqo>Детское кресло <strong data-astro-cid-zvbiugqo>200 ₽ в сутки</strong></p> <p data-astro-cid-zvbiugqo>Набор автомобилиста <strong data-astro-cid-zvbiugqo>Бесплатно</strong></p> <p data-astro-cid-zvbiugqo>Отмена залога и франшизы <strong data-astro-cid-zvbiugqo>уточняйте у менеджера</strong></p> <p data-astro-cid-zvbiugqo>Wi-Fi Интернет <strong data-astro-cid-zvbiugqo>300 ₽ в сутки</strong></p> <p data-astro-cid-zvbiugqo>Мойка кузова автомобиля <strong data-astro-cid-zvbiugqo>500 ₽</strong></p> <p data-astro-cid-zvbiugqo>Мойка салона автомобиля <strong data-astro-cid-zvbiugqo>500 ₽</strong></p> <p data-astro-cid-zvbiugqo>Химчистка салона автомобиля <strong data-astro-cid-zvbiugqo>3000 ₽</strong></p> <p data-astro-cid-zvbiugqo>Полировка кузова автомобиля <strong data-astro-cid-zvbiugqo>5000 ₽</strong></p> </div> </div> <div class="sidebar-column" data-astro-cid-zvbiugqo> <div class="inner m-2" data-astro-cid-zvbiugqo> <h2 class="py-4 font-black text-xl uppercase" data-astro-cid-zvbiugqo>Аренда автомобиля</h2> <p class="gbox" data-astro-cid-zvbiugqo>
Внимание! Стоимость аренды данного автомобиля на интересующие Вас даты
					уточняйте у менеджеров отдела бронирования!!!
</p> <h2 class="py-4 font-black text-xl uppercase" data-astro-cid-zvbiugqo>Тарифы</h2> <table class="tarifs" data-astro-cid-zvbiugqo> <tr data-astro-cid-zvbiugqo> <td data-astro-cid-zvbiugqo>Аренда</td> <td data-astro-cid-zvbiugqo>Стоимость</td> </tr> <tr data-astro-cid-zvbiugqo> <td data-astro-cid-zvbiugqo>1 сутки</td> <td data-astro-cid-zvbiugqo>${vehicle.data.rate_per_day} руб/сутки</td> </tr> <tr data-astro-cid-zvbiugqo> <td data-astro-cid-zvbiugqo>от 3 до ${vehicle.data.rent_period_days} суток</td> <td data-astro-cid-zvbiugqo>${vehicle.data.rate_subtotal} руб/сутки</td> </tr> <tr data-astro-cid-zvbiugqo> <td data-astro-cid-zvbiugqo>от 7 суток и более</td> <td data-astro-cid-zvbiugqo>По договеренности</td> </tr> </table> <h2 class="py-4 font-black text-xl uppercase" data-astro-cid-zvbiugqo>Доступные цвета</h2> <p data-astro-cid-zvbiugqo>${vehicle.data.color}</p> </div> <div class="inner m-2" data-astro-cid-zvbiugqo> <h2 class="py-4 font-black text-xl uppercase" data-astro-cid-zvbiugqo>Условия аренды</h2> <div class="" data-astro-cid-zvbiugqo> <strong data-astro-cid-zvbiugqo>Возраст:</strong> с 22 лет<br data-astro-cid-zvbiugqo> <strong data-astro-cid-zvbiugqo>Стаж:</strong> не менее 3 лет<br data-astro-cid-zvbiugqo> <strong data-astro-cid-zvbiugqo>Залог:</strong> от 5 000 ₽
</div> <h2 class="py-4 font-black text-xl uppercase" data-astro-cid-zvbiugqo>Необходимые документы</h2> <strong data-astro-cid-zvbiugqo>Для граждан РФ:</strong> Паспорт РФ, действующая прописка, Водительское
				удостоверение<br data-astro-cid-zvbiugqo> <strong data-astro-cid-zvbiugqo>Для иностранных граждан:</strong> Заграничный паспорт, Водительское
				удостоверение международного образца
<h2 class="py-4 font-black text-xl uppercase" data-astro-cid-zvbiugqo>
Договор аренды автомобиля
</h2> <ul data-astro-cid-zvbiugqo> <li data-astro-cid-zvbiugqo> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:download", "class": "inline-block mr-2", "data-astro-cid-zvbiugqo": true })}<a href="" data-astro-cid-zvbiugqo>Договор аренды автомобиля без водителя для физлиц (docx) /
							35.20kb
</a> </li> <li data-astro-cid-zvbiugqo> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:download", "class": "inline-block mr-2", "data-astro-cid-zvbiugqo": true })}<a href="" data-astro-cid-zvbiugqo>Договор аренды автомобиля без водителя для юрлиц (docx) / 43.20kb
</a> </li> <li data-astro-cid-zvbiugqo> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:download", "class": "inline-block mr-2", "data-astro-cid-zvbiugqo": true })}<a href="" data-astro-cid-zvbiugqo>Дополнительное соглашение к договору (docx) / 23.90kb
</a> </li> </ul> </div> <div class="inner m-2" data-astro-cid-zvbiugqo> <h2 class="py-4 font-black text-xl uppercase" data-astro-cid-zvbiugqo>Условия аренды</h2> <strong data-astro-cid-zvbiugqo>Возраст:</strong> с 22 лет<br data-astro-cid-zvbiugqo> <strong data-astro-cid-zvbiugqo>Стаж:</strong> не менее 3 лет<br data-astro-cid-zvbiugqo> <strong data-astro-cid-zvbiugqo>Залог:</strong> от 5 000 ₽
<h2 class="py-4 font-black text-xl uppercase" data-astro-cid-zvbiugqo>Поддержка</h2> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:phone", "class": "inline-block mr-2", "size": "24", "data-astro-cid-zvbiugqo": true })} <strong data-astro-cid-zvbiugqo>+7 978 955 60 60</strong><br data-astro-cid-zvbiugqo> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:whatsapp", "class": "inline-block mr-2", "size": "24", "data-astro-cid-zvbiugqo": true })} <strong data-astro-cid-zvbiugqo>+7 978 955 60 60</strong><br data-astro-cid-zvbiugqo> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:email", "class": "inline-block mr-2", "size": "24", "data-astro-cid-zvbiugqo": true })} <strong data-astro-cid-zvbiugqo>info@car-on-time.ru</strong> </div> </div> </div>   ` })}`;
}, "C:/Users/user/Desktop/atest/src/pages/vehicles/[id].astro", void 0);

const $$file = "C:/Users/user/Desktop/atest/src/pages/vehicles/[id].astro";
const $$url = "/vehicles/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
