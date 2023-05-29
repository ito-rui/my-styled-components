import isValidKey from "../../../utils/isKey";

const lineHeights = {
	normal: "normal",
	none: 1,
	shorter: 1.25,
	short: 1.375,
	base: 1.5,
	tall: 1.625,
	taller: 2,
} as const;

export type LineHeightsKey = keyof typeof lineHeights;

export type LineHeightsValue = (typeof lineHeights)[LineHeightsKey];

export const isValidLineHeightsKey = (value: LineHeightsKey | string | number): value is LineHeightsKey => {
	return isValidKey<LineHeightsKey>(value, lineHeights);
};

export default lineHeights;
