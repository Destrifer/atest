import { defineCollection } from "astro:content";

// Функция для вычисления даты с добавлением дней и форматированием в "DD.MM.YYYY"
function getDateWithOffset(daysOffset) {
	const date = new Date();
	date.setDate(date.getDate() + daysOffset);
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы от 0 до 11
	const year = date.getFullYear();
	return `${day}.${month}.${year}`; // Формат "DD.MM.YYYY"
}

const apiCars = defineCollection({
	loader: async () => {
		// Устанавливаем значения по умолчанию для дат
		const fromDate = getDateWithOffset(3);
		const toDate = getDateWithOffset(10);
		const fromId = '10';
		const toId = '10';
		const promocode = ''; // Оставляем пустым, если не используется

		const response = await fetch(
			`https://new.mycarrental.ru/api/v2/search_cars?from-id=${fromId}&to-id=${toId}&to-date=${toDate}&from-date=${fromDate}&from-time=12%3A00&to-time=12%3A00&promocode=${promocode}&per_page=100`
		);
		const data = await response.json();
		const vehicles = data.vehicles;
		return vehicles.map((vehicle) => ({
			id: vehicle.id,
			...vehicle,
		}));
	},
});

export const collections = {
	apiCars,
};
