import type { GetMarginLeftType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getMarginLeft = (datas: GetMarginLeftType) => {
	const { marginLeft, breakpoint } = datas;
	if (typeof marginLeft === "string") {
		const isKey = isValidSpacesKey(marginLeft);
		if (isKey) return theme.sizes.spaces[marginLeft];
		return marginLeft;
	}
	if (typeof marginLeft === "number") {
		const isKey = isValidSpacesKey(marginLeft);
		if (isKey) return theme.sizes.spaces[marginLeft];
		return `${marginLeft}rem`;
	}
	if (typeof marginLeft === "object") {
		if (!breakpoint) return undefined;
		const resposiveMarginLeft = marginLeft[breakpoint];
		if (typeof resposiveMarginLeft === "string") {
			const isKey = isValidSpacesKey(resposiveMarginLeft);
			if (isKey) return theme.sizes.spaces[resposiveMarginLeft];
			return resposiveMarginLeft;
		}
		if (typeof resposiveMarginLeft === "number") {
			const isKey = isValidSpacesKey(resposiveMarginLeft);
			if (isKey) return theme.sizes.spaces[resposiveMarginLeft];
			return `${resposiveMarginLeft}rem`;
		}
	}
	return undefined;
};
export default getMarginLeft;
