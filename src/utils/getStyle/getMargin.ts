import type { GetMarginType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getMargin = (datas: GetMarginType) => {
	const { margin, breakpoint } = datas;
	if (typeof margin === "string") {
		const isKey = isValidSpacesKey(margin);
		if (isKey) return theme.sizes.spaces[margin];
		return margin;
	}
	if (typeof margin === "number") {
		const isKey = isValidSpacesKey(margin);
		if (isKey) return theme.sizes.spaces[margin];
		return `${margin}rem`;
	}
	if (typeof margin === "object") {
		if (!breakpoint) return undefined;
		const resposiveMargin = margin[breakpoint];
		if (typeof resposiveMargin === "string") {
			const isKey = isValidSpacesKey(resposiveMargin);
			if (isKey) return theme.sizes.spaces[resposiveMargin];
			return resposiveMargin;
		}
		if (typeof resposiveMargin === "number") {
			const isKey = isValidSpacesKey(resposiveMargin);
			if (isKey) return theme.sizes.spaces[resposiveMargin];
			return `${resposiveMargin}rem`;
		}
	}
	return undefined;
};
export default getMargin;
