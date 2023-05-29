import isValidKey from "../../../utils/isKey";

const fontSizes = {
	xs: "0.75rem",
	sm: "0.875rem",
	base: "1rem",
	lg: "1.125rem",
	xl: "1.25rem",
	xl2: "1.5rem",
	xl3: "1.875rem",
	xl4: "2.25rem",
	xl5: "3rem",
	xl6: "3.75rem",
	xl7: "4.5rem",
} as const;

export type FontSizesKey = keyof typeof fontSizes;

export type FontSizesValue = (typeof fontSizes)[FontSizesKey];

export const isValidFontSizesKey = (value: string): value is FontSizesKey => {
	return isValidKey<FontSizesKey>(value, fontSizes);
};

export default fontSizes;
