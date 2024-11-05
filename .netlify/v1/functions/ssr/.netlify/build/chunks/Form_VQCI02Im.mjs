import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_B8UghB88.mjs';
import 'kleur/colors';
import 'clsx';

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="self-start flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-4"> <input type="text" name="name" required placeholder="Имя:" class="w-full flex-1 min-w-1/2 min-w-80 p-2 border text-black"> <input type="email" name="email" required placeholder="Email:" class="w-full flex-1 min-w-1/2 min-w-80 p-2 border text-black"> <textarea name="message" required placeholder="Сообщение:" class="w-full p-2 border text-black h-48"></textarea> <button type="submit" class="bg-red-600 p-2 text-white cursor-pointer">Отправить</button> </form>`;
}, "C:/Users/user/Desktop/atest/src/components/Form.astro", void 0);

export { $$Form as $ };
