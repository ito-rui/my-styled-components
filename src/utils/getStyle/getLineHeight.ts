import type { GetLineHeightType } from "../../types/utils/GetStyle";
import theme, { isValidLineHeightsKey } from "../../components/config/theme";

const getLineHeight = (datas: GetLineHeightType) => {
	const { lineHeight, breakpoint } = datas;
	if (typeof lineHeight === "string") {
		const isKey = isValidLineHeightsKey(lineHeight);
		if (isKey) return theme.sizes.lineHeights[lineHeight];
		return lineHeight;
	}
	if (typeof lineHeight === "number") {
		return `${lineHeight}rem`;
	}
	if (typeof lineHeight === "object") {
		if (!breakpoint) return undefined;
		const responsiveLineHeight = lineHeight[breakpoint];
		if (typeof responsiveLineHeight === "string") {
			const isKey = isValidLineHeightsKey(responsiveLineHeight);
			if (isKey) return theme.sizes.lineHeights[responsiveLineHeight];
			return responsiveLineHeight;
		}
		if (typeof responsiveLineHeight === "number") {
			return `${responsiveLineHeight}rem`;
		}
	}
	return undefined;
};
export default getLineHeight;
