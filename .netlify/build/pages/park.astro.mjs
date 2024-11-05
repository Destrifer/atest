/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B8UghB88.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_UZKhm0yb.mjs';
import { $ as $$Layout } from '../chunks/Layout_BweagtQs.mjs';
import { $ as $$CarCard } from '../chunks/CarCard_Ck2xxZbM.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Park = createComponent(async ($$result, $$props, $$slots) => {
  const cars = await getCollection("apiCars");
  const h1 = "\u041F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E \u0432 \u041A\u0440\u044B\u043C\u0443 \u0431\u0435\u0437 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F";
  const title = "\u041F\u0430\u0440\u043A \u0430\u0432\u0442\u043E - \u0430\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0431\u0435\u0437 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F | \u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0432 \u041A\u0440\u044B\u043C\u0443 Car on Time";
  const description = "\u041F\u0430\u0440\u043A \u0430\u0432\u0442\u043E - \u0430\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E \u0431\u0435\u0437 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F | \u0412\u0437\u044F\u0442\u044C \u043D\u0430\u043F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C, \u041A\u0440\u044B\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F CAR ON TIME. \u0410\u0440\u0435\u043D\u0434\u0430 - \u044D\u0442\u043E \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u041A\u0440\u044B\u043C\u0443.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "h1": h1, "data-astro-cid-toeyabum": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto" data-astro-cid-toeyabum> <!-- Фильтр по классам авто с кнопками --> <div class="filter-section m-4 flex flex-wrap gap-2 justify-center" data-astro-cid-toeyabum> <button class="tab-button" data-id="1" data-astro-cid-toeyabum>Комфорт класс</button> <button class="tab-button" data-id="2" data-astro-cid-toeyabum>Бизнес</button> <!-- Убрана кнопка с data-id="3" --> <button class="tab-button" data-id="4" data-astro-cid-toeyabum>Кроссоверы</button> <button class="tab-button" data-id="5" data-astro-cid-toeyabum>Люкс</button> <button class="tab-button" data-id="6" data-astro-cid-toeyabum>Внедорожники</button> <button class="tab-button" data-id="7" data-astro-cid-toeyabum>Минивены</button> </div> <!-- Контейнер для карточек и сообщения --> <div class="cars-grid p-4" id="cars-container" data-astro-cid-toeyabum> ${cars.length > 0 ? (
    // Фильтруем автомобили, исключая те, у которых class_id равен 3
    cars.filter((car) => car.data.class_id !== 3).map((car) => renderTemplate`${renderComponent($$result2, "CarCard", $$CarCard, { "car": car, "data-id": car.data.class_id, "data-astro-cid-toeyabum": true })}`)
  ) : renderTemplate`<p class="mx-4" data-astro-cid-toeyabum>Машин больше нет</p>`} </div> <p id="no-cars-message" style="display: none;" class="mx-4" data-astro-cid-toeyabum>
Машин выбранного класса нет
</p> </div> ` })} <!-- Добавляем стили -->  <!-- Добавляем скрипт для фильтрации и обработки URL параметров --> `;
}, "C:/Users/user/Desktop/atest/src/pages/park.astro", void 0);

const $$file = "C:/Users/user/Desktop/atest/src/pages/park.astro";
const $$url = "/park";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Park,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
