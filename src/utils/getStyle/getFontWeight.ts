import theme from "../../components/config/theme";
import type { GetFontWeightType } from "../../types/utils/GetStyle";
import { isValidFontWeightsKey } from "../../components/config/theme";

const getFontWeight = (datas: GetFontWeightType) => {
	const { fontWeight, breakpoint } = datas;
	if (typeof fontWeight === "string") {
		const isKey = isValidFontWeightsKey(fontWeight);
		if (isKey) return theme.fonts.fontWeights[fontWeight];
		if (!isKey) return fontWeight;
	}
	if (typeof fontWeight === "number") return `${fontWeight}rem`;
	if (typeof fontWeight === "object") {
		if (!breakpoint) return undefined;
		const responsiveFontWeight = fontWeight[breakpoint];
		if (typeof responsiveFontWeight === "string") {
			const isKey = isValidFontWeightsKey(responsiveFontWeight);
			if (isKey) return theme.fonts.fontWeights[responsiveFontWeight];
			if (!isKey) return responsiveFontWeight;
		}
		if (typeof responsiveFontWeight === "number") return `${responsiveFontWeight}rem`;
	}
	return undefined;
};
export default getFontWeight;
