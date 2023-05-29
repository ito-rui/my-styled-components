import type { GetMarginRightType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getMarginRight = (datas: GetMarginRightType) => {
	const { marginRight, breakpoint } = datas;
	if (typeof marginRight === "string") {
		const isKey = isValidSpacesKey(marginRight);
		if (isKey) return theme.sizes.spaces[marginRight];
		return marginRight;
	}
	if (typeof marginRight === "number") {
		const isKey = isValidSpacesKey(marginRight);
		if (isKey) return theme.sizes.spaces[marginRight];
		return `${marginRight}rem`;
	}
	if (typeof marginRight === "object") {
		if (!breakpoint) return undefined;
		const resposiveMarginRight = marginRight[breakpoint];
		if (typeof resposiveMarginRight === "string") {
			const isKey = isValidSpacesKey(resposiveMarginRight);
			if (isKey) return theme.sizes.spaces[resposiveMarginRight];
			return resposiveMarginRight;
		}
		if (typeof resposiveMarginRight === "number") {
			const isKey = isValidSpacesKey(resposiveMarginRight);
			if (isKey) return theme.sizes.spaces[resposiveMarginRight];
			return `${resposiveMarginRight}rem`;
		}
	}
	return undefined;
};
export default getMarginRight;
