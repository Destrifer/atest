import { defineCollection } from "astro:content";

const apiCars = defineCollection({
	loader: async () => {
		const response = await fetch("https://new.mycarrental.ru/api/v2/search_cars?from-id=10&to-id=10&to-date=10.11.2024&from-date=04.11.2024&from-time=12%3A00&to-time=12%3A00&promocode=null&per_page=100");
		const data = await response.json();
		const vehicles = data.vehicles;
		return vehicles.map((vehicle: any) => ({
			id: vehicle.id,
			...vehicle,
		}));
	},
});

export const collections = {
	apiCars,
};
