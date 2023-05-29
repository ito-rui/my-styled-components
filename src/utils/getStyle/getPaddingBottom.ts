import type { GetPaddingBottomType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getPaddingBottom = (datas: GetPaddingBottomType) => {
	const { paddingBottom, breakpoint } = datas;
	if (typeof paddingBottom === "string") {
		const isKey = isValidSpacesKey(paddingBottom);
		if (isKey) return theme.sizes.spaces[paddingBottom];
		return paddingBottom;
	}
	if (typeof paddingBottom === "number") {
		const isKey = isValidSpacesKey(paddingBottom);
		if (isKey) return theme.sizes.spaces[paddingBottom];
		return `${paddingBottom}rem`;
	}
	if (typeof paddingBottom === "object") {
		if (!breakpoint) return undefined;
		const resposivePaddingBottom = paddingBottom[breakpoint];
		if (typeof resposivePaddingBottom === "string") {
			const isKey = isValidSpacesKey(resposivePaddingBottom);
			if (isKey) return theme.sizes.spaces[resposivePaddingBottom];
			return resposivePaddingBottom;
		}
		if (typeof resposivePaddingBottom === "number") {
			const isKey = isValidSpacesKey(resposivePaddingBottom);
			if (isKey) return theme.sizes.spaces[resposivePaddingBottom];
			return `${resposivePaddingBottom}rem`;
		}
	}
	return undefined;
};
export default getPaddingBottom;
