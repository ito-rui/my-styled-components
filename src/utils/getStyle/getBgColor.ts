import theme from "../../components/config/theme";
import type { GetBgColorType } from "../../types/utils/GetStyle";
import { isValidSystemColorsKey } from "../../components/config/theme";

const getBgColor = (datas: GetBgColorType) => {
	const { bgColor, breakpoint } = datas;
	if (typeof bgColor === "string") {
		const isKey = isValidSystemColorsKey(bgColor);
		if (isKey) return theme.colors.systemColors[bgColor];
		if (!isKey) return bgColor;
	}
	if (typeof bgColor === "object") {
		if (!breakpoint) return undefined;
		const resposiveBgColor = bgColor[breakpoint];
		if (typeof resposiveBgColor === "string") {
			const isKey = isValidSystemColorsKey(resposiveBgColor);
			if (isKey) return theme.colors.systemColors[resposiveBgColor];
			if (!isKey) return resposiveBgColor;
		}
	}
	return undefined;
};
export default getBgColor;
