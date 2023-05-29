const isValidKey = <T extends string | number>(value: string | number, obj: Record<string | number, unknown>): value is T => {
	return value in obj;
};

export default isValidKey;
