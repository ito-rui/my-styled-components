import theme from "../../components/config/theme";
import type { GetColorType } from "../../types/utils/GetStyle";
import { isValidSystemColorsKey } from "../../components/config/theme";

const getColor = (datas: GetColorType) => {
	const { textColor, breakpoint } = datas;
	if (typeof textColor === "string") {
		const isKey = isValidSystemColorsKey(textColor);
		if (isKey) return theme.colors.systemColors[textColor];
		if (!isKey) return textColor;
	}
	if (typeof textColor === "object") {
		if (!breakpoint) return undefined;
		const resposiveTextColor = textColor[breakpoint];
		if (typeof resposiveTextColor === "string") {
			const isKey = isValidSystemColorsKey(resposiveTextColor);
			if (isKey) return theme.colors.systemColors[resposiveTextColor];
			if (!isKey) return resposiveTextColor;
		}
	}
	return undefined;
};
export default getColor;
