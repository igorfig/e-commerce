export const dateFormatter = (timestamp) => {
	const date = new Date(timestamp);

	return new Intl.DateTimeFormat('pt-BR').format(date);
}