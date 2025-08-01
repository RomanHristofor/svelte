export const validateEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
};

export const validatePassword = (password) => {
	if (password.length < 8 || !/[!@#$%^&*]/.test(password)) {
		return 'Password too weak (min 8 chars + special char)'
	}
	return '';
};
