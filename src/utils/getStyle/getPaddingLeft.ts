import type { GetPaddingLeftType } from "../../types/utils/GetStyle";
import theme, { isValidSpacesKey } from "../../components/config/theme";

const getPaddingLeft = (datas: GetPaddingLeftType) => {
	const { paddingLeft, breakpoint } = datas;
	if (typeof paddingLeft === "string") {
		const isKey = isValidSpacesKey(paddingLeft);
		if (isKey) return theme.sizes.spaces[paddingLeft];
		return paddingLeft;
	}
	if (typeof paddingLeft === "number") {
		const isKey = isValidSpacesKey(paddingLeft);
		if (isKey) return theme.sizes.spaces[paddingLeft];
		return `${paddingLeft}rem`;
	}
	if (typeof paddingLeft === "object") {
		if (!breakpoint) return undefined;
		const resposivePaddingLeft = paddingLeft[breakpoint];
		if (typeof resposivePaddingLeft === "string") {
			const isKey = isValidSpacesKey(resposivePaddingLeft);
			if (isKey) return theme.sizes.spaces[resposivePaddingLeft];
			return resposivePaddingLeft;
		}
		if (typeof resposivePaddingLeft === "number") {
			const isKey = isValidSpacesKey(resposivePaddingLeft);
			if (isKey) return theme.sizes.spaces[resposivePaddingLeft];
			return `${resposivePaddingLeft}rem`;
		}
	}
	return undefined;
};
export default getPaddingLeft;
