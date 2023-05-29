import type { GetMarginBottomType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getMarginBottom = (datas: GetMarginBottomType) => {
	const { marginBottom, breakpoint } = datas;
	if (typeof marginBottom === "string") {
		const isKey = isValidSpacesKey(marginBottom);
		if (isKey) return theme.sizes.spaces[marginBottom];
		return marginBottom;
	}
	if (typeof marginBottom === "number") {
		const isKey = isValidSpacesKey(marginBottom);
		if (isKey) return theme.sizes.spaces[marginBottom];
		return `${marginBottom}rem`;
	}
	if (typeof marginBottom === "object") {
		if (!breakpoint) return undefined;
		const resposiveMarginBottom = marginBottom[breakpoint];
		if (typeof resposiveMarginBottom === "string") {
			const isKey = isValidSpacesKey(resposiveMarginBottom);
			if (isKey) return theme.sizes.spaces[resposiveMarginBottom];
			return resposiveMarginBottom;
		}
		if (typeof resposiveMarginBottom === "number") {
			const isKey = isValidSpacesKey(resposiveMarginBottom);
			if (isKey) return theme.sizes.spaces[resposiveMarginBottom];
			return `${resposiveMarginBottom}rem`;
		}
	}
	return undefined;
};
export default getMarginBottom;
