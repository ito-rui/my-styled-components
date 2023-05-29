import type { GetFontSizeType } from "../../types/utils/GetStyle";
import theme, { isValidFontSizesKey } from "../../components/config/theme";

const getFontSize = (datas: GetFontSizeType) => {
	const { fontSize, breakpoint } = datas;
	if (typeof fontSize === "string") {
		const isKey = isValidFontSizesKey(fontSize);
		if (isKey) return theme.fonts.fontSizes[fontSize];
		return fontSize;
	}
	if (typeof fontSize === "number") return `${fontSize}rem`;
	if (typeof fontSize === "object") {
		if (!breakpoint) return undefined;
		const resposiveFontSize = fontSize[breakpoint];
		if (typeof resposiveFontSize === "string") {
			const isKey = isValidFontSizesKey(resposiveFontSize);
			if (isKey) return theme.fonts.fontSizes[resposiveFontSize];
			return resposiveFontSize;
		}
		if (typeof resposiveFontSize === "number") return `${resposiveFontSize}rem`;
	}
	return undefined;
};
export default getFontSize;
