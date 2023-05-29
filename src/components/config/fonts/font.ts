import isValidKey from "../../../utils/isKey";

const fonts = {
	family: {
		sans: '"Open Sans", sans-serif',
	},
} as const;

export type FontsKey = keyof typeof fonts;

export type FontsValue = (typeof fonts)[FontsKey];

export const isValidFontsKey = (value: string): value is FontsKey => {
	return isValidKey<FontsKey>(value, fonts);
};

export default fonts;
