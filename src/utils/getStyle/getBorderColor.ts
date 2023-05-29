import theme from "../../components/config/theme";
import type { GetBorderColorType } from "../../types/utils/GetStyle";
import { isValidSystemColorsKey } from "../../components/config/theme";

const getBorderColor = (datas: GetBorderColorType) => {
	const { borderColor, breakpoint } = datas;
	if (typeof borderColor === "string") {
		const isKey = isValidSystemColorsKey(borderColor);
		if (isKey) return theme.colors.systemColors[borderColor];
		if (!isKey) return borderColor;
	}
	if (typeof borderColor === "object") {
		if (!breakpoint) return undefined;
		const resposiveBorderColor = borderColor[breakpoint];
		if (typeof resposiveBorderColor === "string") {
			const isKey = isValidSystemColorsKey(resposiveBorderColor);
			if (isKey) return theme.colors.systemColors[resposiveBorderColor];
			if (!isKey) return resposiveBorderColor;
		}
	}
	return undefined;
};
export default getBorderColor;
