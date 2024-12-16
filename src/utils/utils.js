/**
 * Преобразует дату в строку формата "DD.MM.YYYY".
 * @param {string | Date} date - Дата в формате ISO или объект Date.
 * @returns {string} Дата в формате "DD.MM.YYYY".
 */

export function formatDateForAPI(date) {
	const d = new Date(date);
	const day = String(d.getDate()).padStart(2, "0");
	const month = String(d.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
	const year = d.getFullYear();
	return `${day}.${month}.${year}`;
}
