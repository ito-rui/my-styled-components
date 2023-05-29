import type { GetMarginTopType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getMarginTop = (datas: GetMarginTopType) => {
	const { marginTop, breakpoint } = datas;
	if (typeof marginTop === "string") {
		const isKey = isValidSpacesKey(marginTop);
		if (isKey) return theme.sizes.spaces[marginTop];
		return marginTop;
	}
	if (typeof marginTop === "number") {
		const isKey = isValidSpacesKey(marginTop);
		if (isKey) return theme.sizes.spaces[marginTop];
		return `${marginTop}rem`;
	}
	if (typeof marginTop === "object") {
		if (!breakpoint) return undefined;
		const resposiveMarginTop = marginTop[breakpoint];
		if (typeof resposiveMarginTop === "string") {
			const isKey = isValidSpacesKey(resposiveMarginTop);
			if (isKey) return theme.sizes.spaces[resposiveMarginTop];
			return resposiveMarginTop;
		}
		if (typeof resposiveMarginTop === "number") {
			const isKey = isValidSpacesKey(resposiveMarginTop);
			if (isKey) return theme.sizes.spaces[resposiveMarginTop];
			return `${resposiveMarginTop}rem`;
		}
	}
	return undefined;
};
export default getMarginTop;
