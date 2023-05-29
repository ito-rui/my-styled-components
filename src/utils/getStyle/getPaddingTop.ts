import type { GetPaddingTopType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getPaddingTop = (datas: GetPaddingTopType) => {
	const { paddingTop, breakpoint } = datas;
	if (typeof paddingTop === "string") {
		const isKey = isValidSpacesKey(paddingTop);
		if (isKey) return theme.sizes.spaces[paddingTop];
		return paddingTop;
	}
	if (typeof paddingTop === "number") {
		const isKey = isValidSpacesKey(paddingTop);
		if (isKey) return theme.sizes.spaces[paddingTop];
		return `${paddingTop}rem`;
	}
	if (typeof paddingTop === "object") {
		if (!breakpoint) return undefined;
		const resposivePaddingTop = paddingTop[breakpoint];
		if (typeof resposivePaddingTop === "string") {
			const isKey = isValidSpacesKey(resposivePaddingTop);
			if (isKey) return theme.sizes.spaces[resposivePaddingTop];
			return resposivePaddingTop;
		}
		if (typeof resposivePaddingTop === "number") {
			const isKey = isValidSpacesKey(resposivePaddingTop);
			if (isKey) return theme.sizes.spaces[resposivePaddingTop];
			return `${resposivePaddingTop}rem`;
		}
	}
	return undefined;
};
export default getPaddingTop;
