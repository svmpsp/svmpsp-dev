export function formatName(firstName: string, lastName: string): string {
	return `${firstName} ${lastName}`.trim();
}

export function validateEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}