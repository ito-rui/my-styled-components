import isValidKey from "../../../utils/isKey";

const fontWeights = {
	hairline: 100,
	thin: 200,
	light: 300,
	normal: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	black: 900,
} as const;

export type FontWeightsKey = keyof typeof fontWeights;

export type FontWeightsValue = (typeof fontWeights)[FontWeightsKey];

export const isValidFontWeightsKey = (value: string): value is FontWeightsKey => {
	return isValidKey<FontWeightsKey>(value, fontWeights);
};

export default fontWeights;
