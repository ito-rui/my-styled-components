import type { GetPaddingType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getPadding = (datas: GetPaddingType) => {
	const { padding, breakpoint } = datas;
	if (typeof padding === "string") {
		const isKey = isValidSpacesKey(padding);
		if (isKey) return theme.sizes.spaces[padding];
		return padding;
	}
	if (typeof padding === "number") {
		const isKey = isValidSpacesKey(padding);
		if (isKey) return theme.sizes.spaces[padding];
		return `${padding}rem`;
	}
	if (typeof padding === "object") {
		if (!breakpoint) return undefined;
		const resposivePadding = padding[breakpoint];
		if (typeof resposivePadding === "string") {
			const isKey = isValidSpacesKey(resposivePadding);
			if (isKey) return theme.sizes.spaces[resposivePadding];
			return resposivePadding;
		}
		if (typeof resposivePadding === "number") {
			const isKey = isValidSpacesKey(resposivePadding);
			if (isKey) return theme.sizes.spaces[resposivePadding];
			return `${resposivePadding}rem`;
		}
	}
	return undefined;
};
export default getPadding;
